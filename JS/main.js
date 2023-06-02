'use strict';

//EVENTOS
const buttonForm = document.querySelector('.js-btn-add');
const buttonCancel = document.querySelector('.js-btn-cancel');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');
const newForm = document.querySelector('.js-new-form'); //elemto da sextion new-form
const buttonNewAdd = document.querySelector('.js-add');

function renderKitten(url, desc, name, race) {
  let html = '';
  if (race === '') {
    html = `Uy que despiste, no sabemos su raza`;
  } else {
    html = race;
  } 
  const kittenHtml = `<li class="card">
    <article>
      <img class="card_img" src="${url}"/>
      <h3 class="card_title">${name.toUpperCase()}</h3>
      <h4 class="card_race">${html}</h4>
      <p class="card_description">
        ${desc}
      </p>
    </article>
    </li>`;
  return kittenHtml;
}

/*renderKitten(
  'https://placekitte.com/393x93',
  'Únsa Descripción del gato',
  'Nombre del gato',
  'raza del gato'
);
renderKitten(8, 7, 6, 5);*/

const ListSection = document.querySelector('.js-list');

const kittenImagenOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio';
const kittenDescOne =
  'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceOne = 'Siamés';
const kittenOne = renderKitten(kittenImagenOne, kittenDescOne, kittenNameOne, kittenRaceOne);

//
const kittenImagenTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo =
  'Produce fascinación y curiosidad.' +
  ' Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.';
const kittenRaceTwo = 'Sphynx';
const kittenTwo = renderKitten(kittenImagenTwo, kittenDescTwo, kittenNameTwo, kittenRaceTwo);

//
const kittenImagenThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo';
const kittenDescThree =
  'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha' +
  'convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRaceThree = 'Maine Coon';

const KittenThree = renderKitten(
  kittenImagenThree,
  kittenDescThree,
  kittenNameThree,
  kittenRaceThree
);

ListSection.innerHTML = ListSection.innerHTML + kittenOne + kittenTwo + KittenThree;
//ListSection.innerHTML = ListSection.innerHTML + kittenTwo;
//ListSection.innerHTML = ListSection.innerHTML + KittenThree;


// CONDICIONALES
const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if (kittenDescOne.includes(descrSearchText)) {
  ListSection.innerHTML = kittenOne;
}

if (kittenDescTwo.includes(descrSearchText)) {
  ListSection.innerHTML += kittenTwo;
}

if (kittenDescThree.includes(descrSearchText)) {
  ListSection.innerHTML += KittenThree;
}

/////// 5.  FUNCIONES I   ///////
function showNewCatForm() {
  newForm.classList.remove('collapsed');
}

function hideNewCatForm() {
  newForm.classList.add('collapsed');
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
    //completa el código
  } else {
    hideNewCatForm();
    //completa el código
  }
}
//5.funciones
buttonNewAdd.addEventListener('click', handleClickNewCatForm);

// buttonNewAdd.addEventListener("click", (event) => {
//   handleClickNewCatForm(event);
//   //showNewCatForm(); //aqui estoy llamando la function dentro del evento
//   //newForm.classList.toggle("collapsed"); la funcion que vamos incluir subtitui este evento;
// });

buttonForm.addEventListener('click', (event) => {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputName.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '' || valueRace === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo';
  } else {
    labelMessageError.innerHTML = '';
  }
});

function handleClickCancel(event) {
  event.preventDefault();
  inputDesc.value = '';
  inputPhoto.value = '';
  inputName.value = '';
  inputRace.value = '';
  hideNewCatForm();
}

buttonCancel.addEventListener('click', handleClickCancel);

function renderKitten(url, desc, name, race) {
  //completa el código
}
