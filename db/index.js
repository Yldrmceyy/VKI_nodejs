const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'db_cey'
});

db.connect((err) => {
  if (err) {
    console.error('Veritabanına bağlanırken hata oluştu: ' + err.stack);
    return;
  }
  console.log('MySQL veritabanına bağlandı. ID: ' + db.threadId);
});

module.exports = db; //Oluşturulan bağlantı nesnesi (db) dışa aktarıld.


//Bu kod bloğunda; MySQL veritabanına bağlanmak için gerekli bilgileri yazdım, bir bağlantı oluşturdum


