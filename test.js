const urlMaker = require("./index");

const sentence = "My Current   Title"
let url = urlMaker(sentence, "-");
console.log(url);