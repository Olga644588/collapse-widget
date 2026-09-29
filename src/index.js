import './css/style.css';
import Collapse from './js/collapse.js';

document.querySelectorAll('.collapse-container').forEach((el) => {
  new Collapse(el);
});
