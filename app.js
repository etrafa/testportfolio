// "using strict";

// // BUTTONS
// const keyDownButton = document.querySelector(".key-down");
// const prevPageButton = document.querySelector(".left-arrow");
// const nextPageButton = document.querySelector(".right-arrow");

// // SECTIONS //
// const mainContainer = document.querySelector(".main-wrapper");
// const homeSection = document.querySelector(".home");
// const aboutSection = document.querySelector(".about");
// const skillSection = document.querySelector(".skills");
// const worksSection = document.querySelector(".works");
// const contactSection = document.querySelector(".contact");

// //NAVBAR ELEMENTS
// const navHome = document.querySelector(".nav-home");
// const navAbout = document.querySelector(".nav-about");
// const navSkills = document.querySelector(".nav-skills");
// const navWorks = document.querySelector(".nav-works");
// const navContact = document.querySelector(".nav-contact");

// hamburgerMenu.addEventListener("click", () => {
//   navbarItems.classList.add("navbar-items-active");
// });

// closeNavButton.addEventListener("click", () => {
//   navbarItems.classList.remove("navbar-items-active");
// });

// let keyCounterForSmallScreen = 0;

// keyDownButton.addEventListener("click", () => {
//   if (keyCounterForSmallScreen > 4) {
//     keyCounterForSmallScreen = 0;
//   }

//   if (keyCounterForSmallScreen === 0) {
//     mainContainer.classList.add("main-active");
//     balloonOne.classList.add("balloon-dark");
//     balloonTwo.classList.add("balloon-dark");
//     homeSection.classList.add("home-deactive");
//     hamburgerMenu.style.color = "#fff";
//     keyDownButton.style.display = "none";
//     keyCounterForSmallScreen += 1;
//     setTimeout(() => {
//       aboutSection.classList.add("about-active");
//       homeSection.classList.remove("home-active");
//       keyDownButton.style.display = "block";
//       keyDownButton.style.bottom = "0";
//     }, 4000);
//   } else if (keyCounterForSmallScreen === 1) {
//     aboutSection.classList.add("about-deactive");
//     keyDownButton.style.display = "none";
//     keyCounterForSmallScreen += 1;
//     setTimeout(() => {
//       window.scroll(0, 0);
//       aboutSection.classList.remove("about-active");
//       aboutSection.classList.remove("about-deactive");
//       skillSection.classList.add("skills-active");
//       keyDownButton.style.display = "block";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 2) {
//     skillSection.classList.add("skills-deactive");
//     keyDownButton.style.display = "none";
//     keyCounterForSmallScreen += 1;
//     setTimeout(() => {
//       window.scroll(0, 0);
//       worksSection.classList.add("works-active");
//       skillSection.classList.remove("skills-active");
//       skillSection.classList.remove("skills-deactive");
//       keyDownButton.style.display = "block";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 3) {
//     worksSection.classList.add("works-deactive");
//     keyDownButton.style.display = "none";
//     keyCounterForSmallScreen += 1;
//     setTimeout(() => {
//       contactSection.classList.add("contact-active");
//       worksSection.classList.remove("works-active");
//       worksSection.classList.remove("works-deactive");
//       keyDownButton.style.display = "block";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 4) {
//     contactSection.classList.add("contact-deactive");
//     keyDownButton.style.display = "none";
//     keyCounterForSmallScreen += 1;
//     setTimeout(() => {
//       homeSection.classList.remove("home-deactive");
//       homeSection.classList.add("home-active");
//       mainContainer.classList.remove("main-active");
//       contactSection.classList.remove("contact-active");
//       contactSection.classList.remove("contact-deactive");
//       keyDownButton.style.display = "block";
//       balloonOne.classList.remove("balloon-dark");
//       balloonTwo.classList.remove("balloon-dark");
//       hamburgerMenu.style.color = "#000";
//     }, 3000);
//   }
// });

// nextPageButton.addEventListener("click", () => {
//   if (keyCounterForSmallScreen > 4) {
//     keyCounterForSmallScreen = 0;
//   }

