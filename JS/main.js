'use strict';

const ListSection = document.querySelector('.js-list');

const kittenImagenOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio';
//const kittenNameOne = kittenNameOne.toUpperCase();
 
const kittenDescOne = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceOne = 'Siamés';
let html = '';
  if (kittenRaceOne ==="") {
  html = `Uy que despiste, no sabemos su raza`;
  }
  else {
    html = kittenRaceOne;
  }
const kittenOne = 
`<li class="card">
<article>
  <img class="card_img" src="${kittenImagenOne}"/>
  <h3 class="card_title">${kittenNameOne.toUpperCase()}</h3>
  <h4 class="card_race">${html}</h4>
  <p class="card_description">
    ${kittenDescOne}
  </p>
</article>
</li>`;

const kittenImagenTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo = 'Produce fascinación y curiosidad.' + ' Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.'; 
const kittenRaceTwo = 'Sphynx';

  if (kittenRaceTwo ==="") {
  html = `Uy que despiste, no sabemos su raza`;
  }
  else {
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

const kittenImagenThree = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThree = 'Cielo';
const kittenDescThree = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha' + 'convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRaceThree = 'Maine Coon';

  if (kittenRaceThree ==="") {
  html = `Uy que despiste, no sabemos su raza`;
  }
  else {
    html = kittenRaceThree;
  }
const KittenThree =  `<li class="card">
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

const input_search_desc = document.querySelector('.js_in_search_desc');
const descrSearchText = input_search_desc.value;

if(kittenDescOne.includes(descrSearchText) ) {
  ListSection.innerHTML = kittenOne
  }
  
 if(kittenDescTwo.includes(descrSearchText) ) {
  ListSection.innerHTML += kittenTwo
  }
  
  if(kittenDescThree.includes(descrSearchText) ) {
    ListSection.innerHTML += KittenThree
  }
    
  const buttonForm = document.querySelector(".js-btn-add");
  const buttonCancel = document.querySelector(".js-btn-cancel");
  

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');
const newForm = document.querySelector('.js-new-form'); //elemto da sextion new-form
const newAdd = document.querySelector('.js-add');

newAdd.addEventListener('click', () => {
  newForm.classList.toggle('collapsed')
});

buttonForm.addEventListener('click', (event) => {
  event.preventDefault();

  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;

   if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML = '¡Uy! parece que has olvidado algo'
  } else {
  }
});

buttonCancel.addEventListener('click', (event) => {
  event.preventDefault();
   inputDesc.value = ''
   inputPhoto.value = ''
   inputName.value = ''

   newForm.classList.toggle('collapsed')
  });

 //código a ejecutarse
 // if (kittenRace1 === "") {
   // html = `Uy que despiste, no sabemos su raza`;
  //} else {
   // html = race;
 // }

 // if (kittenDescOne === "") {
    
 // } else {
    //html = race;
  
 // if (kittenDescTwo === "") {
    
 // } else {
   // html = race;
 // }
  //if (kittenDescThreee === "") {
   
   // html = race;
  //}

//ejercicio clase
//const sextion =  document.querySelector('js__section');
/*const imgKitten1 = document.querySelector('.jsimgkitten1');
section / imgKitten1.addEventListener('click', (event) => {

  console.log(event.target);
   console.log(event.currentTarget);
  console.log(imgKitten1);

  imgKitten1.classList.toggle('selected');
  event.targe.classList.toggle('selected');

if (event.target !== event.currentTarge) 
event.target.classList.toggle('selected);
});
*/
