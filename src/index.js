import _ from 'lodash';
import {myName, Gams} from './myName';
import './style.css';
import MyImage from './album.jpg'

function component() {
  const element = document.createElement('div');
  const name = document.createElement('h1');
  const theGamsH1 = document.createElement('h1');

  element.innerHTML = _.join(['Hello', 'Webpacking', 'Fools!'], ' ');
  element.classList.add('hello')

  name.innerText = myName('Blain');
  let gams = new Gams('THE GAMS');

  theGamsH1.id = 'gams';
  theGamsH1.innerText = gams.iAm();
  
  const myIcon = new Image();
  myIcon.src = MyImage;
  let myDivs = {name, element, theGamsH1, myIcon};
  return myDivs;
};

let domPopulator = component();

document.body.appendChild(domPopulator.element);
document.body.appendChild(domPopulator.name);
document.body.appendChild(domPopulator.theGamsH1);
document.body.appendChild(domPopulator.myIcon);