//   if (keyCounterForSmallScreen === 0) {
//     mainContainer.classList.add("main-active");
//     balloonOne.classList.add("balloon-dark");
//     balloonTwo.classList.add("balloon-dark");
//     homeSection.classList.add("home-deactive");
//     nextPageButton.style.display = "none";
//     keyCounterForSmallScreen += 1;
//     console.log(keyCounterForSmallScreen);
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navAbout.style.color = "#ffff00";
//       aboutSection.classList.add("about-active");
//       homeSection.classList.remove("home-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navSkills.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "Home";
//       nextButtonText.textContent = "Skills";
//     }, 4000);
//   } else if (keyCounterForSmallScreen === 1) {
//     aboutSection.classList.add("about-deactive");
//     keyCounterForSmallScreen += 1;
//     navAbout.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     console.log(keyCounterForSmallScreen);
//     setTimeout(() => {
//       aboutSection.classList.remove("about-active");
//       aboutSection.classList.remove("about-deactive");
//       skillSection.classList.add("skills-active");
//       navSkills.style.color = "#ffff00";
//       prevButtonText.textContent = "About";
//       nextButtonText.textContent = "Projects";
//       prevPageButton.style.display = "block";
//       nextPageButton.style.display = "block";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 2) {
//     skillSection.classList.add("skills-deactive");
//     keyCounterForSmallScreen += 1;
//     navSkills.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     console.log(keyCounterForSmallScreen);
//     setTimeout(() => {
//       worksSection.classList.add("works-active");
//       skillSection.classList.remove("skills-active");
//       skillSection.classList.remove("skills-deactive");
//       navWorks.style.color = "#ffff00";
//       prevButtonText.textContent = "Skills";
//       nextButtonText.textContent = "Contact";
//       prevPageButton.style.display = "block";
//       nextPageButton.style.display = "block";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 3) {
//     worksSection.classList.add("works-deactive");
//     keyCounterForSmallScreen += 1;
//     navWorks.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     console.log(keyCounterForSmallScreen);
//     setTimeout(() => {
//       contactSection.classList.add("contact-active");
//       worksSection.classList.remove("works-active");
//       worksSection.classList.remove("works-deactive");
//       navContact.style.color = "#ffff00";
//       prevButtonText.textContent = "Projects";
//       nextButtonText.textContent = "Home";
//       prevPageButton.style.display = "block";
//       nextPageButton.style.display = "block";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 4) {
//     contactSection.classList.add("contact-deactive");
//     keyCounterForSmallScreen += 1;
//     navContact.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     console.log(keyCounterForSmallScreen);
//     setTimeout(() => {
//       homeSection.classList.remove("home-deactive");
//       homeSection.classList.add("home-active");
//       mainContainer.classList.remove("main-active");
//       contactSection.classList.remove("contact-active");
//       contactSection.classList.remove("contact-deactive");
//       balloonOne.classList.remove("balloon-dark");
//       balloonTwo.classList.remove("balloon-dark");
//       navAbout.style.color = "#000";
//       navSkills.style.color = "#000";
//       navWorks.style.color = "#000";
//       navContact.style.color = "#000";
//       title.style.color = "#000";
//       nextPageButton.style.color = "#000";
//       nextButtonText.style.color = "#fff";
//       nextButtonText.textContent = "About";
//       prevPageButton.style.display = "none";
//       nextPageButton.style.display = "block";
//     }, 3000);
//   }
// });

// prevPageButton.addEventListener("click", () => {
//   if (keyCounterForSmallScreen > 4) {
//     keyCounterForSmallScreen = 0;
//   }

