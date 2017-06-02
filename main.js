// ------ VARIABLES ------ //
var boxes = $('#board div')
var randomHole
var score = 0
var count = 30

// ------ FUNCTIONS ------ //
for (var i=0; i<boxes.length; i++) {
  boxes[i].addEventListener('click', boxClickHandler)
}

function boxClickHandler() {
  if (this.innerHTML !== "" ) {
    setTimeout(function() {
      randomHoleGenerator();
    }, 300);
    score = score + 1
    $('.score').text(score + " points")
    this.innerHTML = ""
  } else {
    score = score - 3
    $('.score').text(score + " points")
  }
}

function randomHoleGenerator() {
  randomHole = boxes[Math.floor(Math.random() * boxes.length)];
  randomHole.innerHTML = "<img src='images/trump.png'>"
}

$('.start').on('click', function(){
  setTimeout(function() {
    randomHoleGenerator();
  }, 300);
  setInterval(function() {
    count--;
    if (count >=0 ) {
      $('.start').text(count + ' sec...');
    }
    if (count === 0) {
      alert('out of time! you got ' + score + ' points!')
      endGame()
    }
  }, 1000);
})

function endGame() {
  for (var i=0; i<boxes.length; i++) {
    boxes[i].removeEventListener('click', boxClickHandler)
  }
}
