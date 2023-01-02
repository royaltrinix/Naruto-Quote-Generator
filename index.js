// let images = [
//   "images/itachi.jpeg",
//   "images/madara.jpeg",
//   "images/naruto.jpeg",
//   "images/Obito.jpeg",
//   "images/sasuke.jpeg",
// ];
// let narutoQuote = document.getElementById("naruto");
// let itachiQuote = document.getElementById("itachi");
// let madaraQuote = document.getElementById("madara");
// let obitoQuote = document.getElementById("obito");
// let jirayaQuote = document.getElementById("jiraya");

const defaultImage = "images/Minato\ Namikaze\ Anime\ GIF\ -\ Minato\ Namikaze\ Anime\ Naruto\ -\ Discover\ &\ Share\ GIFs.gif";

// function narutoClick(index){
    // const bodyTag = document.getElementsByTagName('body')[0];
    // // console.log(bodyTag)
    // bodyTag.style.backgroundImage = `url('${images[index]}')`;
    // // narutoQuote.textContent =  images[0]
    // console.log(index)
    // console.log(images[index])
// }

const buttons = document.getElementsByClassName("naruto-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    const bodyTag = document.getElementsByTagName('body')[0];
    
    bodyTag.style.backgroundImage = `url('${event.target.dataset.myurl}')`;

  });

//    buttons[i].addEventListener("dblclick", function(event) {
//      const bodyTag = document.getElementsByTagName('body')[0];

//      bodyTag.style.backgroundImage = `url('${defaultImage}')`;

//    });
};