//   if (keyCounterForSmallScreen === 1) {
//
//   } else if (keyCounterForSmallScreen === 2) {
//     skillSection.classList.add("skills-deactive");
//     prevPageButton.style.display = "none";
//     keyCounterForSmallScreen -= 1;
//     setTimeout(() => {
//       skillSection.classList.remove("s aboutSection.classList.add("about-deactive");
//     prevPageButton.style.display = "none";
//     keyCounterForSmallScreen -= 1;
//     setTimeout(() => {
//       aboutSection.classList.remove("about-deactive");
//       aboutSection.classList.remove("about-active");
//       mainContainer.classList.remove("main-active");
//       balloonOne.classList.remove("balloon-dark");
//       balloonTwo.classList.remove("balloon-dark");
//       homeSection.classList.add("home-active");
//       homeSection.classList.remove("home-deactive");
//       title.style.color = "#000";
//       navAbout.style.color = "#000";
//       navSkills.style.color = "#000";
//       navWorks.style.color = "#000";
//       navContact.style.color = "#000";
//       prevPageButton.style.display = "none";
//       nextPageButton.style.color = "#000";
//       prevButtonText.style.color = "#fff";
//       nextButtonText.style.color = "#fff";
//       nextButtonText.textContent = "About";
//     }, 3000);kills-deactive");
//       skillSection.classList.remove("skills-active");
//       aboutSection.classList.add("about-active");
//       aboutSection.classList.remove("about-deactive");
//       navAbout.style.color = "#ffff00";
//       prevPageButton.style.display = "block";
//       navSkills.style.color = "#fff";
//       prevButtonText.textContent = "Home";
//       nextButtonText.textContent = "Skills";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 3) {
//     worksSection.classList.add("works-deactive");
//     prevPageButton.style.display = "none";
//     keyCounterForSmallScreen -= 1;
//     setTimeout(() => {
//       worksSection.classList.remove("works-deactive");
//       worksSection.classList.remove("works-active");
//       skillSection.classList.add("skills-active");
//       skillSection.classList.remove("skills-deactive");
//       navSkills.style.color = "#ffff00";
//       prevPageButton.style.display = "block";
//       navWorks.style.color = "#fff";
//       prevButtonText.textContent = "About";
//       nextButtonText.textContent = "Projects";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 4) {
//     contactSection.classList.add("contact-deactive");
//     prevPageButton.style.display = "none";
//     keyCounterForSmallScreen -= 1;
//     setTimeout(() => {
//       contactSection.classList.remove("contact-deactive");
//       contactSection.classList.remove("contact-active");
//       worksSection.classList.add("works-active");
//       worksSection.classList.remove("works-deactive");
//       navWorks.style.color = "#ffff00";
//       prevPageButton.style.display = "block";
//       navContact.style.color = "#fff";
//       prevButtonText.textContent = "Skills";
//       nextButtonText.textContent = "Contact";
//     }, 3000);
//   }
// });

// navAbout.addEventListener("click", () => {
//   if (keyCounterForSmallScreen === 0) {
//     mainContainer.classList.add("main-active");
//     balloonOne.classList.add("balloon-dark");
//     balloonTwo.classList.add("balloon-dark");
//     homeSection.classList.add("home-deactive");
//     nextPageButton.style.display = "none";
//     keyCounterForSmallScreen = 1;
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navAbout.style.color = "#ffff00";
//       aboutSection.classList.add("about-active");
//       homeSection.classList.remove("home-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navSkills.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "Home";
//       nextButtonText.textContent = "Skills";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 2) {
//     skillSection.classList.add("skills-deactive");
//     keyCounterForSmallScreen = 1;
//     navSkills.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navAbout.style.color = "#ffff00";
//       aboutSection.classList.add("about-active");
//       skillSection.classList.remove("skills-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navSkills.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "Home";
//       nextButtonText.textContent = "Skills";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 3) {
//     worksSection.classList.add("works-deactive");
//     navWorks.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     keyCounterForSmallScreen = 1;
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navAbout.style.color = "#ffff00";
//       aboutSection.classList.add("about-active");
//       worksSection.classList.remove("works-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navSkills.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "Home";
//       nextButtonText.textContent = "Skills";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 4) {
//     contactSection.classList.add("contact-deactive");
//     navContact.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     keyCounterForSmallScreen = 1;
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navAbout.style.color = "#ffff00";
//       aboutSection.classList.add("about-active");
//       contactSection.classList.remove("contact-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navSkills.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "Home";
//       nextButtonText.textContent = "Skills";
//     }, 3000);
//   }
// });

