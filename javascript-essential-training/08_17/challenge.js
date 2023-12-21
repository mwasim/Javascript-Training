import backpackObjectArray from "./components/data.js";

const articleItems = backpackObjectArray.map((backpackItem) => {
  let backpackArticle = document.createElement(`article`);
  backpackArticle.setAttribute(`id`, backpackItem.id);

  backpackArticle.innerHTML = `
        <h1>${backpackItem.name}</h1>
        <ul>
            <li>Volume: <span>${backpackItem.volume}l</span></li>
            <li>Color: <span>${backpackItem.color}</span></li>
            <li>Age: <span>${backpackItem.backpackAge()} days old</span></li>
            <li>No. of Pockets: <span>${backpackItem.pocketNum}</span></li>
        </ul>
    `;

  return backpackArticle;
});

const main = document.querySelector(".maincontent");

articleItems.forEach((article) => {
  main.append(article);
});
