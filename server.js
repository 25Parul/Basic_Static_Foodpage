const express = require("express");
const app = express();
const port = 3000;
const path = require("path");


let foods = [ { id: 1, name: 'Pizza', cuisine: 'Italian', price: 9.99 }, { id: 2, name: 'Sushi', cuisine: 'Japanese', price: 12.99 }, { id: 3, name: 'Tacos', cuisine: 'Mexican', price: 7.99 }, { id: 4, name: 'Pad Thai', cuisine: 'Thai', price: 10.99 }, { id: 5, name: 'Burger', cuisine: 'American', price: 8.99 } ];

// Serves the static files from the "public" folder
app.use(express.static(path.join(__dirname,"public")));

// route that serves the array of foods
app.get("/data", (req, res) => {
  res.send(foods);
});



// start the server and listen on the specified port:3000

app.listen(port, () => {
  console.log("Listening on port", port);
});