// navSkills.addEventListener("click", () => {
//   if (keyCounterForSmallScreen === 0) {
//     mainContainer.classList.add("main-active");
//     balloonOne.classList.add("balloon-dark");
//     balloonTwo.classList.add("balloon-dark");
//     homeSection.classList.add("home-deactive");
//     nextPageButton.style.display = "none";
//     keyCounterForSmallScreen = 2;
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navSkills.style.color = "#ffff00";
//       skillSection.classList.add("skills-active");
//       homeSection.classList.remove("home-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navAbout.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "About";
//       nextButtonText.textContent = "Projects";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 1) {
//     aboutSection.classList.add("about-deactive");
//     navAbout.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     keyCounterForSmallScreen = 2;
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navSkills.style.color = "#ffff00";
//       skillSection.classList.add("skills-active");
//       aboutSection.classList.remove("about-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navAbout.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "About";
//       nextButtonText.textContent = "Projects";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 3) {
//     worksSection.classList.add("works-deactive");
//     navWorks.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     keyCounterForSmallScreen = 2;
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navSkills.style.color = "#ffff00";
//       skillSection.classList.add("skills-active");
//       worksSection.classList.remove("works-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navAbout.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "About";
//       nextButtonText.textContent = "Projects";
//     }, 3000);
//   } else if (keyCounterForSmallScreen === 4) {
//     contactSection.classList.add("contact-deactive");
//     navContact.style.color = "#fff";
//     prevPageButton.style.display = "none";
//     nextPageButton.style.display = "none";
//     keyCounterForSmallScreen = 2;
//     setTimeout(() => {
//       prevPageButton.style.color = "#fff";
//       nextPageButton.style.color = "#fff";
//       navbarItems.style.color = "#fff";
//       navSkills.style.color = "#ffff00";
//       skillSection.classList.add("skills-active");
//       contactSection.classList.remove("contact-active");
//       prevPageButton.classList.remove("left-arrow");
//       prevPageButton.classList.add("left-arrow-active");
//       navAbout.style.color = "#fff";
//       navWorks.style.color = "#fff";
//       navContact.style.color = "#fff";
//       nextPageButton.style.display = "block";
//       prevPageButton.style.display = "block";
//       prevButtonText.textContent = "About";
//       nextButtonText.textContent = "Projects";
//     }, 3000);
//   }
// });

"using strict";

// BUTTONS
const keyDownButton = document.querySelector(".key-down");
const prevPageButton = document.querySelector(".left-arrow");
const nextPageButton = document.querySelector(".right-arrow");

// SECTIONS //
const mainContainer = document.querySelector(".main-wrapper");
const homeSection = document.querySelector(".home");
const aboutSection = document.querySelector(".about");
const skillSection = document.querySelector(".skills");
const worksSection = document.querySelector(".works");
const contactSection = document.querySelector(".contact");

//ELEMENTS
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbarItems = document.querySelector(".navbar-items");
const closeNavButton = document.querySelector(".close-button");
const balloonOne = document.querySelector(".balloon1");
const balloonTwo = document.querySelector(".balloon2");
const prevButtonText = document.querySelector(".prev-text");
const nextButtonText = document.querySelector(".next-text");
const title = document.querySelector(".title");

//NAVBAR ELEMENTS
const navHome = document.querySelector(".nav-home");
const navAbout = document.querySelector(".nav-about");
const navSkills = document.querySelector(".nav-skills");
const navWorks = document.querySelector(".nav-works");
const navContact = document.querySelector(".nav-contact");

hamburgerMenu.addEventListener("click", () => {
  navbarItems.classList.add("navbar-items-active");
});

let keyCounter = 1;

