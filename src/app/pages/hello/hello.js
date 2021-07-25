const rootElement = document.getElementById('root')

export const hello = () => {
  let mardise = {
    nom: 'aspirateur',
    prix: '18',
    description: 'nulll !',
    age: 3
  };

  rootElement.innerHTML = "cet " + mardise.nom + " coute " + mardise.prix + " euros et c'est " + mardise.description ;
}