'use strict';

const ListSection = document.querySelector('.js-list');

const kittentOne = 
const kittenImagen = 'https://dev.adalab.es/gato-siames.webp';
const kittenName = 'Anastacio';
const kittenDesc = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRace = 'Siamés';

const kittenTwo =
const kittenImagen = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenName = 'Fiona';
const kittenDesc = 'Produce fascinación y curiosidad.' + ' Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.'; 
const kittenTwo = 'Sphynx';

const KittenThree =
const kittenImagen = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenName = 'Cielo';
const kittenDesc = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha' + 'convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta. '
const kittenRace = 'Maine Coon'; 

/*`<li class="card">
<article>
  <img class="card_img" src="https://dev.adalab.es/gato-siames.webp" alt="siames-cat" />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
    Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso,
    pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy
    posiblemente.
  </p>
</article>
</li>`;
const kittenTwo = `<li class="card">
<img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de
  alienígena han llegado a definir a esta raza gatuna que se caracteriza por la
  «ausencia» de pelo.
</p>
</li>`;
const KittenThree =  `<li class="card">
<img
  class="card_img"
  src="https://dev.adalab.es/maine-coon-cat.webp"
  alt="maine-coon-cat"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha
  convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas
  resultan largas y en punta.
</p>
</li>`;*/

ListSection.innerHTML = ListSection.innerHTML + kittentOne; 
ListSection.innerHTML = ListSection.innerHTML + kittenTwo;
ListSection.innerHTML = ListSection.innerHTML + KittenThree; 

//const kittenImage = 'https://dev.adalab.es/gato-siames.webp';
//const kittenName = 'Anastacio';
//const kittenDesc =
  //' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
//const kittenRace = 'Siamés';
//titleh1.innerHTML = titleh1.innerHTML + ' Mundo';
// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
//titleElement.innerHTML = titleElement.innerHTML + ' adalaber';