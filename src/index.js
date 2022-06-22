console.log(data);

// Challenge
// You might have noticed there's a plus button at the beginning of the top row. Add the behaviour to it. When clicked, it should replace the main card with a form to add a new dog to the list.
// You'll find a template for the form on the HTML page. Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.

function addDogListItem(dog) {
  let dogListItem = document.createElement("li");
  dogListItem.className = "dogs-list__button";
  dogListItem.innerText = dog.name; //  dogLi.textContent = "Mr. Bonkers";
  dogListItem.addEventListener("click", () => {
    let mainDogSection = document.querySelector(".main__dog-section");
    mainDogSection.remove();
    displayDog(dog);
  });

  let dogList = document.querySelector(".dogs-list");
  dogList.appendChild(dogListItem);
}

for (let dog of data) {
  addDogListItem(dog);
}

function displayDog(dog) {
  let mainSection = document.querySelector(".main");

  let mainDogSection = document.createElement("section");
  mainDogSection.className = "main__dog-section";
  mainSection.appendChild(mainDogSection);

  let dogName = document.createElement("h2");
  dogName.textContent = dog.name;
  mainDogSection.appendChild(dogName);

  let dogImage = document.createElement("img");
  dogImage.src = dog.image;
  dogImage.alt = "";
  mainDogSection.appendChild(dogImage);

  let dogDesc = document.createElement("div");
  dogDesc.className = "main__dog-section__desc";
  mainDogSection.appendChild(dogDesc);

  let dogDescTitle = document.createElement("h3");
  dogDescTitle.textContent = "Bio";
  dogDesc.appendChild(dogDescTitle);

  let dogBio = document.createElement("p");
  dogBio.textContent = dog.bio;
  dogDesc.appendChild(dogBio);

  let dogIsNaughty = document.createElement("p");
  dogIsNaughty.textContent = `Is naughty? ${dog.isGoodDog ? "No" : "Yes"}`;
  mainDogSection.appendChild(dogIsNaughty);

  let emEl = document.createElement("em");
  dogIsNaughty.appendChild(emEl);

  let rateDogBtn = document.createElement("button");
  rateDogBtn.className = "main__dog-section__btn";
  rateDogBtn.textContent = `${dog.isGoodDog ? "Good dog!" : "Bad dog!"}`;
  rateDogBtn.addEventListener("click", () => {
    dog.isGoodDog = !dog.isGoodDog;
    dogIsNaughty.textContent = `Is naughty? ${dog.isGoodDog ? "No" : "Yes"}`;
    rateDogBtn.textContent = `${dog.isGoodDog ? "Good dog!" : "Bad dog!"}`;
  });
  mainDogSection.appendChild(rateDogBtn);
}
