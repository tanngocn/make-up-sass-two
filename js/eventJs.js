let captcha = document.querySelector(".captcha__bg");
let btnRefresh = document.querySelector(".btn-refresh");
captcha.innerHTML = Math.round(Math.random() * 1000000);
let content = 0;

btnRefresh.addEventListener("click", function () {
  content = Math.round(Math.random() * 1000000);
  captcha.innerHTML = content;
});
