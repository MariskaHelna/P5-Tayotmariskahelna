const productUrl = "http://localhost:3000/api/teddies/"

// recupérer un produits depuis l'API
export const product = () => {
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
const showProduct = () => {
    product().then((value) => {

        console.log(value)
        document.getElementById("produit-titre").innerText          = value.name;
        document.getElementById("produit-image").src                = value.imageUrl;
        document.getElementById("produit-description").innerText    = value.description;
        document.getElementById("produit-prix").innerText           = value.price + " euros"; 
    })
}

showProduct();

