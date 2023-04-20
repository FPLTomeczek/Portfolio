function setHeader() {
  if (window.outerWidth <= 780) {
    header[0].style.height = `${navbar_mobile.offsetHeight}px`;
  } else {
    header[0].style.height = `${navbar.offsetHeight}px`;
  }
}

function setLogoImagesTop() {
  let marginSum = 0;
  for (let i = 0; i < logo_images.length; i++) {
    console.log(textbox_containers[i].offsetHeight);
    logo_images[i].style.top = `${25 + marginSum}px`;
    marginSum += textbox_containers[i].offsetHeight;
  }
}

function onLoad() {
  setHeader();
  setLogoImagesTop();
}

function onResize() {
  setHeader();
  setLogoImagesTop();
}

var logo_images = document.getElementsByClassName("logo");
var textbox_containers = document.getElementsByClassName("container");

var navbar = document.getElementById("navbar");
var navbar_mobile = document.getElementById("navbar-mobile");

// setTimeout(() => {
//   navbar.classList.add("navbar");
// }, 3000);

setTimeout(() => {
  navbar.classList.remove("animate-navbar");
  navbar_mobile.classList.remove("animate-navbar");
  navbar.classList.add("opacity-1");
  navbar_mobile.classList.add("opacity-1");
  // page duration to 12000
}, 3000);

var header = document.getElementsByTagName("header");

addEventListener("load", onLoad);
addEventListener("resize", onResize);

var modal = document.getElementById("modal");
var close_modal = document.getElementById("close-modal");
var open_modal = document.getElementById("nav-slider");

close_modal.addEventListener("click", () => {
  modal.classList.remove("open-modal");
  modal.classList.add("close-modal");
});

open_modal.addEventListener("click", () => {
  modal.classList.remove("close-modal");
  modal.classList.add("open-modal");
});

var modal_list = document.getElementById("modal-list");

for (let i = 0; i < modal_list.children.length; i++) {
  modal_list.children[i].onclick = function () {
    modal.classList.remove("open-modal");
    modal.classList.add("close-modal");
  };
}
