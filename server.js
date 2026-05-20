import express from "express";
import { v4 as uuid } from "uuid";
uuid();
const app = express();
const PORT = 3000;

uuid();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const array = [
  { id: uuid(), username: "rohit", comment: "user name is rohit" },
  { id: uuid(), username: "mohan", comment: "this is mohans comment" },
  { id: uuid(), username: "jon", comment: "user jone say hii" },
  { id: uuid(), username: "ronny", comment: "this is ronny's comment" },
  { id: uuid(), username: "rocky", comment: "user name is rocky" },
  { id: uuid(), username: "kamal", comment: "this is ghansala's comment" },
];

app.get("/", (req, res) => {
  res.send("the first page ");
});
app.get("/comments", (req, res) => {
  res.render("comments/index", { array });
});

app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

app.post("/comments/new", (req, res) => {
  console.log(req.body); // debugging
  const { username, comment } = req.body; // de-structure
  array.push({ username, comment, id: uuid() });
  res.send(`<h1>data successfully updated!  just a sec for the result</h1>
    <script>setTimeout(()=>{
      window.location.href="/comments";},2000);
      </script>
    `);

  console.log(array); // debuging
});

app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = array.find((c) => {
    return c.id === id;
  });
  res.render("comments/show", { comment });
});

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
