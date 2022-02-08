import _ from 'lodash';
import {myName, Gams} from './myName';

function component() {
  const element = document.createElement('div');
  const name = document.createElement('h1');
  let theGamsH1 = document.createElement('h1');
  element.innerHTML = _.join(['Hello', 'Webpacking', 'Fools!'], ' ');
  name.innerText = myName('Blain');
  let gams = new Gams('THE BLAMS')
  theGamsH1.innerText = gams.iAm();
  let myDivs = {name, element, theGamsH1}
  return myDivs;
};

let domPopulator = component();
document.body.appendChild(domPopulator.element);
document.body.appendChild(domPopulator.name);
document.body.appendChild(domPopulator.theGamsH1);
