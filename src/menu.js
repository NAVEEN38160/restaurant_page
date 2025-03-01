import carne from "./assets/carne.png";
import colorato from "./assets/colorato.png";
import crema from "./assets/crema.png";
import disgustoso from "./assets/disgustoso.png";
import gamberi from "./assets/gamberi.png";
import pepe from "./assets/pepe.png";
import pomodoro from "./assets/pomodoro.png";
import salsiccia from "./assets/salsiccia.png";

const create = (el) => document.createElement(el);

const menuTab = document.querySelector(".menu-tab");
const menu = create("div");
menu.className = "menu";

const item1 = create("div");
const item2 = create("div");
const item3 = create("div");
const item4 = create("div");
const item5 = create("div");
const item6 = create("div");
const item7 = create("div");
const item8 = create("div");

const items = [item1, item2, item3, item4, item5, item6, item7, item8];

items.forEach((item) => {
  item.className = "item";
});

const img1 = create("img");
const img2 = create("img");
const img3 = create("img");
const img4 = create("img");
const img5 = create("img");
const img6 = create("img");
const img7 = create("img");
const img8 = create("img");

img1.src = carne;
img2.src = colorato;
img3.src = crema;
img4.src = disgustoso;
img5.src = gamberi;
img6.src = pepe;
img7.src = pomodoro;
img8.src = salsiccia;

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

images.forEach((image) => {
  image.style.width = "200px";
});

item1.innerHTML =
  '<p class="item-name">Carne</p><p>Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli</p>';
item2.innerHTML =
  '<p class="item-name">Colorato</p><p>Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil</p>';
item3.innerHTML =
  '<p class="item-name">Crema</p><p>White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil</p>';
item4.innerHTML =
  '<p class="item-name">Disgustoso</p><p>Tomato sauce, Bacon, Pineapple, Olives, Basil</p>';
item5.innerHTML =
  '<p class="item-name">Gamberi</p><p>Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil</p>';
item6.innerHTML =
  '<p class="item-name">Pepe</p><p>Tomato sauce, Mozarella, Chilli flakes, Olives, Basil</p>';
item7.innerHTML =
  '<p class="item-name">Pomodoro</p><p>Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli</p>';
item8.innerHTML =
  '<p class="item-name">Salsiccia</p><p>Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil</p>';

item1.prepend(img1);
item2.prepend(img2);
item3.prepend(img3);
item4.prepend(img4);
item5.prepend(img5);
item6.prepend(img6);
item7.prepend(img7);
item8.prepend(img8);

items.forEach((item) => {
  menu.appendChild(item);
});

const mountMenu = (parent) => {
  menuTab.style.borderBottom = "1px solid white";
  parent.appendChild(menu);
};

export default mountMenu;
