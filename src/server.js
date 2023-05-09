const express = require('express');
const app = express();

app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

// 루트 페이지를 처리합니다.
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

app.listen(3000, () => {
    console.log('Server is listening on port 3000!');
});