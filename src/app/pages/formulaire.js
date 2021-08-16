let from = document.getElementById('form')

form.addEventListener('submit', function(e){
     let submit = document.getElementById('submit');
     if(submit.value.trin() == ""){
        let myerror = document.getElementById('myerror');
        myerror.innerHTML = "champ error est requis";
        myerror.style.color = "red";
         e.preventDefault();
     }


});


// let firstName = document.getElementById('nom');
// let lastName = document.getElementById('prenom');
// let adress = document.getElementById('adresse');
// let city = document.getElementById('ville');
// let  = document.getElementById('adresse-mail');
