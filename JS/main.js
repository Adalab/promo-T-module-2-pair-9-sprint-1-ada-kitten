"use strict";

const ListSection = document.querySelector(".js-list");

const kittenImagenOne = "https://dev.adalab.es/gato-siames.webp";
const kittenNameOne = "Anastacio";
//const kittenNameOne = kittenNameOne.toUpperCase();

const kittenDescOne =
  "Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.";
const kittenRaceOne = "Siamés";
let html = "";
if (kittenRaceOne === "") {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRaceOne;
}
const kittenOne = `<li class="card">
<article>
  <img class="card_img" src="${kittenImagenOne}"/>
  <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">
    ${kittenDescOne}
  </p>
</article>
</li>`;

const kittenImagenTwo = "https://dev.adalab.es/sphynx-gato.webp";
const kittenNameTwo = "Fiona";
const kittenDescTwo =
  "Produce fascinación y curiosidad." +
  " Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.";
const kittenRaceTwo = "Sphynx";

if (kittenRaceTwo === "") {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRaceTwo;
}

const kittenTwo = `<li class="card">
<img class="card_img" src="${kittenImagenTwo}" alt="sphynx-cat" />
<h3 class="card_title">${kittenNameTwo.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceTwo}</h4>
<p class="card_description">
 ${kittenDescTwo}
</p>
</li>`;

const kittenImagenThree = "https://dev.adalab.es/maine-coon-cat.webp";
const kittenNameThree = "Cielo";
const kittenDescThree =
  "Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha" +
  "convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.";
const kittenRaceThree = "Maine Coon";

if (kittenRaceThree === "") {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenRaceThree;
}
const KittenThree = `<li class="card">
<img
  class="card_img"
  src="${kittenImagenThree}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenNameThree.toUpperCase()}</h3>
<h4 class="card_race">${kittenRaceThree}</h4>
<p class="card_description">
  ${kittenDescThree}
</p>
</li>`;

ListSection.innerHTML = ListSection.innerHTML + kittenOne + kittenTwo + KittenThree;
//ListSection.innerHTML = ListSection.innerHTML + kittenTwo;
//ListSection.innerHTML = ListSection.innerHTML + KittenThree;

const input_search_desc = document.querySelector(".js_in_search_desc");
const descrSearchText = input_search_desc.value;

<<<<<<< HEAD
if(kittenDescOne.includes(descrSearchText) ) {
  ListSection.innerHTML = kittenOne
  }
  
 if(kittenDescTwo.includes(descrSearchText) ) {
  ListSection.innerHTML += kittenTwo
  }
  
  if(kittenDescThree.includes(descrSearchText) ) {
    ListSection.innerHTML += KittenThree
  }
    /*ejercicio de eventos, 2.4*/
  const buttonForm = document.querySelector(".js-btn-add");
  const buttonCancel = document.querySelector(".js-btn-cancel");
  
=======
if (kittenDescOne.includes(descrSearchText)) {
  ListSection.innerHTML = kittenOne;
}
>>>>>>> 3d0068359f2d6d257be01fa979b540e811bb2b1b

if (kittenDescTwo.includes(descrSearchText)) {
  ListSection.innerHTML += kittenTwo;
}

if (kittenDescThree.includes(descrSearchText)) {
  ListSection.innerHTML += KittenThree;
}
//EVENTOS
const buttonForm = document.querySelector(".js-btn-add");
const buttonCancel = document.querySelector(".js-btn-cancel");
const inputDesc = document.querySelector(".js-input-desc");
const inputPhoto = document.querySelector(".js-input-photo");
const inputName = document.querySelector(".js-input-name");
const labelMessageError = document.querySelector(".js-label-error");
const newForm = document.querySelector(".js-new-form"); //elemto da sextion new-form
const buttonNewAdd = document.querySelector(".js-add");

/////// 5.  FUNCIONES I   ///////
function showNewCatForm() {
  newForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
    //completa el código
  } else {
    hideNewCatForm();
    //completa el código
  }
}
//5.funciones
buttonNewAdd.addEventListener("click", handleClickNewCatForm);

// buttonNewAdd.addEventListener("click", (event) => {
//   handleClickNewCatForm(event);
//   //showNewCatForm(); //aqui estoy llamando la function dentro del evento
//   //newForm.classList.toggle("collapsed"); la funcion que vamos incluir subtitui este evento;
// });

buttonForm.addEventListener("click", (event) => {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMessageError.innerHTML = "¡Uy! parece que has olvidado algo";
  } else {
    labelMessageError.innerHTML = "";
  }
});

//buttonCancel.addEventListener("click", handleClickNewCatForm); simplifica el codigo que ya tenemos
buttonCancel.addEventListener("click", (event) => {
  event.preventDefault();
  inputDesc.value = "";
  inputPhoto.value = "";
  inputName.value = "";
  // hideNewCatForm(); //FUNCION
  newForm.classList.toggle("collapsed");
});
