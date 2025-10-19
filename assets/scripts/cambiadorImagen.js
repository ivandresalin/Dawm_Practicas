let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "../img/Chansey.ico") {
    miImage.setAttribute("src", "../img/Abra.ico");
  } else {
    miImage.setAttribute("src", "../img/Arbok.ico");
  }
};