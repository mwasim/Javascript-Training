/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import MobilePhone from "./MobilePhone.js";

const mobilePhone1 = new MobilePhone(
  "Samsung A1",
  "grey",
  "Android",
  1080,
  1920,
  true,
  false
);

mobilePhone1.toggleBluetooth(); //toggle bluetooth status

console.log(mobilePhone1);