nextPageButton.addEventListener("click", () => {
  keyCounter = keyCounter + 1;
  if (keyCounter > 5) {
    keyCounter = 1;
  }
  console.log(keyCounter);
  if (keyCounter === 1) {
    console.log("This is homepage");
    navbarItemDeactive(navContact);
    removeNavStyleAttribute(navContact);
    hideLeftArrow();
    hideArrows(prevPageButton, nextPageButton);
    arrowTexts("", "About");
    sectionActive(contactSection, "contact-deactive");
    setTimeout(() => {
      removeSectionDeactive(mainContainer, "main-active");
      removeSectionDeactive(balloonOne, "balloon-dark");
      removeSectionDeactive(balloonTwo, "balloon-dark");
      removeSectionDeactive(contactSection, "contact-active");
      removeSectionDeactive(homeSection, "home-deactive");
      navbarToBlack();
      showArrows(prevPageButton, nextPageButton);
      arrowColorToBlack(prevPageButton, nextPageButton);
      removeSectionDeactive(contactSection, "contact-active");
      removeSectionDeactive(contactSection, "contact-deactive");
    }, 3000);
  } else if (keyCounter === 2) {
    console.log("this is about page");
    navbarToWhite();
    arrowColorToWhite(prevPageButton, nextPageButton);
    hideArrows(prevPageButton, nextPageButton);
    arrowTexts("Home", "Skills");
    sectionActive(mainContainer, "main-active");
    sectionActive(balloonOne, "balloon-dark");
    sectionActive(balloonTwo, "balloon-dark");
    sectionActive(homeSection, "home-deactive");
    setTimeout(() => {
      navbarItemActive(navAbout);
      showLeftArrow();
      showArrows(prevPageButton, nextPageButton);
      sectionActive(aboutSection, "about-active");
    }, 3000);
  } else if (keyCounter === 3) {
    console.log("this is skills page");
    navbarItemDeactive(navAbout);
    hideArrows(prevPageButton, nextPageButton);
    removeNavStyleAttribute(navAbout);
    arrowColorToWhite(prevPageButton, nextPageButton);
    arrowTexts("About", "Projects");
    sectionActive(aboutSection, "about-deactive");
    setTimeout(() => {
      navbarItemActive(navSkills);
      showLeftArrow();
      showArrows(prevPageButton, nextPageButton);
      sectionActive(skillSection, "skills-active");
      removeSectionDeactive(aboutSection, "about-active");
      removeSectionDeactive(aboutSection, "about-deactive");
    }, 3000);
  } else if (keyCounter === 4) {
    console.log("this is projects page");
    navbarItemDeactive(navSkills);
    hideArrows(prevPageButton, nextPageButton);
    removeNavStyleAttribute(navSkills);
    arrowColorToWhite(prevPageButton, nextPageButton);
    arrowTexts("Skills", "Contact");
    sectionActive(skillSection, "skills-deactive");
    setTimeout(() => {
      navbarItemActive(navWorks);
      showLeftArrow();
      showArrows(prevPageButton, nextPageButton);
      removeSectionDeactive(skillSection, "skills-active");
      sectionActive(worksSection, "works-active");
      removeSectionDeactive(skillSection, "skills-active");
      removeSectionDeactive(skillSection, "skills-deactive");
    }, 3000);
  } else if (keyCounter === 5) {
    console.log("this is contact page");
    navbarItemDeactive(navWorks);
    hideArrows(prevPageButton, nextPageButton);
    removeNavStyleAttribute(navWorks);
    arrowColorToWhite(prevPageButton, nextPageButton);
    arrowTexts("Projects", "Home");
    sectionActive(worksSection, "works-deactive");
    setTimeout(() => {
      navbarItemActive(navContact);
      showLeftArrow();
      showArrows(prevPageButton, nextPageButton);
      removeSectionDeactive(worksSection, "works-active");
      sectionActive(contactSection, "contact-active");
      removeSectionDeactive(worksSection, "works-active");
      removeSectionDeactive(worksSection, "works-deactive");
    }, 3000);
  }
});

