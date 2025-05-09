
//   const pinguim = document.getElementById('pinguim');
//   const container = document.querySelector('.pinguim-container');
//   let indoDireita = true;

//   const andarPinguim = () => {
//     const containerWidth = container.offsetWidth;
//     const pinguimWidth = pinguim.offsetWidth;

//     if (indoDireita) {
//       pinguim.style.transform = 'scaleX(1)';
//       pinguim.style.left = `${containerWidth - pinguimWidth}px`;
//     } else {
//       pinguim.style.transform = 'scaleX(-1)';
//       pinguim.style.left = `0px`;
//     }

//     // Espera 5s (tempo de andar), depois pausa por 5s e volta
//     setTimeout(() => {
//       // pausa de 5s
//       setTimeout(() => {
//         indoDireita = !indoDireita;
//         andarPinguim();
//       }, 5000); // pausa de 5 segundos
//     }, 5000); // tempo de caminhada
//   };

//   // Começa o movimento
//   window.onload = () => {
//     pinguim.style.left = '0px';
//     andarPinguim();
//   };
