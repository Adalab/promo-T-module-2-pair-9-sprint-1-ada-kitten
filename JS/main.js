'use strict';

const ListSection = document.querySelector('.js-list');

const kittenImagenOne = 'https://dev.adalab.es/gato-siames.webp';
const kittenNameOne = 'Anastacio';
const kittenDescOne = 'Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenRaceOne = 'Siamés';

const kittenOne = 
`<li class="card">
<article>
  <img class="card_img" src="${kittenImagenOne}"/>
  <h3 class="card_title">${kittenNameOne}</h3>
  <h4 class="card_race">${kittenRaceOne}</h4>
  <p class="card_description">
    ${kittenDescOne}
  </p>
</article>
</li>`;

const kittenImagenTwo = 'https://dev.adalab.es/sphynx-gato.webp';
const kittenNameTwo = 'Fiona';
const kittenDescTwo = 'Produce fascinación y curiosidad.' + ' Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.'; 
const kittenRaceTwo = 'Sphynx';

const kittenTwo = `<li class="card">
<img class="card_img" src="${kittenImagenTwo}" alt="sphynx-cat" />
<h3 class="card_title">${kittenNameTwo}</h3>
<h4 class="card_race">${kittenRaceTwo}</h4>
<p class="card_description">
 ${kittenDescTwo}
</p>
</li>`;

const kittenImagenThreee = 'https://dev.adalab.es/maine-coon-cat.webp';
const kittenNameThreee = 'Cielo';
const kittenDescThreee = 'Tienen la cabeza cuadrada y los ojos simétricos, por lo que su bella mirada se ha' + 'convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenRaceThreee = 'Maine Coon';
const KittenThree =  `<li class="card">
<img
  class="card_img"
  src="${kittenImagenThreee}"
  alt="maine-coon-cat"
/>
<h3 class="card_title">${kittenNameThreee}</h3>
<h4 class="card_race">${kittenRaceThreee}</h4>
<p class="card_description">
  ${kittenDescThreee}
</p>
</li>`;


ListSection.innerHTML = ListSection.innerHTML + kittenOne; 
ListSection.innerHTML = ListSection.innerHTML + kittenTwo;
ListSection.innerHTML = ListSection.innerHTML + KittenThree; 