prevPageButton.addEventListener("click", () => {
  keyCounter = keyCounter - 1;
  if (keyCounter < 1) {
    keyCounter = 1;
  }
  if (keyCounter === 1) {
    console.log("This is homepage" + keyCounter);
    navbarItemDeactive(navAbout);
    removeNavStyleAttribute(navAbout);
    hideLeftArrow();
    arrowTexts("", "About");
    sectionActive(aboutSection, "about-deactive");
    setTimeout(() => {
      arrowColorToBlack(prevPageButton, nextPageButton);
      navbarToBlack();
      removeSectionDeactive(aboutSection, "about-active");
      removeSectionDeactive(aboutSection, "about-deactive");
      removeSectionDeactive(mainContainer, "main-active");
      removeSectionDeactive(balloonOne, "balloon-dark");
      removeSectionDeactive(balloonTwo, "balloon-dark");
      removeSectionDeactive(contactSection, "contact-active");
      removeSectionDeactive(homeSection, "home-deactive");
    }, 3000);
  } else if (keyCounter === 2) {
    console.log("this is about page");
    navbarItemDeactive(navSkills);
    removeNavStyleAttribute(navSkills);
    navbarToWhite();
    arrowColorToWhite(prevPageButton, nextPageButton);
    showLeftArrow();
    arrowTexts("Home", "Skills");
    sectionActive(skillSection, "skills-deactive");
    hideArrows(prevPageButton, nextPageButton);
    setTimeout(() => {
      navbarItemActive(navAbout);
      removeSectionDeactive(skillSection, "skills-active");
      removeSectionDeactive(skillSection, "skills-deactive");
      sectionActive(aboutSection, "about-active");
      showArrows(prevPageButton, nextPageButton);
    }, 3000);
  } else if (keyCounter === 3) {
    console.log("this is skills page");
    navbarItemDeactive(navWorks);
    removeNavStyleAttribute(navWorks);
    navbarToWhite();
    arrowColorToWhite(prevPageButton, nextPageButton);
    showLeftArrow();
    arrowTexts("About", "Projects");
    sectionActive(worksSection, "works-deactive");
    hideArrows(prevPageButton, nextPageButton);
    setTimeout(() => {
      navbarItemActive(navSkills);
      removeSectionDeactive(worksSection, "works-active");
      removeSectionDeactive(worksSection, "works-deactive");
      sectionActive(skillSection, "skills-active");
      showArrows(prevPageButton, nextPageButton);
    }, 3000);
  } else if (keyCounter === 4) {
    console.log("this is project page");
    navbarItemActive(navWorks);
    navbarItemDeactive(navContact);
    removeNavStyleAttribute(navContact);
    navbarToWhite();
    arrowColorToWhite(prevPageButton, nextPageButton);
    showLeftArrow();
    arrowTexts("Projects", "Home");
    sectionActive(contactSection, "contact-deactive");
    hideArrows(prevPageButton, nextPageButton);
    setTimeout(() => {
      navbarItemActive(navWorks);
      removeSectionDeactive(contactSection, "contact-active");
      removeSectionDeactive(contactSection, "contact-deactive");
      sectionActive(worksSection, "works-active");
      showArrows(prevPageButton, nextPageButton);
    }, 3000);
  }
});

//!MAKE ACTIVE NAV ITEM YELLOW COLOR
const navbarItemActive = (navItem) => {
  navItem.style.color = "#ffff00";
};

//! CHANGE NAV ITEM TO WHITE COLOR
const navbarItemDeactive = (navItem) => {
  navItem.style.color = "#fff";
};

const navbarToWhite = () => {
  navbarItems.classList.add("navbar-items-to-white");
};

const navbarToBlack = () => {
  navbarItems.classList.remove("navbar-items-to-white");
};

const removeNavStyleAttribute = (navItem) => {
  navItem.removeAttribute("style");
};

//ARROWS
const arrowColorToWhite = (leftArrow, rightArrow) => {
  leftArrow.classList.add("left-arrow-hoverEffect");
  rightArrow.classList.add("right-arrow-hoverEffect");
};
const arrowColorToBlack = (leftArrow, rightArrow) => {
  leftArrow.classList.remove("left-arrow-hoverEffect");
  rightArrow.classList.remove("right-arrow-hoverEffect");
};

const arrowTexts = (leftArrowText, rightArrowText) => {
  prevButtonText.textContent = leftArrowText;
  nextButtonText.textContent = rightArrowText;
};

//! IF USER IN THE HOMEPAGE, DON'T SHOW LEFT ARROW
const hideLeftArrow = () => {
  prevPageButton.classList.remove("left-arrow-active");
};

const showLeftArrow = () => {
  prevPageButton.classList.add("left-arrow-active");
};

const hideArrows = (leftArrow, rightArrow) => {
  leftArrow.style.display = "none";
  rightArrow.style.display = "none";
};

const showArrows = (leftArrow, rightArrow) => {
  leftArrow.style.display = "block";
  rightArrow.style.display = "block";
};

//ADD ACTIVE-DEACTIVE CLASS
const sectionActive = (section, active) => {
  section.classList.add(active);
};
const sectionDeactive = (section, deactive) => {
  section.classList.add(deactive);
};
const removeSectionDeactive = (section, className) => {
  section.classList.remove(className);
};

