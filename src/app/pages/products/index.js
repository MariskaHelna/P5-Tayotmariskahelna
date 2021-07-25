export const products = () => {
    fetch("http://localhost:3000/api/teddies")
    .then((res) => {
        if (res.ok) {
        return res.json();
        }
    })
    .then((values) => {
        // console.log(values);
        showProducts(values)
    })
    .catch((err) => {
        // Une erreur est survenue
    });
}

export const showProducts = (values) => {
    //boucle pour chaque iteration d'un produit
    values.forEach(product => {
        //recupère l'élément liste dans le HTML
        const cards = document.getElementById("list-product");
        cards.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${product.imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <p class="card-text">${product.description}</p>
            <a href="" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `;
    });
}