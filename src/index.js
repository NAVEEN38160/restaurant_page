import "./styles.css";
import mountHome from "./home.js";
import mountMenu from "./menu.js";
import mountContact from "./contact.js";

const content = document.querySelector("#content");
const tabs = document.querySelectorAll(".tab");

const switchTab = (event) => {
  content.innerHTML = "";
  tabs.forEach((tab) => {
    tab.style.borderBottom = "1px solid transparent";
  });
  const currentTab = event.target.dataset.tab;
  if (currentTab === "home") {
    mountHome(content);
  } else if (currentTab === "menu") {
    mountMenu(content);
  } else {
    mountContact(content);
  }
};

tabs.forEach((tab) => {
  tab.addEventListener("click", switchTab);
});

mountHome(content);
