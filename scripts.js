/*--------------------------------------------------------
//                      Article Button
---------------------------------------------------------*/
var button = document.querySelector("button");
var secondButton = document.createElement("button");
var main = document.querySelector("main");

button.addEventListener('click', () => {
  var article = document.createElement("article");
  var section = document.createElement("section");
  secondButton.innerHTML = "Create Section"
  secondButton.style.width = "50%";
  main.prepend(article);
  article.append(secondButton);
});

secondButton.addEventListener('click', () => {
  var article = document.querySelector("article");
  var section = document.createElement("section");
  // section.setAttribute("white-space","nowrap");
  section.innerHTML = stringGen();
  article.prepend(section);
});

function stringGen() {
  var text = " ";

  var charset = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 400; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}

/*--------------------------------------------------------
//                      Audio Image
---------------------------------------------------------*/
var click = false;
var audioImage = document.querySelector("audio");
var hero = document.querySelector("#space");
hero.addEventListener('click', () => {
  click = !click
  if (click) {
    audioImage.play();
  } else {
    audioImage.pause();
  }
})

/*--------------------------------------------------------
//                     Change Color
---------------------------------------------------------*/
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/*--------------------------------------------------------
                Change Color
---------------------------------------------------------*/
var numSteps = 20.0;

var boxElement;
var prevRatio = 0.0;
var increasingColor = "rgba(40, 40, 190, ratio)";
var decreasingColor = "rgba(190, 40, 40, ratio)";

// Set things up.

window.addEventListener("load", function (event) {
  boxElement = document.querySelector("#bg");

  createObserver();
}, false);

function createObserver() {
  var observer;

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList()
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
}

function buildThresholdList() {
  var thresholds = [];
  var numSteps = 20;

  for (var i = 1.0; i <= numSteps; i++) {
    var ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleIntersect(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
    } else {
      entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
    }

    prevRatio = entry.intersectionRatio;
  });
}