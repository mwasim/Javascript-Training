/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import MobilePhone from "./MobilePhone.js";
import Camera from "./Camera.js";

const mobilePhone1 = new MobilePhone(
  "Samsung A1",
  "grey",
  "Android",
  1080,
  1920,
  true,
  false,
  "October 29, 2023 12:00:00 PST"
);

const myCamera = new Camera(
  "Hasselblad",
  "500C/M",
  1963,
  "medium format",
  "Carl Zeiss 80mm f/2.8 Planar T",
  "120"
);

const cameraHTML = (myCamera) => {
  const html = `<main>
      <article>
        <h1>Camera: ${myCamera.brand}</h1>
        <ul>        
          <li>Model: ${myCamera.model}</li>
          <li>Age: ${myCamera.cameraAge()}</li>
          <li>Format: ${myCamera.format}</li>
          <li>Lens: ${myCamera.lens}</li>
          <li>Film Type: ${myCamera.filmType}</li>
        </ul>
      </article>
    </main>`;

  return html;
};

const result = cameraHTML(myCamera);
document.body.innerHTML = result;

mobilePhone1.toggleBluetooth(); //toggle bluetooth status

console.log(mobilePhone1);
console.log(`Mobile phone age: ${mobilePhone1.mobilePhoneAgeInDays()} days`);
