var navbar = document.getElementById("navbar");
var navbar_mobile = document.getElementById("navbar-mobile");

addEventListener("scroll", () => {
  if (window.scrollY >= 78) {
    navbar.classList.add("nav-scroll-bg");
  } else {
    navbar.classList.remove("nav-scroll-bg");
  }
  if (window.scrollY >= 51) {
    navbar_mobile.classList.add("nav-scroll-bg");
  } else {
    navbar_mobile.classList.remove("nav-scroll-bg");
  }
});

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
