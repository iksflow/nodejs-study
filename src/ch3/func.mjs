// const { odd, even } = require("./var");
import { odd, even } from "./var.mjs";

// module.exports = {
//   checkNumber,
// };

export function checkNumber(num) {
  if (num % 2) {
    return odd;
  }
  return even;
}
