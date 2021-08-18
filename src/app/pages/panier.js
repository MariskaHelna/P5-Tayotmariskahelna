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

const totalQuantity = () => {

    let panier = getPanierFromStorage();

    let total = 0;

    panier.forEach((data) => {
        total += data.quantity;
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
    document.getElementById("quantite-total").innerText = totalQuantity();

}

showPanier();
console.log(getPanierFromStorage())


let boutonVider= document.getElementById("bouton-vider");

boutonVider.onclick = () => {
    localStorage.removeItem('panier')
    showPanier();
}


// validation du formulaire 

let form = document.getElementById('form')

form.addEventListener('submit', function(e){

// let firstName = document.getElementById('firstName').value;
// let lastName = document.getElementById('lastName').value;
// let address = document.getElementById('address').value;
// let city = document.getElementById('city').value;
// let email  = document.getElementById('email').value;

// let data = {
//     "firstName":firstName,
//     "lastName":lastName,
//     "address":address,
//     "city":city,
//     "email":email,
// }


let jsonBody = {
    contact : {
        firstName: "caca",
        lastName:"lastName",
        address: "address",
        city:"city",
        email:"email",
    },

    products : [
        "5be9c8541c9d440000665243",
        "5beaa8bf1c9d440000a57d94"
    ]

}   

fetch("http://localhost:3000/api/teddies/order", 
{
	method: "POST",
	headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json' 
    },
	body: JSON.stringify(jsonBody)
})
 .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
     console.log(value)
  });




e.preventDefault();
});



// form.onsubmit = (e) => {
//     console.log(new FormData(form))

//     e.preventDefault();
// }
