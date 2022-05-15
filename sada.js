// let keyCounter = 1;

// document.addEventListener("keyup", (e) => {
//   console.log(e.key);
//   if (e.key === "ArrowDown" && keyCounter === 1) {
//     developerName.classList.add("developer-name-animation");
//     title.classList.add("title-animation");
//     aboutSection.classList.add("about-active");
//     keyCounter = keyCounter + 1;
//     setTimeout(() => {
//       developerName.style.display = "none";
//       title.style.display = "none";
//     }, 3000);
//   } else if (e.key === "ArrowDown" && keyCounter === 2) {
//     aboutSection.classList.add("about-deactive");
//     skillSection.classList.add("skills-active");
//     keyCounter = keyCounter + 1;
//     setTimeout(() => {
//       aboutSection.style.display = "none";
//     }, 3000);
//   } else if (e.key === "ArrowDown" && keyCounter === 3) {
//     skillSection.classList.add("skills-deactive");
//     projectsSection.classList.add("projects-active");
//     keyCounter = keyCounter + 1;
//     setTimeout(() => {
//       skillSection.style.display = "none";
//     }, 3000);
//   } else if (e.key === "ArrowDown" && keyCounter === 4) {
//     projectsSection.classList.add("projects-deactive");
//     contactSection.classList.add("contact-active");
//     setTimeout(() => {
//       projectsSection.style.display = "none";
//     }, 3000);
//   } else if (keyCounter > 4) {
//     return keyCounter === 4;
//   }
// });
