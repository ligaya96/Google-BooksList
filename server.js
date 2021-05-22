const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI ||"mongodb://localhost/bookslist", {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,  
  useUnifiedTopology: true  
}).then(() => console.log("   ***** MongoDB Connected *****"))
  .catch(err => console.log(err));
//app routes
  app.use(routes);
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
