// function scrollToTop() {
//   window.scrollTo({
//     top: 1000,
//     behavior: "smooth",
//   });
// }

document.querySelectorAll('a[href^="#"]').forEach(($anchor) => {
  $anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
      // inline: "center",
      //scroll to top of the target element
    });
  });
});
