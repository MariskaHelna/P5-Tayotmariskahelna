const listProductUrl = "http://localhost:3000/api/teddies"

// recupérer les produits depuis l'API
export const products = () => {
    return fetch(listProductUrl)
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
}

// afficher les produits
export const showProducts = () => {
    //recupère l'élément liste dans le HTML
    const cards = document.getElementById("list-product");

    products().then((values) => {
        //boucle pour chaque iteration d'un produit
        values.forEach(product => {

            cards.innerHTML += 
            `<div class="col-6 mt-5">
                <div class="card style="width:18rem;">
                    <img src="${product.imageUrl}" class="card-img-top img-thumbnail " alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text"> ${product.price + " euros"}</p>
                    <p class="card-text"> ${product.description} </p>
                    <a href="produit.html?_id=${product._id}" class="btn btn-primary">Voir plus</a>
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