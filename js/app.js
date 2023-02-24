const body = document.querySelector("body");
const mobileMenu = document.querySelector(".mobile-menu");
const hamburger = document.querySelector(".header--hamburger #check");
const content = document.querySelector("main");
const loader = document.querySelector(".loader");

content.style.display = "none";
loader.style.display = "flex";

window.addEventListener("load", function () {
  loader.style.display = "none";
  content.style.display = "block";
});

if (body !== null) {
  body.addEventListener("mousemove", function (e) {
    const fancyIcons = document.querySelectorAll(".icon-fancy");
    fancyIcons.forEach((el) => {
      const moving = el.getAttribute("data-set");
      const x = (e.clientX * moving) / 250;
      const y = (e.clientY * moving) / 250;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  });
}

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});
