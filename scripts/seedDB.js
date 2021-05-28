const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
  mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bookslist", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,  
    useUnifiedTopology: true  
})
const bookSeed = [
  { 
    // Using from  HW template 
    title: "The Hunger Games",
    subtitle: "",
    authors: ["Suzanne Collins"],
    description:
      "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
    image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      subtitle: "",
      authors: ["J.K. Rowling"],
      description:
        "Rescued from the outrageous neglect of his aunt and uncle, a young boy with a great destiny proves his worth while attending Hogwarts School for Wizards and Witches.",
      image: "http://books.google.com/books/content?id=3YUrtAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=3YUrtAEACAAJ&dq=Harry+Potter+and+the+Sorcerer&hl=&source=gbs_api"
      },
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
