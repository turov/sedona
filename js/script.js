var link = document.querySelector(".hotels-search-btn");
var form = document.querySelector(".modal-content");
var arrival = document.querySelector("[id=arrival-date]");
var departure = document.querySelector("[id=departure-date]");
var adult = document.querySelector("[id=kids]");
var kids = document.querySelector("[id=kids]");
var search = document.querySelector(".book-form button");

link.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.toggle("modal-content-show");
  arrival.focus();
});

search.addEventListener("click", function(event) {
  if (!(arrival.value && departure.value && adult.value && kids.value)) {
    event.preventDefault();
    form.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode == 27) {
    if (form.classList.contains("modal-content-show")) {
      form.classList.remove("modal-content-show");
    }
  }
});

