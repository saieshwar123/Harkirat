const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const kidneyid = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "harkirat" || password != "pass") {
    res.status(403).json({
      msg: "Wrong Input1s",
    });
    return;
  }
//   if (kidneyid != 1 && kidneyid != 2)   {
//     res.status(403).json({
//       msg: "Wrong Input2s",
//     });
//     return;
//   }
  res.send("Sucess");
});

app.listen(3000);
