const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "templetes"), (err) => {
//   if (err) console.log(err);
//   console.log("Created");
// });

// // ------------------------------------------

// fs.writeFile(
//   path.join(__dirname, "templetes", "september.txt"),
//   "Hello world",
//   (err) => {
//     if (err) console.log(err);

//     console.log("Created");
//   }
// );

// // ------------------------------------------

// fs.appendFile(
//   path.join(__dirname, "templetes", "december.txt"),
//   " , my world!!!",
//   (err) => {
//     if (err) console.log(err);
//     console.log("Created");
//   }
// );

// // ------------------------------------------

// // ________1 - way
// fs.readFile(path.join(__dirname, "templetes", "december.txt"), (err, data) => {
//   if (err) console.log(err);
//   console.log(Buffer.from(data).toString());
// });

// // ________2 - way
// fs.readFile(
//   path.join(__dirname, "templetes", "december.txt"),
//   "utf-8",
//   (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//   }
// );
