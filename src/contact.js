import map from "./assets/restaurant-location.png";

const contactTab = document.querySelector(".contact-tab");
const contact = document.createElement("div");
contact.className = "contact";

const p1 = document.createElement("p");
const p2 = document.createElement("p");
const image = document.createElement("img");

image.src = map;
image.style.width = "850px";
image.style.borderRadius = "40px";

p1.textContent = "📞 123 456 789";
p2.textContent = "🏠 Jayanagar 10th block, Bengaluru, India ";

contact.appendChild(p1);
contact.appendChild(p2);
contact.appendChild(image);

const mountContact = (parent) => {
  contactTab.style.borderBottom = "1px solid white";
  parent.appendChild(contact);
};

export default mountContact;
