document.querySelector(".banner-btn").addEventListener("click", () => {
   document.querySelector(".banner").style.display = "none";
   document.querySelector(".form-container").style.cssText =
      "opacity: 1 ; visibility: visible;";
   document.querySelector(".container").style.background = "#cc683c";
});
document.querySelector(".x-btn").addEventListener("click", () => {
   document.querySelector(".banner").style.display = "flex";
   document.querySelector(".form-container").style.cssText =
      "opacity: 0 ; visibility: hidden;";
   document.querySelector(".container").style.cssText =
      "background: radial-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)),url(https://a.imge.to/2019/08/05/w72Wm.jpg) center no-repeat; background-size: cover;";
});