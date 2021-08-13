import {getPanierFromStorage } from '@pages/product.js'

import '@styles/main.scss'

const totalPrice = () => {

    let panier = getPanierFromStorage();

    let total = 0;

    panier.forEach((data) => {
        total += data.price * data.quantity;
    });

    return total;
}

function showPanier(){
    const listTr = document.getElementById("list-panier");
    listTr.innerHTML = null;
    getPanierFromStorage().forEach(panier => {

        listTr.innerHTML += 
        `<tr>
            <th scope="row"> <img src="${panier.imageUrl}" class="img-thumbnail mini-image" alt="..."> </th>
            <td> ${panier.name} </td>
            <td> ${panier.quantity} </td>
            <td> ${panier.price + " euros"} </td>
        </tr>`

    });
    document.getElementById("prix-total").innerText = totalPrice()  + " euros";

}

showPanier();
console.log(getPanierFromStorage())


let boutonVider= document.getElementById("bouton-vider");

boutonVider.onclick = () => {
    localStorage.removeItem('panier')
    showPanier();
}

