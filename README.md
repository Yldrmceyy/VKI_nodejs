# TechCareer_Vki_Project
# Vücut Kitle İndeksi (VKİ) Hesaplayıcı
## Amaç
Vücut Kitle İndeksi (VKİ), bir kişinin kilo durumunu değerlendirmek için kullanılan bir ölçümdür. Bu uygulama, kullanıcılara VKİ hesaplama ve bu verileri güvenli bir şekilde saklama imkanı sunar.

## Kullanılan Teknolojiler

- **Node.js ve Express:** Sunucu tarafı uygulama geliştirmek için kullanıldı.
- **MySQL:** Kullanıcı bilgileri ve VKİ verileri veritabanında saklanır.
- **EJS (Embedded JavaScript):** Sunucu tarafında dinamik HTML sayfaları oluşturmak için kullanıldı.
- **HTML, CSS, JavaScript:** İstemci tarafındaki kullanıcı arayüzü geliştirmek için kullanıldı.

## Nasıl Kullanılır?
1. Projeyi bilgisayarınıza klonlayın:
```sh 
(https://github.com/Yldrmceyy/TechCareer_Vki_Project.git)https://github.com/Yldrmceyy/TechCareer_Vki_Project.git
 ````
2. Proje dizinine gidin:
  ```sh 
cd TechCareer_Vki_Project
   ````
4.Gerekli bağımlılıkları yükleyin::
   ```sh 
   npm install
   ````

4.Uygulamayı başlatın::
   ```sh 
   npm start
   ````
5.Tarayıcıda http://localhost:3000 adresine gidin.

## Proje Özellikleri ve Kullanım Senaryoları

**1- Kullanıcı Kaydı**:
Yeni kullanıcılar, kullanıcı adı ve şifre girişi yaparak sisteme kayıt olabilirler.

**2- Kullanıcı Giriş ve Çıkış**:
Kayıtlı kullanıcılar, kullanıcı adı ve şifreleriyle giriş yapabilirler.
Oturum açıkken, kullanıcılar "Çıkış" butonuyla oturumu kapatabilirler.

**3- Vücut Kitle Endeksi (VKİ) Hesaplama**:
Sisteme giriş yaptıktan sonra; kullanıcılar, kilo ve boy bilgilerini girerek VKİ hesaplayabilirler.
VKİ hesaplandıktan sonra sonuç kullanıcıya gösterilir.

**4- Bilgilerin Güncellenmesi**:
Kullanıcılar, giriş yaptıktan sonra mevcut bilgilerini güncelleyebilirler.
VKİ bilgileri güncellendiğinde, kullanıcıya sonuç tekrar gösterilir.

**5- Bilgilerin Saklanması**:
Kullanıcı bilgileri ve VKİ verileri MySQL veritabanında güvenli bir şekilde saklanır.
Oturum açıkken kullanıcının verileri çekilip ekrana gösterilebilir.

**6- Kullanıcı Arayüz**:
Projede EJS (Embedded JavaScript) kullanılarak dinamik HTML sayfaları oluşturulmuştur.
<br>
Kullanıcıların rahatça gezinebileceği ve bilgilerini güncelleyebileceği bir arayüz tasarlanmıştır.

Bu temel özellikler, kullanıcıların kayıt olmalarını, giriş yapmalarını, VKİ hesaplamalarını gerçekleştirmelerini ve bilgilerini güncellemelerini sağlar.

##Uygulama Ekran Görüntüleri
![Alternatif Metin](Login or Register.jpg)
