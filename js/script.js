var link = document.querySelector(".hotels-search-btn");
var form = document.querySelector(".modal-content");
var arrival = document.querySelector("#arrival-date");
var departure = document.querySelector("#departure-date");
var adult = document.querySelector("#adult");
var kids = document.querySelector("#kids");
var search = document.querySelector(".book-find");

form.classList.remove("modal-content-show");

link.addEventListener("click", function (event) {
  event.preventDefault();
  form.classList.toggle("modal-content-show");
  arrival.focus();
});

search.addEventListener("click", function (event) {
  form.classList.remove("modal-error");
  form.offsetWidth = form.offsetWidth;
  if (!(arrival.value && departure.value && adult.value && kids.value)) {
    event.preventDefault();
    form.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (form.classList.contains("modal-content-show")) {
      form.classList.remove("modal-content-show");
    }
  }
});

