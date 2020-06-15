// HORIZONTALLY SCROLL

let windowSize = window.innerWidth;




let scrollHorizontally = (e) => {
  e = window.event || e;
  let delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
  document.documentElement.scrollLeft -= delta * windowSize / 5;
};

let addMouseWell = (elem, callback) => {
  if (elem.addEventListener) {
    if ("onwheel" in document) {
      elem.addEventListener("wheel", callback);
    } else if ("onmousewheel" in document) {
      elem.addEventListener("mousewheel", callback);
    } else {
      elem.addEventListener("MozMousePixelScroll", callback);
    }
  } else {
    elem.attachEvent("onmousewheel", callback);
  }
};

addMouseWell(window, scrollHorizontally);

// var scroll = 0;

// window.addEventListener('wheel', e => {

//   window.onscroll = onScroll;
//   function onScroll() {
//     var top = window.pageXOffset;
//     if (scroll > top) {

//       console.log(1);
//     } else if (scroll < top) {
//       console.log(0);
//     }
//     scroll = top;
//   }
// })

// var x = 0;
// window.addEventListener('wheel', function(e) {
//   x += e.deltaY / 2;
//   console.log(e.deltaY)
//   this.scrollTo({
//   	left: x,
//   	behavior: 'smooth'
// 	});
// });

// BUTTON FOR SCROLL

const createBtnForScroll = () => {
  document.querySelectorAll(".container").forEach((contain) => {
    const fragment = document.createDocumentFragment();
    const container = document.createElement("div");
    container.classList.add("button-for-scroll");
    const btnUp = document.createElement("div");
    btnUp.classList.add("button-for-scroll_up");
    const spanUp = document.createElement("span");
    spanUp.innerHTML = "&uarr;";
    btnUp.appendChild(spanUp);
    const btnDown = document.createElement("div");
    btnDown.classList.add("button-for-scroll_down");
    const spanDown = document.createElement("span");
    spanDown.innerHTML = "&darr;";
    btnDown.appendChild(spanDown);
    container.appendChild(btnUp);
    container.appendChild(btnDown);
    fragment.appendChild(container);
    contain.appendChild(fragment);
  })
};
createBtnForScroll();

const toggleBtnForScroll = () => {
  document.querySelectorAll(".container").forEach((contain) => {
    if (windowSize > 1024 && contain.clientHeight != contain.scrollHeight) {
      contain.lastChild.style.display = 'flex';
      if (contain.lastChild.style.display = 'flex') {
        contain.style.overflowY = 'hidden';
      } else {
        contain.style.overflowY = 'scroll';
      }
    } else if (windowSize > 1024 && contain.clientHeight == contain.scrollHeight) {
      contain.style.overflowY = 'hidden';
      contain.lastChild.style.display = 'none'
    } else {
      contain.lastChild.style.display = 'none';
      contain.style.overflowY = 'scroll';
    }
  });
};



toggleBtnForScroll();



const scrollPageWithBtn = (elem, num) => {
  document.querySelectorAll(elem).forEach((e) => {
    e.addEventListener("click", () => {
      e.closest(".container").scrollBy(0, num);
    });
  });
};

let valForVerticalScroll = window.innerHeight;



scrollPageWithBtn(".button-for-scroll_down", valForVerticalScroll / 5);
scrollPageWithBtn(".button-for-scroll_up", -valForVerticalScroll / 5);

console.log(123);

// ANCHOR LOGO

const anchorsLogo = document.querySelectorAll(".logo-link");

const anchorForProject = (elements, container) => {
  for (let anchor of elements) {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(container).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
};

anchorForProject(anchorsLogo, ".radish");

// BUTTON LEAF

const buttonLeaf = document.querySelectorAll("a.footer-btn-leaf__item");
const containerBtnLeaf = document.querySelectorAll(".container");

for (let i = 0; i < buttonLeaf.length; i++) {
  buttonLeaf[i].addEventListener("click", (e) => {
    e.preventDefault();

    containerBtnLeaf[i + 2].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// BURGER

const burgers = document.querySelectorAll(".header__burger");
const burgerNavs = document.querySelectorAll(".header__nav");

for (let i = 0; i < burgers.length; i++) {
  burgers[i].addEventListener("click", () => {
    burgers[
      i
    ].parentElement.parentElement.parentElement.parentElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    burgers[i].classList.toggle("active");
    burgerNavs[i].classList.toggle("active");
    document.body.classList.toggle("lock");

    if (document.body.classList.contains("lock")) {
      windowSize = 0;
    } else {
      windowSize = window.innerWidth;
    }
  });
}

// NAV LINK

document.querySelectorAll(".header-nav-menu__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    for (let i = 0; i < burgers.length; i++) {
      burgers[i].classList.remove("active");
      burgerNavs[i].classList.remove("active");
      document.body.classList.remove("lock");
    }
    if (document.body.classList.contains("lock")) {
      windowSize = 0;
    } else {
      windowSize = window.innerWidth;
    }
  });
});

