const express = require('express');   //Web uygulaması oluşturmak için kullanılan bir Node.js framework'ü.
const bodyParser = require('body-parser');   //HTTP isteklerinden gelen verileri işlemek için.
const session = require('express-session');    // Kullanıcı oturumlarını yönetmek 
const path = require('path');    //Dosya yollarını düzenlemek ve birleştirmek için.
const db = require('./db');   // MySQL bağlantısı için

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));
app.use(express.static('public'));


// Ana sayfa
app.get('/', (req, res) => {
  // Kullanıcı oturumu açıksa anasayfa sayfasına yönlendir
  if (req.session.user) {
    res.redirect('/anasayfa');
  } else {
    res.render('index', { user: req.session.user });  //render: EJS kullanarak kullanıcıyı index sayfasına gönd.
  }
});

// Kayıt işlemi
app.post('/register', (req, res) => {     //register yoluna post isteği gönderiliyor 
  const { username, password } = req.body; //body post isteklerinde gönderilen veriyi içeriyor.
                                //kullanıcı adı reve şifre çıkarıp ve bu değerleri username ve password değişkenlerine atıyp

                                // Kayıt işlemi

  // Kullanıcı adının varlığını kontrol etme
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) {
      console.error('Veritabanı hatası: ' + err.stack);
      return res.status(500).send('Internal Server Error');
    }

    if (result.length > 0) {
      // Kullanıcı zaten varsa, hata mesajıyla birlikte kayıt sayfasına yönlendir
      return res.render('index', { user: req.session.user, registerError: 'Bu kullanıcı adı mevcut, farklı bir kullanıcı adı ile kayıt olun!' });
    } else {
      // Kullanıcı adı kullanılmamışsa, yeni kullanıcıyı veritabanına ekle
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err, result) => {
        if (err) {
          console.error('Veritabanı hatası: ' + err.stack);
          return res.status(500).send('Internal Server Error');
        }
        console.log('Kullanıcı başarıyla kaydedildi.');
        req.session.user = username;
        return res.redirect('/anasayfa');
      });
    }
  });
});

// Giriş işlemi
app.post('/login', (req, res) => {
  const { username, password } = req.body;

   // Kullanıcı doğrulama işlemi
   db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      // Kullanıcı adı var, şimdi şifreyi kontrol edelim
      db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
          req.session.user = username;

          res.redirect('/anasayfa');// Giriş yapıldıktan sonra "anasayfa " sayfasına yönlendir
        } else {
          // Şifre yanlışsa
          res.render('index', { user: req.session.user, error: 'Kullanıcı Adı veya Şifre Hatalı!' });
        }
      });
    } else {
      // Kullanıcı adı bulunamadı
      res.render('index', { user: req.session.user, error: 'Kullanıcı kayıtlı değil, lütfen kayıt olunuz.' });
    }
  });
})

// Çıkış işlemi
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

// anasayfa 
app.get('/anasayfa', (req, res) => {
  if (req.session.user) {
    res.render('anasayfa', { username: req.session.user }); // EJS kullanarak sayfayı html sayfasıını olusturup gönderiyo
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
    const { weight, height } = req.body;  //body post isteklerinde gönderilen kilo ve boy değerini içeriyor
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
          res.json({}); // Kullanıcının verisi yoksa boş obje gönderiypr
        }
      });
    } else {
      res.status(401).send('Unauthorized'); // Kullanıcı giriş yapmamışsa
    }
  });


  
  
  
