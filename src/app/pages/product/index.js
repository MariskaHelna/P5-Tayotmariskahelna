const productUrl = "http://localhost:3000/api/teddies/"

// recupérer les produits depuis l'API
export const product = (id) => {
    return fetch(productUrl + id)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
}

// afficher les produits
export const showProducts = () => {

    products().then((values) => {

        //boucle pour chaque iteration d'un produit
        values.forEach(product => {
            //recupère l'élément liste dans le HTML
            const cards = document.getElementById("list-product");

        cards.innerHTML += 
        `<div class="col-6">
            <div class="card bg-dark text-white">
                <img src="${product.imageUrl}" class="card-img" alt="...">
                <div class="card-img-overlay">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text"> ${product.price}</p>
                <p class="card-text"> ${product.description} </p>
                <a href="produit.html?id=${product._id}" class="btn btn-primary">Voir plus</a>
                </div>
            </div>
        </div>
    `;
        });

    })
    .catch((err) => {
        // Une erreur est survenue
    });


}