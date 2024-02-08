
/* BOTÃO MOSTRAR MAIS - projetos -------------------------------------------------------------- */
var myButton = document.getElementById("projetos-btn");
var myDiv = document.getElementById("secundario");

myButton.addEventListener("click", function () {
  if (myDiv.style.display === "none") {
    myDiv.style.display = "flex";
    myButton.innerHTML = "Mostrar Menos";
  } else {
    myDiv.style.display = "none";
    myButton.innerHTML = "Mostrar Mais";
  }
});

let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        document.querySelector('.header').classList.remove('hidden');
      } else {
        document.querySelector('.header').classList.add('hidden');
      }

      prevScrollPos = currentScrollPos;
    }