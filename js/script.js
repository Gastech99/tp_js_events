let modif = document.getElementById("animate");
let dic = document.getElementById("dic");

document.addEventListener("DOMContentLoaded", function () {
  // Modifier le contenu de l'élément avec id 'texte'
  document.getElementById("texte").innerHTML =
    "<p class='inner'>Hello World!, ceci est un texte créé depuis le innerHTML</p>";

  // Obtenir tous les éléments <p>
  const element = document.getElementsByTagName("p");

  // Modifier le contenu de l'élément avec id 'demo'
  document.getElementById("demo").innerHTML =
    "The text in first paragraph (index 0) is: " + element[0].innerHTML;

  // Fonction de gestion du clic pour changer le texte
  function gestionnaireUnClick() {
    document.getElementById("p1").innerHTML =
      "<p style='background-color: pink;'>Texte Après</p>";
    alert("Vous voulez vraiment changeer votre texte ? ");
  }

  // Ajouter un écouteur d'événement au bouton
  const button = document.getElementById("changeTextButton");
  button.addEventListener("click", gestionnaireUnClick);

  function myFunction() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Entrer une valeur correcte !";
    } else {
      if (x % 2 === 0) {
        text = "La valeur saisie est pair ";
      } else {
        text = "La valeur saisie est impair ";
      }
    }
    document.getElementById("demo2").innerHTML = text;
  }
  const button_input = document.getElementById("formIntput");
  button_input.addEventListener("click", myFunction);

  document.getElementById("myBtn").onclick = displayDate;

  function displayDate() {
    document.getElementById("demo3").innerHTML = Date();
  }

  // Function mouseOver
  function mOver(obj) {
    obj.innerHTML = "Thank You";
    alert("test");
  }

  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
  }

  modif.addEventListener("onmouseover", mOver);
  modif.addEventListener("onmouseout", mOut);

  function gestionnaireUnClick2() {
    // Il nous affiche le rectangle au milieu de la page en vert
    gsap.to(modif, { y: 150, stagger: 0.2 });
  }

  modif.addEventListener("click", gestionnaireUnClick2);

  // Dictionnaire
  function search() {
    let word = document.getElementById("text").value;
    let resultat = document.getElementById("resultat");

    if (word.length != 0) {
      let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          try {
            for (let words of data) {
              let definition = words.meanings[0].definitions[0].definition;
              resultat.innerHTML = "<p class='res'>" + definition + "</p>";
            }
          } catch (err) {
            resultat.innerHTML = "<p>Aucune définition trouvée !</p>";
          }
        });
    } else {
      resultat.innerHTML = "<p>Veuillez remplir ce champ svp!</p>";
    }
  }

  dic.addEventListener("click", search);

  // Sélectionner le bouton
  const toggleButton = document.getElementById("toggleButton");

  // Ajouter un écouteur d'événement pour basculer entre le mode sombre et le mode clair
  toggleButton.addEventListener("click", function () {
    // Basculer la classe 'dark-mode' sur le body
    document.body.classList.toggle("dark-mode");

    // Modifier le texte du bouton selon le mode
    if (document.body.classList.contains("dark-mode")) {
      toggleButton.textContent = "Light Mode";
    } else {
      toggleButton.textContent = "Dark Mode";
    }
  });
});
