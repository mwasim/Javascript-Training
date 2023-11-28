/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const mobilePhone = {
  name: "OPPO Mobile",
  color: "white",
  OS: "Android",
  resolution: {
    width: 1080,
    height: 1920,
  },
  features: {
    supportsBluetooth: true,
    supportsWifi: true,
  },
};

const markup = (mobilePhone) => {
  return `
        <div>
            <h1>${mobilePhone.name}</h1>
            <ul>
                <li><strong>Color: </strong>${mobilePhone.color}</li>
                <li><strong>OS: </strong>${mobilePhone.OS}</li>
            </ul>
            <h2>Resolution</h2>
            <ul>
                <li><strong>Width: </strong>${mobilePhone.resolution.width}</li>
                <li><strong>Heiht: </strong>${mobilePhone.resolution.height}</li>
            </ul>
        </div>
    `;
};

const main = document.createElement("main");
main.innerHTML = markup(mobilePhone);
document.body.appendChild(main);
