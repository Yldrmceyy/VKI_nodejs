const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const db = require('./db'); // MySQL bağlantısı

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));
app.use(express.static('public'));

// Ana sayfa
app.get('/', (req, res) => {
  // Kullanıcı oturumu açıksa hello sayfasına yönlendir
  if (req.session.user) {
    res.redirect('/hello');
  } else {
    res.render('index', { user: req.session.user });
  }
});

// Kayıt işlemi
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  // Kullanıcıyı veritabanına ekleme işlemi
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
    if (err) throw err;
    console.log('Kullanıcı başarıyla kaydedildi.');
    req.session.user = username;
    res.redirect('/hello'); // Kayıt olduktan sonra "Hello World" sayfasına yönlendir
  });
});

// Giriş işlemi
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Kullanıcı doğrulama işlemi
  db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      req.session.user = username;
    }
    res.redirect('/hello'); // Giriş yapıldıktan sonra "Hello World" sayfasına yönlendir
  });
});

// Çıkış işlemi
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// Hello  sayfası
app.get('/hello', (req, res) => {
  if (req.session.user) {
    res.render('hello', { username: req.session.user }); // EJS kullanarak sayfayı render et
  } else {
    res.redirect('/');
  }
});

// Sunucuyu başlatma
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

//oturum kapatma 
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
  });
  // Kullanıcı verilerini kaydetme
app.post('/calculate', (req, res) => {
    const { weight, height } = req.body;
    const username = req.session.user;
  
    // Eğer kullanıcı giriş yapmışsa
    if (username) {
      // Veritabanına ekleme işlemi
      db.query('INSERT INTO user_data (username, weight, height) VALUES (?, ?, ?)', [username, weight, height], (err, result) => {
        if (err) {
          console.error('Veri ekleme hatası: ' + err.stack);
          res.status(500).send('Internal Server Error');
          return;
        }
  
        console.log('Veri başarıyla eklendi.');
      });
    } else {
      res.status(401).send('Unauthorized'); // Kullanıcı giriş yapmamışsa
    }
  });
  // Kullanıcının verilerini çekme
app.get('/getuserdata', (req, res) => {
    const username = req.session.user;
  
    // Eğer kullanıcı giriş yapmışsa
    if (username) {
      // Veritabanından kullanıcının verilerini çekme işlemi
      db.query('SELECT weight, height FROM user_data WHERE username = ?', [username], (err, result) => {
        if (err) {
          console.error('Veri çekme hatası: ' + err.stack);
          res.status(500).send('Internal Server Error');
          return;
        }
  
        // Eğer kullanıcının verisi varsa
        if (result.length > 0) {
          const userData = {
            weight: result[(result.length)-1].weight,
            height: result[result.length-1].height,
          };
          res.json(userData);
          console.log(result);
        } else {
          res.json({}); // Kullanıcının verisi yoksa boş bir obje gönder
        }
      });
    } else {
      res.status(401).send('Unauthorized'); // Kullanıcı giriş yapmamışsa
    }
  });