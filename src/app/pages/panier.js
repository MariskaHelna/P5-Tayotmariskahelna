import {getPanierFromStorage } from '@pages/product.js'

import '@styles/main.scss'
import { Modal } from 'bootstrap'

// création de la modal
var myModal = new Modal(document.getElementById('confirmation-commande'))

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

form.onsubmit =  (e) => {

let firstName = document.getElementById('firstName').value;
let lastName = document.getElementById('lastName').value;
let address = document.getElementById('address').value;
let city = document.getElementById('city').value;
let email  = document.getElementById('email').value;

let data = {
    "firstName":firstName,
    "lastName":lastName,
    "address":address,
    "city":city,
    "email":email,
}


let jsonBody = {
    contact: data,
    products : listIdProduct()

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
     confirmationCommande(value);
     
  });

e.preventDefault();
};


const confirmationCommande = (value) => {
    console.log(value)

    document.getElementById("orderid").innerHTML = value.orderId ;
    document.getElementById("cmd-prix-total").innerHTML = totalPrice()  + " euros";
    
    // afficher le message de validation commande
    myModal.show();
}

const listIdProduct = () => {
    let listId = [];
    let panier = getPanierFromStorage();

    panier.forEach((data) => {
        for (let i = 0; i < data.quantity; i++) {
            listId.push(data._id)   
           }
    });

    return listId;
}
  
