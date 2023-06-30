// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likes =  document.querySelectorAll('.like')
likes.forEach(like => {
  like.addEventListener('click', () => {mimicServerCall})
})
.then(() => {
    toggleLike(button);
  })
  .catch((error) => {
    displayError(error)
})
function toggleLike(button) {
  const heart = button.querySelector('.like-glyph');
  if (heart.innerText === EMPTY_HEART) {
    heart.innerText = FULL_HEART;
    heart.classList.add('activated-heart');
  } else {
    heart.innerText = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

// Display error functionality
function displayError(error) {
  errorMessage.innerText = error;
  errorModal.classList.remove('hidden');
  setTimeout(() => {
    errorModal.classList.add('hidden');
  }, 3000);
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
