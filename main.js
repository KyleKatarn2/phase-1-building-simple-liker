// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likes = document.querySelectorAll('.like-glyph');

for (click of likes) {
  click.addEventListener('click', likeCallback);
}

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function (response) {
      heart.classList.add('activated-heart');
      heart.textContent = FULL_HEART;
    })
    .catch(function (error) {
      document.querySelector('#modal').classList.remove('hidden');
      setTimeout(() => {
        document.querySelector('#modal').classList.add('hidden');
      }, 3000);
      heart.classList.remove('activated-heart');
      heart.textContent = EMPTY_HEART;
    });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
