const consoleMessage = `
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . .#######. . . . . . . . . . . . . . . . . .
. . . . . . . .#. .#### . . . ####. . .###############. . .
. . . ########. ##. ##. . . ######################### . . .
. . . . ########+#. . . . ######################. . . . . .
. . . . .######## . . . .   ################### . . . . . .
. . . . . ### .   . . . .#####. ##############. # . . . . .
. . . . . . ##### . . . .#######. ##########. . . . . . . .
. . . . . . .###### . . . .#### . . . . .## . . . . . . . .
. . . . . . . ##### . . . .#### # . . . . . ##### . . . . .
. . . . . . . ### . . . . . ##. . . . . . . . ### .#. . . .
. . . . . . . ##. . . . . . . . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . .

North of the 44th Parallel.
East of the 74th Meridian.
The empty space above,
a place to make your own.
`
console.log(consoleMessage)

addEventListener("keydown", (event) => {
  var song = document.querySelector("#song")
  if (song.paused) {
    song.play()
  }
});

function mute() {
  var song = document.querySelector("#song")
  var mute = document.querySelector("#mute")
  if (!song.paused) {
    mute.innerHTML = "unmute"
    song.pause()
  } else {
    mute.innerHTML = "mute"
    song.play()
  }
}


function enter() {
  var song = document.querySelector("#song")
  if (song.paused) {
    song.play()
  }
  var hidden = document.querySelector("#hidden")
  hidden.style.display = "block"

  var button = document.querySelector("#load-enter")
  button.style.display = "none"

  var textWrapper = document.querySelector('.load-animate .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
  .add({
    targets: '.load-animate .letter',
    duration: 6300
  })
  .add({
    targets: '.load-animate .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  }, '+=200');


anime.timeline()
  .add({
    targets: '.load-animate .letter',
    duration: 2000
  })
  .add({
    targets: '.ml15 .word',
    scale: [4,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }, '+=200')
}

function handleSubmission(val) {
  window.sessionStorage.setItem("Email", val)
}

document.addEventListener("mousemove", handleMouseMove);
function handleMouseMove(event) {
  document.querySelectorAll(".parallax").forEach((shift) => {
    const position = shift.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

function handleClick() {
  document.getElementById("modal").style.display = "flex"
}


// credit: https://tobiasahlin.com/moving-letters/