const message = `Happy sixth, baby koo! \n\nThank you for staying and believing in me every time I doubted my self. You were there for me when \nno one was. Baby, sobrang swerte ko talaga sa'yo, hindi ako mag-sasawang mahalin ka. I can't \nbelieve we've made it this far, baby. We're half a year na. \nI hope there's more months we'll enjoy together. Mahal na mahal kita baby ko. \n`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
