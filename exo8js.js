// Déclaration de valeur.
function valeur() {
  //On récupère la saisie utilisateur.
  var age = document.getElementById('age').value;
  // On vérifie que l'age entré est bien un nombre.
  if(isNaN(age)){
    alert('Vous n\'avez pas entré de nombre')
    // Si c'est bien un nombre, on continue !
  }else{
    // On vérifie que l'age entré est cohérent.
    if(age < 0 || age > 115){
      alert('L\'âge entré ne correspond pas à un humain normalement constitué')
    }else{
      //On regarde si l'age est inférieur a 18, si c'est le cas, on dit qu'il est mineur.
      if (age < 18) {
        alert('Vous êtes mineur');
        // Sinon, c'est qu'il est majeur.
      }else{
        alert('Vous êtes majeur');
      }
    }
  }
}
