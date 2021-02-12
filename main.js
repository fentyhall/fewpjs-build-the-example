// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red": "",
  "": "red"
};

let articleHearts = document.getElementsByClassName("like")

for (let eachHeart of articleHearts) {
  eachHeart.addEventListener("click", likeHeart);
}

function likeHeart(event) {
  let heart = event.target;
  mimicServerCall()
    .then( () => {
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch( () => {
      document.getElementById("modal").className = "";
      setTimeout(function() {
        document.getElementById("modal").className = "hidden";
      }, 5000);
    });
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}