function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const translations = {
  en: {
    enes: "ES",
    portfolioTitle: "My Portfolio",
    toggleLanguage: "Toggle Language",
    desarrolladora: "Full-stack Web Developer",
    aboutMe: "About Me",
    aboutMe1:
      "Hello! My name is Olivia, I'm 20 years old, and I'm from Argentina.",
    aboutMe2:
      "Currently, I am an advanced student in the University Technician Program in Programming at Universidad Austral and work as a Salesforce Administrator. ",
    aboutMe3:
      "My native language is Spanish. I have an intermediate/advanced level of English, enabling me to communicate both in writing and orally with people from around the world. ",
    aboutMe4:
      "I am characterized by being a responsible, organized, and collaborative individual. Currently, I am part of Avalian as an intern in the systems department, where I serve as a Salesforce Administrator.",
    experience: "Experience",
    experiencieAv: "Systems Development. August 2023 - Present.",
    experience1:
      "I am doing an internship as a Salesforce administrator, supporting and collaborating in the system implementation. I conduct requirements surveys, analyze the gathered information, and propose development solutions. I perform manual testing and analyze the impact of Salesforce version updates on the organization. I handle Salesforce metadata and use Dataloader for bulk data management.",
    education: "Education",
    contact: "Contact",
    downloadCV: "Download CV",
    contactInfo: "Contact Info",
    certifications: "Certifications",
    skills: "Skills",
    databases: "Databases",
    versionControl: "Version Control",
    projectManagement: "Project Management",
    other: "Other",
    university: "Austral University",
    title: "University Technician in Programming",
    ausDate: "March 2022 - Present",
    school: "San Bartolomé School - Bilingual School (double shift)",
    bachelor: "Bachelor in Social Studies",
    deloitte: "Salesforce and Deloitte LATAM",
    deloDate: "April 2023 - August 2023",
    salesforce: "Salesforce - June 2023",
    cambridge: "Cambridge - December 2018",
    contactMe: "Contact Me",
    skills: "Skills",
    agile: "• Agile Methodologies (Scrum and Kanban) | Jira",
    bdd: "• Database Design for Relational Databases | SQL",
  },
  es: {
    enes: "EN",
    portfolioTitle: "Mi Portafolio",
    toggleLanguage: "Cambiar Idioma",
    desarrolladora: "Desarrolladora Web Full-stack",
    aboutMe: "Sobre mí",
    aboutMe1: "¡Hola! Mi nombre es Olivia, tengo 20 años y soy de Argentina.",
    aboutMe2:
      "Actualmente, soy estudiante avanzada de la Tecnicatura Universitaria en Programación en la Universidad Austral, además de desempeñarme como Administradora de Salesforce.",
    aboutMe3:
      "Mi lengua nativa es el español. Poseo un nivel intermedio/avanzado en inglés, lo que me permite comunicarme tanto de manera escrita como oral con personas de todo el mundo.",
    aboutMe4:
      "Me destaco por ser una persona responsable, organizada y colaborativa. En la actualidad, formo parte de Avalian como pasante en el área de sistemas, donde ocupo el rol de administradora de Salesforce.  ",
    experience: "Experiencia",
    experiencieAv: "Adm. Desarrollo de Sistemas. Agosto 2023 - Actualidad",
    experience1:
      "Estoy realizando pasantía como administradora de Salesforce acompañando y colaborando en la implementación del sistema. Realizo relevamientos de requerimientos, analizo la información relevada y planteo soluciones de desarrollo. Realizo testeos manuales. Analizo sobre el impacto de las actualizaciones de versiones de Salesforce en la organización. Manejo metadata de Salesforce. Utilizo dataloader para manejo masivo de datos.",
    education: "Educación",
    contact: "Contacto",
    downloadCV: "Descargar CV",
    contactInfo: "Información de Contacto",
    certifications: "Certificaciones",
    skills: "Habilidades",
    databases: "Bases de datos",
    versionControl: "Controlador de versiones",
    projectManagement: "Gestión de proyectos",
    other: "Otros",
    university: "Universidad Austral",
    title: "Tecnicatura Universitaria en Programación",
    ausDate: "Marzo 2022 - Actualidad",
    school: "Colegio San Bartolomé - Colegio bilingüe (doble turno)",
    bachelor: "Bachiller en ciencias sociales",
    deloitte: "Salesforce y Deloitte LATAM",
    deloDate: "Abril 2023 - Agosto 2023",
    salesforce: "Salesforce - Junio 2023",
    cambridge: "Cambridge - Diciembre 2018",
    contactMe: "Contactame",
    skills: "Habilidades",
    agile: "• Metodologías ágiles (Scrum y Kanban) | Jira",
    bdd: "• Diseño de bases de datos relacionales | SQL",
  },
};

let currentLanguage = "en";

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage][key]) {
      element.innerText = translations[currentLanguage][key];
    }
  });
}

toggleLanguage();
