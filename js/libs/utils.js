export function render(arr, place, component) {
    place.innerHTML = "";
    for (let item of arr) {
        place.append(component(item));
    }
}