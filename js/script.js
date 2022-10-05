//nav bar

document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelector(".bar").classList.toggle("animate");
    var mobileNav = document.querySelector(".mobile-nav");
    mobileNav.classList.toggle("show");
  });

var checkbox = document.querySelector("input[name=theme]");

//light mode toggle
checkbox.addEventListener("change", function () {
  if (this.checked) {
    trans();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    trans();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

let trans = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

//paralax

window.addEventListener("scroll", function (e) {
  const target = this.document.querySelectorAll(".scroll");

  var index = 0;
  var length = target.length;

  for (index; index < length; index++) {
    var pos = window.pageYOffset * target[index].dataset.rate;

    target[index].style.transform = "translate3d(0px," + pos + "px, 0px)";
  }
});
