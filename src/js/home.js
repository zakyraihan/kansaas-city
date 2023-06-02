currentSlideID = 1;

        sliderElement = document.getElementById('slider')
        totalSlider = sliderElement.childElementCount;

        function next() {
            let right = document.getElementById('right')
            if (currentSlideID < totalSlider) {
                currentSlideID++;
                showSlide()
            }
        }
        function prev() {
            if (currentSlideID > 1) {
                currentSlideID--;
                showSlide()
            }

        }
        function showSlide() {
            slider = document.getElementById('slider').getElementsByTagName('li')
            for (let index = 0; index < totalSlider; index++) {
                const element = slider[index]
                if (currentSlideID===index+1) {
                    element.classList.remove('hidden')
                } else {
                    element.classList.add('hidden')
                }
            }
        }


// It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleDarkIcon.classList.remove("hidden");
} else {
  themeToggleLightIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

window.onscroll = function () {
  menu();
};

function menu() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("header").classList.add("bg-white");
    document.getElementById("header").classList.add("shadow-lg");
    document.getElementById("header").classList.add("transition");
    document.getElementById("header").classList.add("dark:bg-item");
  } else {
    document.getElementById("header").classList.remove("bg-white");
    document.getElementById("header").classList.remove("shadow-lg");
    document.getElementById("header").classList.remove("dark:bg-item");
  }
}

window.addEventListener("load", () => {
  const loader = document.getElementById("spinner");
  const body = document.getElementById("body");

  loader.style.display = "none";
  body.classList.remove("overflow-y-hidden");
});

// Dropdown
var drop = false;

function dorpDown() {
  var menu = document.getElementById("dropdown");
  let down = document.getElementById("down");

  if (drop) {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    down.classList.remove("hidden");
    drop = false;
  } else {
    menu.classList.remove("hidden");
    menu.classList.add("flex");
    down.classList.add("hidden");
    drop = true;
  }
}



function dorpDown2() {
  var menu1 = document.getElementById("dropdown2");
  let down = document.getElementById("down1");
  let up = document.getElementById("up1");
  if (drop) {
    menu1.classList.add("hidden");
    menu1.classList.remove("block");
    down.classList.remove("hidden");
    drop = false;
  } else {
    menu1.classList.remove("hidden");
    menu1.classList.add("block");
    down.classList.add("hidden");
    drop = true;
  }
}

function dorpDown3() {
  var menu1 = document.getElementById("dropdown3");
  let down = document.getElementById("down2");
  let up = document.getElementById("up2");
  if (drop) {
    menu1.classList.add("hidden");
    menu1.classList.remove("block");
    down.classList.remove("hidden");
    drop = false;
  } else {
    menu1.classList.remove("hidden");
    menu1.classList.add("block");
    down.classList.add("hidden");
    drop = true;
  }
}

// SLIDER
// let sliderContainer = document.getElementById('sliderContainer')
//         let slider = document.getElementById('slider')
//         let cards = slider.getElementsByTagName('li')

//         let elementsToShow = 3;
//         if(document.body.clientWidth < 1000) {
//             elementsToShow = 1;
//         }else if (document.body.clientWidth > 1500) {
//             elementsToShow = 2
//         }
        
//         let sliderContainerWidth = sliderContainer.clientWidth
//         let cardWidth = sliderContainerWidth/elementsToShow

//         slider.style.width = cards.length * cardWidth + 'px'
//         slider.style.transition = 'margin';
//         slider.style.transitionDuration = '1s';

//         for (let index = 0; index < cards.length; index++) {
//             const element = cards[index];
//             element.style.width = cardWidth + 'px'
//         }

//         function prev()  {
//             if (+slider.style.marginLeft.slice(0,-2) != 0) 
//             slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) + cardWidth) + 'px'
//         }
//         function next() {
//             if(+slider.style.marginLeft.slice(0,-2) != -cardWidth*(cards.length-elementsToShow))
//             slider.style.marginLeft = ((+slider.style.marginLeft.slice(0,-2)) - cardWidth) + 'px'
//         }



// user dropdown 
var userDrop = false;

let dropdownUserAvatarButton = document.getElementById('dropdownUserAvatarButton');
let dropdownAvatar = document.getElementById('dropdownAvatar');

dropdownUserAvatarButton.addEventListener('click', function() {
  if(userDrop) {
    dropdownAvatar.classList.add('hidden')
    dropdownAvatar.classList.add('block')
    dropdownAvatar.classList.add('hidden')
    userDrop = false
  } else {
    dropdownAvatar.classList.remove('hidden')
    dropdownAvatar.classList.remove('block')
    userDrop = true
  }
})