import { cart } from "../js/db.js";
import { renderCart } from "./CartProduct.js";

export function Product(item) {
    let slot = document.createElement("div");
    let photo = document.createElement("div");
    let img = document.createElement("img");
    let descr = document.createElement("div");
    let slotName = document.createElement("h3");
    let p = document.createElement("p");
    let icons = document.createElement("div");
    let price = document.createElement("div");
    let priceImg = document.createElement("img");
    let star = document.createElement("div");
    let starImg = document.createElement("img");
    let pack = document.createElement("div");
    let packImg = document.createElement("img");
    let button = document.createElement("button");
    // b

    slot.classList.add("slot");
    photo.classList.add("photo");
    descr.classList.add("descr");
    slotName.classList.add("slot-name");
    p.classList.add("descr-p");
    icons.classList.add("icons");
    button.classList.add("to-star");

    slot.append(photo);
    photo.append(img);
    img.src = item.image;
    slot.append(descr);
    descr.append(slotName, p, icons, button);
    slotName.innerHTML = item.category;
    p.innerHTML = item.description;
    icons.append(price, star, pack);
    price.append(priceImg, item.price);
    priceImg.src = "./img/dollar.svg";
    star.append(starImg, item.rating.rate);
    starImg.src = "./img/star.svg";
    pack.append(packImg, item.rating.count);
    packImg.src = "./img/box.svg";
    button.innerHTML = "В избранное";

    button.onclick = () => {
        let exisitingProd = cart.find(prod => prod.id == item.id)

        if (!exisitingProd) {
            button.textContent = "Добавлено"
            button.classList.add("to-star_active")

            cart.push({ cartCount: 1, ...item })
            renderCart(cart)
        } else {
            alert("Элемент уже добавлен")
        }
    }

    return slot
}
