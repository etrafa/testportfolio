"using strict";

const mainWrapper = document.querySelector(".main-wrapper");

//SECTIONS
const homeSection = document.querySelector(".home");
const aboutSection = document.querySelector(".about");
const skillSection = document.querySelector(".skills");
const projectsSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");

//NAV ELEMENTS
const navAbout = document.querySelector(".nav-about");
const navSkills = document.querySelector(".nav-skills");
const navProjects = document.querySelector(".nav-projects");
const navContact = document.querySelector(".nav-contact");

//ELEMENTS
const developerName = document.querySelector(".developer-name");
const title = document.querySelector(".title");
const balloonOne = document.querySelector(".balloon1");
const balloonTwo = document.querySelector(".balloon2");
const prevButtonText = document.querySelector(".prev-text");
const nextButtonText = document.querySelector(".next-text");
const prevPageButton = document.querySelector(".left-arrow");
const nextPageButton = document.querySelector(".right-arrow");

//HIDE SECTIONS ONCLICK
const hideElements = (el1, el2, el3, el4, el5) => {
  el1.style.display = "block";
  el2.style.display = "none";
  el3.style.display = "none";
  el4.style.display = "none";
  el5.style.display = "none";
};

navAbout.addEventListener("click", () => {
  hideElements(
    aboutSection,
    skillSection,
    projectsSection,
    contactSection,
    homeSection
  );
});

navSkills.addEventListener("click", () => {
  hideElements(
    skillSection,
    aboutSection,
    projectsSection,
    contactSection,
    homeSection
  );
});
navProjects.addEventListener("click", () => {
  hideElements(
    projectsSection,
    aboutSection,
    skillSection,
    contactSection,
    homeSection
  );
});
navContact.addEventListener("click", () => {
  hideElements(
    contactSection,
    aboutSection,
    skillSection,
    projectsSection,
    homeSection
  );
});

let page = 0;

nextPageButton.addEventListener("click", () => {
  page += 1;
  if (page >= 5) {
    page = 0;
  }
  navContact.style.color = "#fff";

  if (page === 0) {
    hideElements(
      homeSection,
      aboutSection,
      skillSection,
      projectsSection,
      contactSection
    );
  } else if (page === 1) {
    nextButtonText.textContent = "Skills";
    mainWrapper.classList.add("main-active");
    developerName.classList.add("developer-name-animation");
    title.classList.add("title-animation");
    balloonOne.classList.add("balloon-dark");
    balloonTwo.classList.add("balloon-dark");
    navAbout.style.color = "#e96f92";
    navAbout.style.borderBottom = "1px solid #e96f92";
    navSkills.style.color = "#fff";
    navProjects.style.color = "#fff";
    navContact.style.color = "#fff";
    nextPageButton.style.color = "#fff";
    prevPageButton.style.color = "#fff";
    setTimeout(() => {
      hideElements(
        aboutSection,
        homeSection,
        skillSection,
        projectsSection,
        contactSection
      );
      aboutSection.classList.add("about-active");
    }, 3000);
  } else if (page === 2) {
    nextButtonText.textContent = "Projects";
    aboutSection.classList.add("about-deactive");
    navSkills.style.color = "#e96f92";
    navSkills.style.borderBottom = "1px solid #e96f92";
    navAbout.style.color = "#fff";
    navAbout.style.border = "none";
    setTimeout(() => {
      hideElements(
        skillSection,
        aboutSection,
        homeSection,
        projectsSection,
        contactSection
      );
      skillSection.classList.add("skills-active");
    }, 3000);
  } else if (page === 3) {
    nextButtonText.textContent = "Contact";
    skillSection.classList.add("skills-deactive");
    navSkills.style.color = "#fff";
    navSkills.style.border = "none";
    navProjects.style.color = "#e96f92";
    navProjects.style.borderBottom = "1px solid #e96f92";
    setTimeout(() => {
      hideElements(
        projectsSection,
        homeSection,
        aboutSection,
        skillSection,
        contactSection
      );
      projectsSection.classList.add("project-active");
    }, 3000);
  } else if (page === 4) {
    nextButtonText.textContent = "Home";
    projectsSection.classList.add("projects-deactive");
    navContact.style.color = "#e96f92";
    navContact.style.borderBottom = "1px solid #e96f92";
    navProjects.style.color = "#fff";
    navProjects.style.border = "none";
    setTimeout(() => {
      hideElements(
        contactSection,
        homeSection,
        aboutSection,
        skillSection,
        projectsSection
      );
      contactSection.classList.add("contact-active");
    }, 3000);
  }
});

prevPageButton.addEventListener("click", () => {
  page -= 1;
  if (page <= 0) {
    page = 0;
  }
  if (page === 0) {
    hideElements(
      homeSection,
      aboutSection,
      skillSection,
      projectsSection,
      contactSection
    );
  } else if (page === 1) {
    hideElements(
      aboutSection,
      homeSection,
      skillSection,
      projectsSection,
      contactSection
    );
  } else if (page === 2) {
    hideElements(
      skillSection,
      aboutSection,
      homeSection,
      projectsSection,
      contactSection
    );
  } else if (page === 3) {
    hideElements(
      projectsSection,
      homeSection,
      aboutSection,
      skillSection,
      contactSection
    );
  } else if (page === 4) {
    hideElements(
      contactSection,
      homeSection,
      aboutSection,
      skillSection,
      projectsSection
    );
  }
});
