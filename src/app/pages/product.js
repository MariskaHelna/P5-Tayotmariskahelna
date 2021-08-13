import '@styles/main.scss'


const productUrl = "http://localhost:3000/api/teddies/"
let productData = null;

// recupérer un produits depuis l'API avec fectch
const product = () => {
    return fetch(getUrl())
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
}

const getId = () => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('_id')
}
const getUrl = () => {
    return productUrl + getId()
}
// afficher chaque element 
export const showProduct = () => {
    product().then((value) => {

        productData = value;
        document.getElementById("produit-titre").innerText          = value.name;
        document.getElementById("produit-image").src                = value.imageUrl;
        document.getElementById("produit-description").innerText    = value.description;
        document.getElementById("produit-prix").innerText           = value.price + " euros"; 
    })
}

// recuperer les données depuis le local storage 
export const getPanierFromStorage = () => {
    let panierData = JSON.parse(localStorage.getItem("panier")) || [];

    return panierData;
 }

// sauvegarde les données dans le local storage 
const sauvegardePanier = (panierData) => {
    localStorage.setItem("panier", JSON.stringify( panierData ));
}

let boutonPanier = document.getElementById("bouton-panier");

if(boutonPanier!==null){

    boutonPanier.onclick = () => {
        let panierData = getPanierFromStorage();
        productData.quantity = parseInt(document.getElementById("quantity").value);
    
        panierData.push(productData);
    
        sauvegardePanier(panierData);
        
    }
    
}

showProduct();