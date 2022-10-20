"use strict";

// TITLE
const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
// FIN TITLE
// TINY SLIDER
let slider = tns({
  container: ".my-slider",
  slideBy: 1,
  speed: 400,
  nav: false,
  controlsContainer: ".controls",
  prevButton: ".previous",
  nextButton: ".next",
  responsive: {
    1600: {
      items: 4,
      gutter: 20,
    },
    1024: {
      items: 3,
      gutter: 20,
    },
    768: {
      items: 2,
      gutter: 20,
    },
    480: {
      items: 1,
    },
  },
});
// FIN TINY SLIDER
// SLIDER
// $(document).ready(function() {
//   $('#autoWidth').lightSlider({
//       autoWidth:true,
//       loop:true,
//       onSliderLoad: function() {
//           $('#autoWidth').removeClass('cS-hidden');
//       }
//   });
// });
// FIN SLIDER
// ACCORDION
$(document).ready(() => {
  function handler(e) {
    var target = $(event.target);
    if (target.is(".box-accordion")) {
      target
        .addClass("active")
        .siblings(".box-accordion")
        .removeClass("active");
    }
  }
  $(".box-accordion")
    .click(handler)
    .find(".box-accordion")
    .removeClass("active");
});
// FIN ACCORDION
// SHOW AND HIDE CARD

function toggle(a) {
  let elem1 = document.getElementById("container-card");
  let elem2 = document.getElementById("container-card2");
  let elem3 = document.getElementById("container-card3");
  let elem4 = document.getElementById("container-card4");
  let elem5 = document.getElementById("container-card5");
  let elem6 = document.getElementById("container-card6");

  if (a == 1) {
    if (elem1.style.display === "flex") {
      elem1.style.display = "none";
    } else {
      elem1.style.display = "flex";
      elem2.style.display = "none";
      elem3.style.display = "none";
      elem4.style.display = "none";
      elem5.style.display = "none";
      elem6.style.display = "none";
    }
  } else if (a == 2) {
    if (elem2.style.display === "flex") {
      elem2.style.display = "none";
    } else {
      elem1.style.display = "none";
      elem2.style.display = "flex";
      elem3.style.display = "none";
      elem4.style.display = "none";
      elem5.style.display = "none";
      elem6.style.display = "none";
    }
  } else if (a == 3) {
    if (elem3.style.display === "flex") {
      elem3.style.display = "none";
    } else {
      elem1.style.display = "none";
      elem2.style.display = "none";
      elem3.style.display = "flex";
      elem4.style.display = "none";
      elem5.style.display = "none";
      elem6.style.display = "none";
    }
  } else if (a == 4) {
    if (elem4.style.display === "flex") {
      elem4.style.display = "none";
    } else {
      elem1.style.display = "none";
      elem2.style.display = "none";
      elem3.style.display = "none";
      elem4.style.display = "flex";
      elem5.style.display = "none";
      elem6.style.display = "none";
    }
  } else if (a == 5) {
    if (elem5.style.display === "flex") {
      elem5.style.display = "none";
    } else {
      elem1.style.display = "none";
      elem2.style.display = "none";
      elem3.style.display = "none";
      elem4.style.display = "none";
      elem5.style.display = "flex";
      elem6.style.display = "none";
    }
  } else if (a == 6) {
    if (elem6.style.display === "flex") {
      elem6.style.display = "none";
    } else {
      elem1.style.display = "none";
      elem2.style.display = "none";
      elem3.style.display = "none";
      elem4.style.display = "none";
      elem5.style.display = "none";
      elem6.style.display = "flex";
    }
  }
}

// FIN SHOW AND HIDE CARD

// GLOW BOARD
function glow(trigger, img) {
  let trigger1 = document.querySelector(trigger);
  let img1 = document.querySelector(img);

  trigger1.addEventListener("mouseenter", function () {
    img1.style.opacity = 1;
  });

  trigger1.addEventListener("mouseleave", function () {
    img1.style.opacity = 0;
  });
}
glow("#icon1", "#glow");
glow("#icon2", "#glow2");
glow("#icon3", "#glow3");
glow("#icon4", "#glow4");
// FIN GLOW BOARD

/* BACK TO TOP */
window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".scrollTop");
  scroll.classList.toggle("active", window.scrollY > 2000);
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
/* FIN BACK TO TOP */

/////////////////////////////////////
// Scrolling on click
////////////////////////////////////

const btnScrollTo = document.querySelectorAll(".scroll-to");
const section1 = document.querySelector(".test");



console.log(btnScrollTo);
btnScrollTo.forEach((btn) => {
  btn.addEventListener("click", function () {
    section1.scrollIntoView({ behavior: "smooth" });
    console.log('ok');
  });
});

// function toggle2() {
//   let x = document.getElementById("container-card2");

//   if(x.style.display === "none") {
//       x.style.display = "flex";
//   }
//   else {
//     x.style.display = "none";
//   }
// }
// function toggle3() {
//   let x = document.getElementById("container-card3");

//   if(x.style.display === "none") {
//       x.style.display = "flex";
//   }
//   else {
//     x.style.display = "none";
//   }
// }

// function toggle() {
//   let div = document.getElementById("container-art");
//   if (div.style.display == ""){
//    div.style.display = "none";
//   }else{
//   div.style.display = "";
//   }
//   }
