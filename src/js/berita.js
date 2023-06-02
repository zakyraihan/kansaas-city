 // hamburger
 function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}


function Menu(e) {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')) : (e.name = "menu", list.classList.remove('top-[80px]'), list.classList.remove('opacity-100'))
}

// It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes
if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});


// hamburger
function Menu(e) {
    let list = document.querySelector("ul");
    e.name === "menu"
        ? ((e.name = "close"),
            list.classList.add("top-[80px]"),
            list.classList.add("opacity-100"))
        : ((e.name = "menu"),
            list.classList.remove("top-[80px]"),
            list.classList.remove("opacity-100"));
}

// Dropdown
var drop = false;

function dorpDown() {
    var menu = document.getElementById("dropdown");
    let down = document.getElementById("down");
    let up = document.getElementById("up");
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


window.addEventListener("load", () => {
    const loader = document.getElementById("spinner");
    const body = document.getElementById("body");

    loader.style.display = "none";
    body.classList.remove("overflow-y-hidden");
});