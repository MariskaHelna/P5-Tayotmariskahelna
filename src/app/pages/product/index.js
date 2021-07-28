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