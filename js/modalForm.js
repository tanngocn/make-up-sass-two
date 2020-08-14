let listForm = document.querySelectorAll(".form-block");

let login = document.querySelector("#login");
let register = document.querySelector("#register");
let forgetPass = document.querySelector("#forget-pass");
let sendEmail = document.querySelector("#send-email");
let sidebar = document.querySelector(".sidebar");
// let listSidebar =  document.querySelector(".sidebar__header ul");

let searchBlock = document.querySelector(".search");

let bgOverlay = document.querySelector(".bg-overlay");

let pageWrapper = document.querySelector(".page-wrapper");

let btnClose = document.querySelectorAll(".btn-close");
let btnForget = document.querySelector(".btn-forget");

let btnSidebar = document.querySelector(".btn-sidebar");

let btnSend = document.querySelector(".btn-send");
let btnLogin = document.querySelectorAll(".btn-login");
let btnRegister = document.querySelectorAll(".btn-register");

let btnToggle = document.querySelector(".toggle-block");

let btnSearch = document.querySelector(".btn-toggle-search");
let btnCloseSidebar = document.querySelector(".btn-close-sidebar ");

btnLogin.forEach((item) => {
  item.addEventListener("click", function () {
    login.classList.add("show");
    bgOverlay.classList.add("show");
    pageWrapper.classList.add("fixed");
    register.classList.remove("show");
  });
});

btnRegister.forEach((item) => {
  item.addEventListener("click", function () {
    register.classList.add("show");
    bgOverlay.classList.add("show");
    pageWrapper.classList.add("fixed");
    forgetPass.classList.remove("show");
  });
});

bgOverlay.addEventListener("click", function () {
  for (let i = 0; i < listForm.length; i++) {
    listForm[i].classList.remove("show");
  }
  bgOverlay.classList.remove("show");
  pageWrapper.classList.remove("fixed");
  searchBlock.classList.remove("active");
  sidebar.classList.remove("show");
});
btnClose.forEach((item) => {
  item.addEventListener("click", function () {
    for (let i = 0; i < listForm.length; i++) {
      listForm[i].classList.remove("show");
    }
    bgOverlay.classList.remove("show");
    pageWrapper.classList.remove("fixed");
  });
});

btnForget.addEventListener("click", function () {
  forgetPass.classList.add("show");
  login.classList.remove("show");
});

btnSend.addEventListener("click", function () {
  sendEmail.classList.add("show");
  login.classList.remove("show");
});

btnSearch.addEventListener("click", function () {
  pageWrapper.classList.add("fixed");
  searchBlock.classList.add("active");
  bgOverlay.classList.add("show");
});

btnSidebar.addEventListener("click", function () {
  btnSidebar.classList.toggle("active");
});

btnToggle.addEventListener("click", function () {
  sidebar.classList.add("show");
  pageWrapper.classList.add("fixed");
  bgOverlay.classList.add("show");
});

btnCloseSidebar.addEventListener("click", function () {
  sidebar.classList.remove("show");
  pageWrapper.classList.remove("fixed");
  bgOverlay.classList.remove("show");
});