const navLinks1 = document.querySelectorAll(".nav-link_1"),
  navLinks2 = document.querySelectorAll(".nav-link_2"),
  navLinks3 = document.querySelectorAll(".nav-link_3"),
  navLinks4 = document.querySelectorAll(".nav-link_4"),
  navLinks5 = document.querySelectorAll(".nav-link_5"),
  navLinks6 = document.querySelectorAll(".nav-link_6");

anchorForProject(navLinks1, ".radish");
anchorForProject(navLinks2, ".about-radish");
anchorForProject(navLinks3, ".usefull-properties");
anchorForProject(navLinks4, ".price-radish");
anchorForProject(navLinks5, ".recipes-search");
anchorForProject(navLinks6, ".start-sales");

// CONTENT BUTTON

const contentButtons = document.querySelectorAll(".content-button");
for (let contButton of contentButtons) {
  contButton.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

// SLIDER

let slides = document.querySelectorAll(".all-dishes-container-card__item"),
  slidesContainer = document.querySelector(".all-dishes-container-card"),
  prevBtn = document.querySelector(".all-dishes__slider-left"),
  nextBtn = document.querySelector(".all-dishes__slider-right"),
  slideIndex = 0,
  valueForButton = -slides.length / 3 + 1;

nextBtn.addEventListener("click", (e) => {
  if (slideIndex / 100 == valueForButton) {
    slideIndex = 0;
  } else {
    slideIndex -= 100;
  }
  slidesContainer.style.transform = `translateX(${slideIndex}vw)`;
});

prevBtn.addEventListener("click", (e) => {
  if (slideIndex == 0) {
    slideIndex = valueForButton * 100;
  } else {
    slideIndex += 100;
  }
  slidesContainer.style.transform = `translateX(${slideIndex}vw)`;
});

function changeWindowSize() {
  if (windowSize <= 1050) {
    valueForButton = -slides.length + 1;
    slideIndex = 0;
    slidesContainer.style.transform = `translateX(${slideIndex}vw)`;
  } else if (windowSize > 1050) {
    valueForButton = -slides.length / 3 + 1;
    slideIndex = 0;
    slidesContainer.style.transform = `translateX(${slideIndex}vw)`;
  }
}

// PLUS ITEMS AND ANIMATION PLATE

const plusItems = document.querySelectorAll(".plus-item");

for (let plusItem of plusItems) {
  plusItem.addEventListener("click", () => {
    plusItem.parentElement.parentElement.classList.add("active");
  });
}

const ingredients = document.querySelector(".cooking-okroshka-ingredients");
const plateAnimation = document.createElement("div");
plateAnimation.classList.add("plate-animation");
ingredients.appendChild(plateAnimation);

document
  .querySelector(".cooking-okroshka-content-form__button")
  .addEventListener("click", () => {
    if (
      document.querySelectorAll(".cooking-okroshka-ingredients__item.active")
      .length < 4
    ) {
      alert("Для приготовления окрошки, необходимо добавить не менее 4 ингредиентов!");
    } else if (
      !document
      .querySelector(".kefir")
      .parentElement.classList.contains("active")
    ) {
      alert("Для приготовление окрошки, необходимо добавить кефир!");
    } else {
      for (let plusItem of plusItems) {
        if (
          !plusItem.parentElement.parentElement.classList.contains("active")
        ) {
          plusItem.parentElement.parentElement.style.opacity = "0";
        }
      }

      ingredients.classList.add("down");
      document.querySelector(".plate-animation").classList.add("down");
      setTimeout(() => {
        document.querySelector(
          ".cooking-okroshka-ingredients-plate"
        ).style.opacity = "0";
        document.querySelector(
          ".cooking-okroshka-ingredients-container"
        ).style.opacity = "0";
      }, 2000);
      setTimeout(() => {
        document.querySelector(".bon-appetit").scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        document
          .querySelector(".bon-appetit-image__item")
          .classList.add("active");
      }, 8000);
      setTimeout(() => {
        document.querySelector(
          ".cooking-okroshka-ingredients-plate"
        ).style.display = "none";
        document.querySelector(
          ".cooking-okroshka-ingredients-container"
        ).style.display = "none";
        document.querySelector(".plate-animation").style.width = "0";
        document.querySelector(".plate-animation").style.height = "0";
      }, 9000);
    }
  });

// ACTIVE BUTTON TYPE DISH

const typeDishItems = document.querySelectorAll(".typedish__item");

typeDishItems.forEach((button) => {
  button.addEventListener("click", () => {
    for (let i = 0; i < typeDishItems.length; i++) {
      typeDishItems[i].classList.remove("active");
    }
    button.classList.add("active");
  });
});

// FUNCTIONS CALL RESIZE

window.addEventListener("resize", () => {
  windowSize = window.innerWidth;
  valForVerticalScroll = window.innerHeight;
  changeWindowSize();
  toggleBtnForScroll();
});