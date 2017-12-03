var feedback = document.querySelector(".contacts-link");

var feedbackWindow = document.querySelector(".modal-write-us");
var close = feedbackWindow.querySelector(".modal-close");
var feedbackForm = feedbackWindow.querySelector(".write-us-form");
var feedbackName = feedbackWindow.querySelector("[name=write-us-name]");
var feedbackEmail = feedbackWindow.querySelector("[name=write-us-email]");
var feedbackText = feedbackWindow.querySelector("[name=write-us-letter]");
var storageName = localStorage.getItem("name");
var storageEmail = localStorage.getItem("email");

feedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackWindow.classList.add("modal-show");

  if (storageName) {
    feedbackName.value = storageName;
    if (storageEmail) {
      feedbackEmail.value = storageEmail;
      feedbackText.focus();
    } else {
      feedbackEmail.focus();
    }
  } else {
    feedbackName.focus();
  }
//      feedbackName.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackWindow.classList.remove("modal-show");
  feedbackWindow.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackWindow.classList.remove("modal-error");
    feedbackWindow.offsetWidth = feedbackWindow.offsetWidth;
    feedbackWindow.classList.add("modal-error");
  } else {
    localStorage.setItem("name", feedbackName.value);
    localStorage.setItem("email", feedbackEmail.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackWindow.classList.contains("modal-show")) {
      feedbackWindow.classList.remove("modal-show");
      feedbackWindow.classList.remove("modal-error");
    }
  }
});

var map = document.querySelector(".contacts-map-link");

var mapWindow = document.querySelector(".modal-map");
var mapClose = mapWindow.querySelector(".modal-close");

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapWindow.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapWindow.classList.contains("modal-show")) {
      mapWindow.classList.remove("modal-show");
    }
  }
});
