var feedback=document.querySelector(".contacts-link"),feedbackWindow=document.querySelector(".modal-write-us"),close=feedbackWindow.querySelector(".modal-close"),feedbackForm=feedbackWindow.querySelector(".write-us-form"),feedbackName=feedbackWindow.querySelector("[name=write-us-name]"),feedbackEmail=feedbackWindow.querySelector("[name=write-us-email]"),feedbackText=feedbackWindow.querySelector("[name=write-us-letter]"),storageName=localStorage.getItem("name"),storageEmail=localStorage.getItem("email");feedback.addEventListener("click",function(e){e.preventDefault(),feedbackWindow.classList.add("modal-show"),storageName?(feedbackName.value=storageName,storageEmail?(feedbackEmail.value=storageEmail,feedbackText.focus()):feedbackEmail.focus()):feedbackName.focus()}),close.addEventListener("click",function(e){e.preventDefault(),feedbackWindow.classList.remove("modal-show"),feedbackWindow.classList.remove("modal-error")}),feedbackForm.addEventListener("submit",function(e){feedbackName.value&&feedbackEmail.value&&feedbackText.value?(localStorage.setItem("name",feedbackName.value),localStorage.setItem("email",feedbackEmail.value)):(e.preventDefault(),feedbackWindow.classList.remove("modal-error"),feedbackWindow.offsetWidth=feedbackWindow.offsetWidth,feedbackWindow.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&feedbackWindow.classList.contains("modal-show")&&(feedbackWindow.classList.remove("modal-show"),feedbackWindow.classList.remove("modal-error"))});var map=document.querySelector(".contacts-map-link"),mapWindow=document.querySelector(".modal-map"),mapClose=mapWindow.querySelector(".modal-close");map.addEventListener("click",function(e){e.preventDefault(),mapWindow.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapWindow.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapWindow.classList.contains("modal-show")&&mapWindow.classList.remove("modal-show")});