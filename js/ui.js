import { arr } from './db.js';
import { render } from '../js/libs/utils.js';
import { Product } from '../components/Product.js';
import { renderCart } from '../components/CartProduct.js';
import { cart } from './db.js';

const modal_box = document.querySelector('.modal__box');
renderCart(cart, modal_box);  


const productsContainer = document.querySelector(".slots");
render(arr, productsContainer, Product);



const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modalBackground');


openBtn.onclick = () => modal.style.display = 'block';
closeBtn.onclick = () => modal.style.display = 'none';