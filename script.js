document.getElementById("inscription-form").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const prenom = document.getElementById("prenom").value;
  const nom = document.getElementById("nom").value;
  const dob = document.getElementById("dob").value;
  const email = document.getElementById("email").value;

  alert(`Merci ${prenom} ${nom} !\nInscription reçue.`);

  
});
