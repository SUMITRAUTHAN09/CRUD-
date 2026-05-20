const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/test", (req, res) => {
  const { username, year, subs } = req.query;
  res.send(`searchin for ${username} ${year} ${subs}`);
});

app.post("/test", (req, res) => {
  console.log(req.query);
  const { username, year } = req.body;
  res.send(`comment was user name: ${username}, year: ${year}`);
});

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
