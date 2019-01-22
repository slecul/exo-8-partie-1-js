function valeur() {
  var age = document.getElementById('age').value;
  if (age < 18) {
    alert('Vous êtes mineur');
  }
  else {
    alert('Vous êtes majeur');
  }
}
