let modal_box = document.querySelector('.modal__box')
export function renderCart(cart) {
    modal_box.innerHTML = ""
    for (let item of cart) {
        const elem = document.createElement('div');
        elem.className = 'elem';

        const box1 = document.createElement('div');
        box1.className = 'elem__box';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = '';

        const name = document.createElement('p');
        name.textContent = item.title.slice(0, 15) + "...";

        box1.append(img, name);

        const box2 = document.createElement('div');
        box2.className = 'elem__box';

        const plusBtn = document.createElement('button');
        plusBtn.textContent = '+';

        const count = document.createElement('span');
        count.textContent = item.cartCount;

        const minusBtn = document.createElement('button');
        minusBtn.textContent = '-';

        box2.append(plusBtn, count, minusBtn);
        elem.append(box1, box2);
        modal_box.append(elem);

        plusBtn.onclick = () => {
            item.cartCount++
            count.textContent = item.cartCount;
        }
        minusBtn.onclick = () => {
            if (item.cartCount > 1) {
                item.cartCount--
                count.textContent = item.cartCount;
            } else {
                console.log("delete");
            }
            
        }
    }
}
