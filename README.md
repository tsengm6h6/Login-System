# Login-System
手刻登入驗證機制，了解 HTTP 無狀態機制與 Cookie 和 Session 之間的關係

## 實作重點
- 使用者可以註冊新帳號，並使用已註冊的帳號登入
- 驗證使用者帳號允許登入或顯示錯誤訊息
- 登入成功後顯示使用者姓名，刷新頁面可以記錄使用者訪問次數（模擬紀錄登入狀態）
- 登出後，再重新登入訪問次數重計（模擬 Session 重啟）

### 測試帳號
**Tony**
> 帳號：tony@stark.com 密碼：iamironman

**Steve**
> 帳號：captain@hotmail.com 密碼：icandothisallday

**Peter**
> 帳號：peter@parker.com 密碼：enajyram

**Natasha**
> 帳號：natasha@gamil.com 密碼：*parol#@$!

**Nick**
> 帳號：nick@shield.com 密碼：password

![alt 首頁](https://i.imgur.com/EhovB9j.gif)

## Installation

### Environment
* [Node.js v10.15.0](https://nodejs.org/en/download/)
* [Express v4.17.1](https://www.npmjs.com/package/express)
* [body-parser v1.19.0](https://www.npmjs.com/package/body-parser)
* [Express-Handlebars v5.2.0](https://www.npmjs.com/package/express-handlebars)
* [connect-mongo ^3.2.0](https://www.npmjs.com/package/connect-mongo)
* [express-session ^1.17.1](https://www.npmjs.com/package/express-session)
* [mongoose ^5.11.14](https://www.npmjs.com/package/mongoose)

### Clone
clone repository to your local computer
```
$ git clone https://github.com/tsengm6h6/Login-System-Implementation.git
```

### Setup
1. Enter the directory
```
$ cd Login-System-Implementation
```

2. Install npm packages
```
$ npm install
```

3. Install nodemon
```
$ npm install nodemon
```

4. Activate the server
```
$ npm run dev
```

5. Find the below message for successful activation
```
The server is listening to port 3000
```
You may now visit the application on your browser with URL: http://localhost:3000