navHome.addEventListener("click", () => {
  if (keyCounter === 2) {
    sectionActive(aboutSection, "about-deactive");
    navbarItemDeactive(navAbout);
    removeNavStyleAttribute(navAbout);
    setTimeout(() => {
      keyCounter = 1;
      removeSectionDeactive(aboutSection, "about-active");
      removeSectionDeactive(aboutSection, "about-deactive");
      arrowColorToBlack(prevPageButton, nextPageButton);
      navbarToBlack();
      hideLeftArrow();
      nextButtonText.textContent = "About";
      removeSectionDeactive(aboutSection, "about-active");
      removeSectionDeactive(aboutSection, "about-deactive");
      removeSectionDeactive(mainContainer, "main-active");
      removeSectionDeactive(balloonOne, "balloon-dark");
      removeSectionDeactive(balloonTwo, "balloon-dark");
      removeSectionDeactive(contactSection, "contact-active");
      removeSectionDeactive(homeSection, "home-deactive");
    }, 3000);
  }
});
navAbout.addEventListener("click", () => {
  console.log(`This is about and page ${keyCounter}`);
  navClickedPageOne(
    2,
    navAbout,
    "Home",
    "Skills",
    aboutSection,
    "about-active"
  );
  navClickedThree(2, navAbout, "Home", "Skills", aboutSection, "about-active");
  navClickedFour(2, navAbout, "Home", "Skills", aboutSection, "about-active");
  navClickedFive(2, navAbout, "Home", "Skills", aboutSection, "about-active");
});
navSkills.addEventListener("click", () => {
  console.log(`This is skills and page ${keyCounter}`);
  navClickedPageOne(
    3,
    navSkills,
    "About",
    "Projects",
    skillSection,
    "skills-active"
  );
  navClickedTwo(
    3,
    navSkills,
    "About",
    "Projects",
    skillSection,
    "skills-active"
  );
  navClickedFour(
    3,
    navSkills,
    "About",
    "Projects",
    skillSection,
    "skills-active"
  );
  navClickedFive(
    3,
    navSkills,
    "About",
    "Projects",
    skillSection,
    "skills-active"
  );
});
navWorks.addEventListener("click", () => {
  console.log(`This is works and page ${keyCounter}`);
  navClickedPageOne(
    4,
    navWorks,
    "Skills",
    "Contact",
    worksSection,
    "works-active"
  );
  navClickedTwo(4, navWorks, "Skills", "Contact", worksSection, "works-active");
  navClickedThree(
    4,
    navWorks,
    "Skills",
    "Contact",
    worksSection,
    "works-active"
  );
  navClickedFive(
    4,
    navWorks,
    "Skills",
    "Contact",
    worksSection,
    "works-active"
  );
});
navContact.addEventListener("click", () => {
  navClickedPageOne(
    5,
    navContact,
    "Projects",
    "Home",
    contactSection,
    "contact-active"
  );
  navClickedTwo(
    5,
    navContact,
    "Projects",
    "Home",
    contactSection,
    "contact-active"
  );
  navClickedThree(
    5,
    navContact,
    "Projects",
    "Home",
    contactSection,
    "contact-active"
  );
  navClickedFour(
    5,
    navContact,
    "Projects",
    "Home",
    contactSection,
    "contact-active"
  );
});

const navClickedPageOne = (
  pageNumber,
  navActive,
  prevText,
  nextText,
  section,
  activeOne
) => {
  if (keyCounter === 1) {
    sectionActive(mainContainer, "main-active");
    sectionActive(balloonOne, "balloon-dark");
    sectionActive(balloonTwo, "balloon-dark");
    sectionActive(homeSection, "home-deactive");
    nextPageButton.style.display = "none";
    setTimeout(() => {
      keyCounter = pageNumber;
      navbarToWhite();
      showLeftArrow();
      navbarItemActive(navActive);
      prevPageButton.style.display = "block";
      nextPageButton.style.display = "block";
      arrowColorToWhite(prevPageButton, nextPageButton);
      arrowTexts(prevText, nextText);
      sectionActive(section, activeOne);
    }, 3000);
  }
};

