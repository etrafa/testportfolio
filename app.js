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

let keyCounter = 1;

document.addEventListener("keyup", (e) => {
  console.log(e.key);
  if (e.key === "ArrowDown" && keyCounter === 1) {
    developerName.classList.add("developer-name-animation");
    title.classList.add("title-animation");
    aboutSection.classList.add("about-active");
    keyCounter = keyCounter + 1;
    setTimeout(() => {
      developerName.style.display = "none";
      title.style.display = "none";
    }, 3000);
  } else if (e.key === "ArrowDown" && keyCounter === 2) {
    aboutSection.classList.add("about-deactive");
    skillSection.classList.add("skills-active");
    keyCounter = keyCounter + 1;
    setTimeout(() => {
      aboutSection.style.display = "none";
    }, 3000);
  } else if (e.key === "ArrowDown" && keyCounter === 3) {
    skillSection.classList.add("skills-deactive");
    projectsSection.classList.add("projects-active");
    keyCounter = keyCounter + 1;
    setTimeout(() => {
      skillSection.style.display = "none";
    }, 3000);
  } else if (e.key === "ArrowDown" && keyCounter === 4) {
    projectsSection.classList.add("projects-deactive");
    contactSection.classList.add("contact-active");
    setTimeout(() => {
      projectsSection.style.display = "none";
    }, 3000);
  } else if (keyCounter > 4) {
    return keyCounter === 4;
  }
});

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

const prevPage = document.querySelector(".left-arrow");
const nextPage = document.querySelector(".right-arrow");

let page = 0;

nextPage.addEventListener("click", () => {
  page += 1;
  if (page >= 5) {
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

prevPage.addEventListener("click", () => {
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
