const path = require("path");
const string = __filename;
console.log("filename: ", string);
console.log("path.delimiter: ", path.delimiter);
console.log("---------------------------------");
console.log("path.dirname(): ", path.dirname(string));
console.log("path.extname(): ", path.extname(string));
console.log("path.basename(): ", path.basename(string));
console.log("---------------------------------");
console.log(
  "path.basename - extname: ",
  path.basename(string, path.extname(string))
);
console.log("---------------------------------");
console.log("path.parse(): ", path.parse(string));
console.log(
  "path.format(): ",
  path.format({
    dir: "/Users/sisung",
    name: "path",
    ext: ".js",
  })
);
