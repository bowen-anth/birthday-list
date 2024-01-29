const birthdayContainer = document.querySelector(".birthday-container");
const birthdays = document.querySelector(".birthdays");

let html = "";

let data = [
  {
    name: "Bertie Yates",
    age: "29",
    image: "https://i.pravatar.cc/75",
  },
  {
    name: "Hester Hogan",
    age: "32",
    image: "https://i.pravatar.cc/75",
  },
  {
    name: "Larry Little",
    age: "36",
    image: "https://i.pravatar.cc/75",
  },
  {
    name: "Sean Walsh",
    age: "34",
    image: "https://i.pravatar.cc/75",
  },
  {
    name: "Lola Gardner",
    age: "29",
    image: "https://i.pravatar.cc/75",
  },
];

birthdays.textContent = data.length;

const renderBirthdays = () => {
  for (let i = 0; i < data.length; i++) {
    html += `<div class="item-container">
    <img
      src="https://i.pravatar.cc/75/${i}"
      alt="profile pic"
      width="75px"
      height="auto"
      class="profile-pic"
    />
    <div class="right">
      <p class="name">${data[i].name}</p>
      <p class="years">${data[i].age} years</p>
    </div>
  </div>
  `;
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  birthdayContainer.prepend(div);
};

renderBirthdays();
