import '../styles/image_viewer.css';
import sum from './sum.js';

console.log(sum(5, 315));
const button = document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer.js')
    .then(module => {
      module.default();
    });
};

document.body.appendChild(button);
