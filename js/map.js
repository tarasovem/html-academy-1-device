var mapButton = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".modal-map");
var closeMapModal = mapModal.querySelector(".modal-map .button-close");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("show");
});

closeMapModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapModal.classList.contains("show")) {
      mapModal.classList.remove("show");
    }
  }
});
