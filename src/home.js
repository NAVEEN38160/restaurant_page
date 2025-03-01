import chef from "./assets/chef.png";

const homeTab = document.querySelector(".home-tab");
const home = document.createElement("div");
home.className = "home";

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");
const img = document.createElement("img");

p1.textContent = "Best pizza in your country";
p2.textContent = "Made with passion since 1908";
p3.textContent = "Order online or visit us!";
img.src = chef;
img.style.width = "400px";

const pArray = [p1, p2, p3];

pArray.forEach((p) => {
  p.style.fontSize = "1.8rem";
});

home.appendChild(p1);
home.appendChild(p2);
home.appendChild(img);
home.appendChild(p3);

const mountHome = (parent) => {
  homeTab.style.borderBottom = "1px solid white";
  parent.appendChild(home);
};

export default mountHome;
