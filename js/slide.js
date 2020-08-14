

var sliders = document.querySelectorAll(".slide-block");

for (var i = 0; i < sliders.length; i++) {
  let glide = new Glide(sliders[i], {
    type: "carousel",
    perView: 1,
    focusAt: "center",
    peek: 80,
    breakpoints:{
      
    }
  });

  glide.mount();
}


var slidedot = document.querySelectorAll(".slides.glide");

for (var i = 0; i < slidedot.length; i++) {
  let glide = new Glide(slidedot[i], {
    type: "carousel",
    perView: 1,
    focusAt: "center",
    autoplay: 6000,

  });
  glide.mount();
}