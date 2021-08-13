import {getPanierFromStorage } from '@pages/product.js'

import '@styles/main.scss'


function showPanier(){
    const listTr = document.getElementById("list-panier");
    listTr.innerHTML = null;
    getPanierFromStorage().forEach(panier => {

        listTr.innerHTML += 
        `<tr>
            <th scope="row"> <img src="${panier.imageUrl}" class="img-thumbnail mini-image" alt="..."> </th>
            <td> ${panier.name} </td>
            <td> ${"panier.quantite"} </td>
            <td> ${panier.price + " euros"} </td>
        </tr>`

    });

}

showPanier();
console.log(getPanierFromStorage())


let boutonVider= document.getElementById("bouton-vider");

boutonVider.onclick = () => {
    localStorage.removeItem('panier')
    showPanier();
}