const navClickedTwo = (
  pageNumber,
  navActive,
  prevText,
  nextText,
  section,
  activeOne
) => {
  if (keyCounter === 2) {
    sectionActive(aboutSection, "about-deactive");
    navbarItemDeactive(navAbout);
    removeNavStyleAttribute(navAbout);
    setTimeout(() => {
      keyCounter = pageNumber;
      navbarToWhite();
      showLeftArrow();
      navbarItemActive(navActive);
      prevPageButton.style.display = "block";
      nextPageButton.style.display = "block";
      arrowColorToWhite(prevPageButton, nextPageButton);
      arrowTexts(prevText, nextText);
      sectionActive(section, activeOne);
      removeSectionDeactive(aboutSection, "about-active");
      removeSectionDeactive(aboutSection, "about-deactive");
    }, 3000);
  }
};

const navClickedThree = (
  pageNumber,
  navActive,
  prevText,
  nextText,
  section,
  activeOne
) => {
  if (keyCounter === 3) {
    sectionActive(skillSection, "skills-deactive");
    navbarItemDeactive(navSkills);
    removeNavStyleAttribute(navSkills);
    setTimeout(() => {
      keyCounter = pageNumber;
      navbarToWhite();
      showLeftArrow();
      navbarItemActive(navActive);
      prevPageButton.style.display = "block";
      nextPageButton.style.display = "block";
      arrowColorToWhite(prevPageButton, nextPageButton);
      arrowTexts(prevText, nextText);
      sectionActive(section, activeOne);
      removeSectionDeactive(skillSection, "skills-active");
      removeSectionDeactive(skillSection, "skills-deactive");
    }, 3000);
  }
};

const navClickedFour = (
  pageNumber,
  navActive,
  prevText,
  nextText,
  section,
  activeOne
) => {
  if (keyCounter === 4) {
    sectionActive(worksSection, "works-deactive");
    navbarItemDeactive(navWorks);
    removeNavStyleAttribute(navWorks);
    setTimeout(() => {
      keyCounter = pageNumber;
      navbarToWhite();
      showLeftArrow();
      navbarItemActive(navActive);
      prevPageButton.style.display = "block";
      nextPageButton.style.display = "block";
      arrowColorToWhite(prevPageButton, nextPageButton);
      arrowTexts(prevText, nextText);
      sectionActive(section, activeOne);
      removeSectionDeactive(worksSection, "works-active");
      removeSectionDeactive(worksSection, "works-deactive");
    }, 3000);
  }
};

const navClickedFive = (
  pageNumber,
  navActive,
  prevText,
  nextText,
  section,
  activeOne
) => {
  if (keyCounter === 5) {
    sectionActive(contactSection, "contact-deactive");
    navbarItemDeactive(navContact);
    removeNavStyleAttribute(navContact);
    setTimeout(() => {
      keyCounter = pageNumber;
      navbarToWhite();
      showLeftArrow();
      navbarItemActive(navActive);
      prevPageButton.style.display = "block";
      nextPageButton.style.display = "block";
      arrowColorToWhite(prevPageButton, nextPageButton);
      arrowTexts(prevText, nextText);
      sectionActive(section, activeOne);
      removeSectionDeactive(contactSection, "contact-active");
      removeSectionDeactive(contactSection, "contact-deactive");
    }, 3000);
  }
};

const returnHome = (
  activeSection,
  disableActiveClass,
  removeActiveClass,
  removeDeactiveClass
) => {
  sectionActive(contactSection, "contact-deactive");
  navbarItemDeactive(navContact);
  removeNavStyleAttribute(navContact);
  setTimeout(() => {
    keyCounter = pageNumber;
    navbarToWhite();
    showLeftArrow();
    navbarItemActive(navActive);
    prevPageButton.style.display = "block";
    nextPageButton.style.display = "block";
    arrowColorToWhite(prevPageButton, nextPageButton);
    arrowTexts(prevText, nextText);
    sectionActive(section, activeOne);
    removeSectionDeactive(contactSection, "contact-active");
    removeSectionDeactive(contactSection, "contact-deactive");
  }, 3000);
};
