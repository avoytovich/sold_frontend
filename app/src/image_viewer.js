import '../styles/image_viewer.css';
import big from '../assets/big.jpg';

export default () => {
  const image = document.createElement('img');
  image.src = big;

  document.body.appendChild(image);
};
