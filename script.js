const formData = {
  fullName: "",
  email: "",
  message: "",
};
const projects = [
  {
    projectId: 1,
    projectTitle: "Multi-Post one",
    description:
      "A daily selection of privately personalized reads; no accounts or" +
      "sign-ups required. has been the industry's standard dummy text ever" +
      "since the 1500s, when an unknown printer took a standard dummy text.",
    image: "Images/projectOne.png",
    technologies: ["html", "css", "ruby"],
    livelink: "www.google.com",
    soruceLink: "wwww.google.com",
  },
  {
    projectId: 2,
    projectTitle: "Multi-Post two",
    description:
      "A daily selection of privately personalized reads; no accounts or" +
      "sign-ups required. has been the industry's standard dummy text ever" +
      "since the 1500s, when an unknown printer took a standard dummy text.",
    image: "Images/projectOne.png",
    technologies: ["html", "css", "ruby"],
    livelink: "www.google.com",
    soruceLink: "wwww.google.com",
  },
  {
    projectId: 3,
    projectTitle: "Multi-Post three",
    description:
      "A daily selection of privately personalized reads; no accounts or" +
      "sign-ups required. has been the industry's standard dummy text ever" +
      "since the 1500s, when an unknown printer took a standard dummy text.",
    image: "Images/projectOne.png",
    technologies: ["html", "css", "ruby"],
    livelink: "www.google.com",
    soruceLink: "wwww.google.com",
  },
  {
    projectId: 4,
    projectTitle: "Multi-Post Four",
    description:
      "A daily selection of privately personalized reads; no accounts or" +
      "sign-ups required. has been the industry's standard dummy text ever" +
      "since the 1500s, when an unknown printer took a standard dummy text.",
    image: "Images/projectOne.png",
    technologies: ["html", "css", "ruby"],
    livelink: "www.google.com",
    soruceLink: "wwww.google.com",
  },
];
function GetTechnologyListHtmlContent(project) {
  let technology = "";
  project.technologies.forEach((item) => {
    technology += `<li class="listseparator">${item}</li>`;
  });
  return technology;
}
function GenerateCardContent(project) {
  const technology = GetTechnologyListHtmlContent(project);
  let result = `<li class="workCard" id="first">\
 <div class="image_container"><img src="${project.image}" alt="projectone"></div>\
 <div class="projectdetail">\
     <h3>${project.projectTitle}</h3>\
     <p> ${project.description}</p>\
     <ul class="workTechs"> ${technology}</ul>\
     <button data-id ="${project.projectId}"class="seebutton transition_button seedetail" type="submit">See project</button>\
 </div>\
</li>`;
  if (project.projectId % 2 === 0) {
    result = result.replace(
      'class="workCard"',
      'class="workCard odd" id="secondcard"'
    );
  }
  return result;
}
function GenerateModalContent(project) {
  const technology = GetTechnologyListHtmlContent(project);
  const modalContent = `
      <div class="modal-body-img">\
      <img src="Images/snap.png" alt="">\
      </div>\
      <p class="modal-body-detail"> ${project.description} </p>\
      <ul class="modal-body-technologies">${technology}</ul>\
      <div class="modal-body-actions">\
          <button>\
              <span>See live</span>\
              <img src="Images/icons/seelive.png" alt="see project live">\
          </button>\
          <button>\
              <span>See Source</span>\
              <img src="Images/icons/seesource.png" alt="see project source code">\
          </button></div>\
  `;
  return modalContent;
}
function AddProjects() {
  let htmlContent = "";
  const projectContainer = document.querySelector(".works");
  projects.forEach((project) => {
    htmlContent += GenerateCardContent(project);
  });
  projectContainer.innerHTML = htmlContent;
}

function CloseModal() {
  const modal = document.querySelector(".modal");
  const modalBody = document.querySelector(".modal-body");
  const modalTitle = document.querySelector(".modal-title");
  modalBody.innerHTML = "";
  modalTitle.innerHTML = "";
  modal.classList.add("hidden");
}
function OpenMobileMenu() {
  const mobileMenu = document.querySelector("#modile_nav");
  const main = document.querySelector("main");
  mobileMenu.classList.remove("show_hide");
  main.classList.add("hidden");
}
function CloseMobileMenu() {
  const mobileMenu = document.querySelector("#modile_nav");
  mobileMenu.classList.add("show_hide");
  const main = document.querySelector("main");
  main.classList.remove("hidden");
}
function GetProjectDetail() {
  const projectId = this.getAttribute("data-id");
  const project = projects.find((e) => e.projectId === parseInt(projectId, 10));
  const bodyContent = GenerateModalContent(project);
  const modal = document.querySelector(".modal");
  const modalBody = document.querySelector(".modal-body");
  const modalTitle = document.querySelector(".modal-title");
  modalBody.innerHTML = bodyContent;
  modalTitle.innerHTML = project.projectTitle;
  modal.classList.remove("hidden");
}
function ShowErrorMessage(message) {
  const errormessage = document.querySelector(".error-message");
  errormessage.innerHTML = message;
}
function OnSubmit(event) {
  const contactUsForm = document.querySelector(".contactusform");
  const email = contactUsForm.elements.email.value;
  if (email !== email.toLowerCase()) {
    ShowErrorMessage(
      `*Please use lower-case letters for your email. <span class='white'> (${email.toLowerCase()})</span>`
    );
    event.preventDefault();
  }
}
function StoreDataOnLocalStorage(key, value) {
  localStorage.setItem(key, value);  
}
function GetDatafromLocalStorage(key, value) {
  return localStorage.getItem(key);
}
function UpdateFormDataStorage() {
  const formInputs = document.querySelectorAll(".formdata");
  formData.fullName = formInputs[0].value;
  formData.email = formInputs[1].value;
  formData.message = formInputs[2].value;
  var data = JSON.stringify(formData);
  StoreDataOnLocalStorage("formData", data);
}
function GetFormData() {
  var storedData = GetDatafromLocalStorage("formData");
  const formInputs = document.querySelectorAll(".formdata");
  var data = JSON.parse(storedData);
  formInputs[0].value= data.fullName;
  formInputs[1].value= data.email;
  formInputs[2].innerHTML= data.message;
}
document.addEventListener("DOMContentLoaded", () => {
  AddProjects();
  GetFormData();
  const openMenuElement = document.querySelector("#open_mobile_humberger");
  const closeMenuElement = document.querySelector("#close_mobile_humberger");
  const menuItems = document.querySelectorAll(".mobile_nav_items");
  const others = document.querySelector(".mobile_nav");
  const detailProjectbuttons = document.querySelectorAll(".seedetail");
  const closeModalButtons = document.querySelectorAll(".modal-close");
  const contactUsForm = document.querySelector(".contactusform");
  const formInputs = document.querySelectorAll(".formdata");

  contactUsForm.addEventListener("submit", OnSubmit);
  others.addEventListener("click", CloseMobileMenu);
  openMenuElement.addEventListener("click", OpenMobileMenu);
  closeMenuElement.addEventListener("click", CloseMobileMenu);
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", CloseMobileMenu);
  });
  detailProjectbuttons.forEach((getdetail) => {
    getdetail.addEventListener("click", GetProjectDetail);
  });
  closeModalButtons.forEach((close) => {
    close.addEventListener("click", CloseModal);
  });
  formInputs.forEach((formInput) => {
    formInput.addEventListener("change", UpdateFormDataStorage);
  });
});
