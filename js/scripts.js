var link = document.querySelector(".reservation__button-search");

var formPopup = document.querySelector(".modal-form");

var arrivalData = document.querySelector("[name=arrival-data]");
var epartureDate = document.querySelector("[name=departure-date]");

var adult = document.querySelector("[id=adult]");
var children = document.querySelector("[id=children]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adult");
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

document.addEventListener("DOMContentLoaded", function(evt) {
  formPopup.classList.add("modal-form__hidden");

});

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  formPopup.classList.remove("modal-form__error");
  formPopup.classList.toggle("modal-form__show");
  if (isStorageSupport) {
    adult.value = storageAdult;
    children.value = storageChildren;
    setTimeout("arrivalData.focus()", 900);
  } else {
    setTimeout("arrivalData.focus()", 900);
  }
});

var storageAdult = localStorage.getItem("adult");
var storageChildren = localStorage.getItem("children");

formPopup.addEventListener("submit", function(evt) {
  if (!arrivalData.value || !epartureDate.value || !adult.value || !children.value) {

    evt.preventDefault();
    formPopup.classList.add("modal-form__error");
  } else {
    if (storage) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (formPopup.classList.contains("modal-form__show")) {
      formPopup.classList.remove("modal-form__show");
    }
  }
});
