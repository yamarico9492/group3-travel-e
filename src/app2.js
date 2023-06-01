
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// ユーザーデータを格納する配列
const users = [];

// 新規登録画面の表示
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/signup.html');
});

// 新規登録の処理
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // ユーザー情報を配列に格納
  users.push({ username, password });

  // 登録完了後、ログイン画面にリダイレクト
  res.redirect('/login');
});

// ログインページの表示
app.get('/login', (req, res) => {
  res.sendFile(__dirname+'/views/login.html');
});


// ログインの処理
app.post('/login', (req, res) => {
  const { username, password } = req.body; //req.body（リクエストのボディ部分に含まれるデータを表す）からnameとpassを取り出す

  // ユーザーの存在チェックとパスワードの一致確認
  const user = users.find(user => user.username === username && user.password === password); //usersという配列内で

  if (user) { //userが見つかった時
    // ログイン成功時の処理
    res.redirect('/reservation'); ///reservationというパスにリダイレクト
  } 
  else {
    // ログイン失敗時の処理
    res.redirect('/login');
  }
});

// 予約ページの表示
app.get('/reservation', (req, res) => {
  res.send('<h1>Reservation Page</h1>');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
