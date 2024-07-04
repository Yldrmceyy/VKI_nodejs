# TechCareer_Vki_Project
# Vücut Kitle İndeksi (VKİ) Hesaplayıcı-tr
## Amaç
Vücut Kitle İndeksi (VKİ), bir kişinin kilo durumunu değerlendirmek için kullanılan bir ölçümdür.Bu uygulama, kullanıcılara VKİ hesaplama ve bu verilerini saklama imkanı sunar.

## Gereksinimler
- Node.js
- MySQL
- Git

## Kullanılan Teknolojiler

- **Node.js ve Express:** Sunucu tarafı uygulama geliştirmek için kullanıldı.
- **MySQL:** Kullanıcı bilgileri ve VKİ verileri veritabanında saklanır.
- **EJS (Embedded JavaScript):** Sunucu tarafında dinamik HTML sayfaları oluşturmak için kullanıldı.
- **HTML, CSS, JavaScript:** İstemci tarafındaki kullanıcı arayüzü geliştirmek için kullanıldı.

## Nasıl Kullanılır?
1.Node.js Kurulumu:
Proje üzerinde çalışmaya başlamadan önce Node.js kurulumunu gerçekleştirin

2. Projeyi bilgisayarınıza klonlayın:
```sh 
 git clone https://github.com/Yldrmceyy/TechCareer_Vki_Project.git
 ````
Projeyi VsCode ile açın

3. Proje dizinine gidin:
  ```sh 
cd TechCareer_Vki_Project
   ````
4.Gerekli bağımlılıkları yükleyin::
   ```sh 
   npm install
   ````
5.MySQL veritabanını oluşturun ve bağlantı bilgilerini config.js/index.js dosyasına ekleyin.

6.Uygulamayı başlatın:
   ```sh 
   node app.js 
   ````
7.Tarayıcıda http://localhost:3000 adresine gidin.

## Proje Dizini
  ```sh 
TechCareer_Vki_Project/
├── db/
│    └──index.js
│ 
├── node_modules/
│    ├── (bağımlılıklar)
│    └── (...)
│
├── public/
|   ├── style.css
|   |     ├── style.css
|   |     └── style2.css
│   ├── img
│   └── script.js
│
├── views/
|     ├── anasayfa.ejs
|     └── index.ejs
|
├── app.js
├── package-lock.json
├── package.json
└── README.md
   ````
## Proje Özellikleri ve Kullanım

**1- Kullanıcı Kaydı**:
Yeni kullanıcılar, kullanıcı adı ve şifre girişi yaparak sisteme kayıt olabilirler.

**2- Kullanıcı Giriş ve Çıkış**:
Kayıtlı kullanıcılar, kullanıcı adı ve şifreleriyle giriş yapabilirler.
Oturum açıkken, kullanıcılar "Çıkış" butonuyla oturumu kapatabilirler.

**3- Vücut Kitle Endeksi (VKİ) Hesaplama**:
Sisteme giriş yaptıktan sonra; kullanıcılar, kilo ve boy bilgilerini girerek VKİ hesaplayabilirler.
VKİ hesaplandıktan sonra sonuç kullanıcıya gösterilir.

**4-Eski Verilerin Tekrar Gösterilmesi**:
 Aynı kullanıcı tekrar giriş yaptığında, girmiş olduğu eski verileri kullanıcıya sonuç olarak tekrar gösterebilir.

**5- Bilgilerin Saklanması**:
Kullanıcı bilgileri ve VKİ verileri MySQL veritabanında saklanır.
Oturum açıkken kullanıcının verileri çekilip ekrana gösterilebilir.


## Uygulama Ekran Görüntüleri

![proje_adım_yeni (1)](https://github.com/Yldrmceyy/TechCareer_Vki_Project/assets/106755050/0c6d288f-db91-48a8-ac26-be52f2c9e963)

## Lisans
Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için 
[MIT](LICENSE)
dosyasına bakın.

<br>

# Vücut Kitle İndeksi (VKİ) Hesaplayıcı- en
## Aim
Body Mass Index (BMI) is a measurement used to assess a person's weight status. This application allows users to calculate BMI and store this data.

## Requirements
- Node.js
- MySQL
- Git

## Used technologies

- **Node.js and Express:** Used for server side application development.
- **MySQL:** User information and BMI data are stored in the database.
- **EJS (Embedded JavaScript):** Used to create dynamic HTML pages on the server side.
- **HTML, CSS, JavaScript:** Used to develop client side user interface.

## How to use?
1.Node.js Installation:
Install Node.js before starting to work on the project

2. Clone the project to your computer:
```sh
  git clone https://github.com/Yldrmceyy/TechCareer_Vki_Project.git
  ````
Open the project with VsCode.

3. Go to the project directory:
  ```sh 
cd TechCareer_Vki_Project
   ````

4.Install the required dependencies:
   ```sh 
   npm install
   ````

5.Create the MySQL database and add the connection information to config.js/index.js.


6.Start the project:
   ```sh 
   node app.js 
   ````
## Project File Directory
  ```sh 
TechCareer_Vki_Project/
├── db/
│    └──index.js
│ 
├── node_modules/
│    ├── (dependencies)
│    └── (...)
│
├── public/
|   ├── style.css
|   |     ├── style.css
|   |     └── style2.css
│   ├── img
│   └── script.js
│
├── views/
|     ├── anasayfa.ejs
|     └── index.ejs
|
├── app.js
├── package-lock.json
├── package.json
└── README.md
   ````

## Project Features and Usage

**1- User Registration**:
New users can register to the system by entering their username and password.

**2- User Login and Logout**:
Registered users can log in with their username and password.
While logged in, users can log out with the "Log" button.

**3- Body Mass Index (BMI) Calculation**:
After logging into the system; Users can calculate BMI by entering their weight and height information.
Once the BMI is calculated, the result is displayed to the user.

**4-Display of Old Data Again:**:
 When the same user logs in again, the old data user entered can be shown to the user again as a result.

**5- Storage of Information**:
User information and BMI data are stored in the MySQL database.
While the user is logged in, the user's data can be captured and displayed on the screen.

**6- User Interface**:
In the project, dynamic HTML pages were created using EJS (Embedded JavaScript).



## Screenshots of the Project

![proje_adım_yeni (1)](https://github.com/Yldrmceyy/TechCareer_Vki_Project/assets/106755050/0c6d288f-db91-48a8-ac26-be52f2c9e963)
## Licence
This project is licensed under the MIT License. For more information
See file [MIT](LICENSE)
