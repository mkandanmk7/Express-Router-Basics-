const express = require("express");

const postData = require("./Router/Post");
const userData = require("./Router/Users");

const server = express();

// port number

const port = "3001";

// parse req body string to json format

server.use(express.json());

// url /posts condtion pass the "/posts to before call back"
server.use("/posts", postData);

// /user middle ware

server.use("/users", userData);

//middle ware common  no url condtions

server.use((req, res, next) => {
  console.log("common middle ware called");
  next();
});

//post Api Routes;
// get methods

server.get("/posts", postData);

server.delete("/posts/:id", postData);

server.post("/posts", postData);

server.put("/posts/:id", postData);

// user Api

server.get("/users", userData);

server.delete("/users/:id", userData);

server.post("/users", userData);

server.put("/users/:id", userData);

//start the server;

server.listen(port, () => {
  console.log(`server Started at ${port}`);
});

// extra

// server.get("/posts", (req, res, next) => {
//   console.log("Posts get middle ware called");
//   // find
//   console.log(req.query);
//   res.send(posts);
//   // res.end();
// });

// server.delete("/posts/:id", (req, res, next) => {
//   console.log("Posts delete middle ware called");
//   console.log("Delete id is :", req.params.id);
//   // deleteOne
//   res.end();
// });

// server.post("/posts", (req, res, next) => {
//   console.log("Posts post middle ware called");

//   console.log(req.body);
//   //insert
//   res.send({ ...req.body, id: 101 });
// });

// server.put("/posts/:id", (req, res, next) => {
//   console.log("Posts put middle ware called");

//   console.log(req.body);
//   console.log(req.params);
//   //findOneUpdateOne;
//   res.send({ ...req.body, id: req.params.id });
// });
