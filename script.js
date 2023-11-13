function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const translations = {
  en: {
    portfolioTitle: "My Portfolio",
    logo: "Olivia Luciano",
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    hello: "Hello, I'm",
    name: "Olivia Luciano",
    role: "Full-stack Web Developer <br /> Salesforce Admin",
    downloadCv: "Download CV",
    contactInfo: "Contact Info",
    linkedinProfile: "https://linkedin.com/in/olivialuciano",
    githubProfile: "https://github.com/olivialuciano",
    aboutTitle: "About Me",
    aboutDescription:
      "Hi, I'm Oli, an advanced student (60%) in the University Degree in Programming and Salesforce Administrator. I have an intermediate/advanced level of English (B2 First certified). I am responsible, organized, and collaborative. Currently, I am working as an intern in the systems area at Avalian as a Salesforce administrator.",
    experienceTitle: "Work Experience",
    jobDetails:
      "I am doing an internship as a Salesforce administrator. I accompany and collaborate in the implementation of the system. I conduct requirements surveys. I analyze the collected information and propose development solutions. I perform manual testing. I analyze the impact of Salesforce version updates on the organization. I handle Salesforce metadata. I use Dataloader for bulk data handling.",
    educationTitle: "Education",
    educationDetails:
      "University Austral <br> University Degree in Programming <br /> March 2022 - Present",
    highSchoolDetails:
      "San Bartolomé School - bilingual school (double shift) <br> Bachelor in Social Sciences <br /> 2016 - 2020",
    salesforceCertificationDetails:
      "Salesforce Talent Alliance Career Cohorts - Salesforce and Deloitte latam <br> Salesforce Administrator <br /> April 2023 - August 2023",
    certificationsTitle: "Certifications",
    salesforceCertification:
      "Salesforce Associate Certification <br> Salesforce - June 2023",
    englishCertification:
      "First Certificate in English <br> Cambridge - December 2018",
    skillsTitle: "Skills",
    pythonSkills: "• Python | .NET Core (C#) | Spring Boot (Java) | REST API",
    webSkills:
      "• Angular (ts) | React (js) | Javascript | Typescript | HTML | CSS",
    databaseSkills: "• Relational database design | SQL",
    devOpsSkills: "• Linux (Ubuntu) | Bash | Docker",
    versionControlSkills: "• Git | Github | Bitbucket | Sourcetree",
    agileSkills: "• Agile methodologies (Scrum and Kanban) | Jira",
    salesforceSkills: "• Salesforce",
  },
  es: {
    portfolioTitle: "Mi Portafolio",
    logo: "Olivia Luciano",
    about: "Acerca de",
    experience: "Experiencia",
    education: "Educación",
    projects: "Proyectos",
    contact: "Contacto",
    hello: "Hola, soy",
    name: "Olivia Luciano",
    role: "Desarrolladora Web Full-stack Administradora de Salesforce",
    downloadCv: "Descargar CV",
    contactInfo: "Info de Contacto",
    linkedinProfile: "https://linkedin.com/in/olivialuciano",
    githubProfile: "https://github.com/olivialuciano",
    aboutTitle: "Sobre mí",
    aboutDescription:
      "Hola, soy Oli, estudiante avanzada (60%) de la Tecnicatura Universitaria en Programación y Administradora de Salesforce. Tengo un nivel intermedio/avanzado de inglés (certificado B2 First). Soy responsable, organizada y colaborativa. Actualmente me encuentro trabajando de pasante en el área de sistemas en Avalian como administradora de Salesforce.",
    experienceTitle: "Experiencia Laboral",
    jobDetails:
      "Estoy realizando pasantía como administradora de Salesforce. Acompaño y colaboro en la implementación del sistema. Realizo relevamientos de requerimientos. Analizo la información relevada y planteo soluciones de desarrollo. Realizo testeos manuales. Analizo sobre el impacto de las actualizaciones de versiones de Salesforce en la organización. Manejo metadata de Salesforce. Utilizo dataloader para manejo masivo de datos.",
    educationTitle: "Educación",
    educationDetails:
      "Universidad Austral <br> Tecnicatura Universitaria en Programación <br /> Marzo 2022 - Actualidad",
    highSchoolDetails:
      "Colegio San Bartolomé - colegio bilingüe (doble escolaridad)<br> Bachiller en ciencias sociales<br /> 2016 - 2020",
    salesforceCertificationDetails:
      "Salesforce Talent Alliance Career Cohorts - Salesforce y Deloitte latam<br> Salesforce Administrator <br /> Abril 2023 - Agosto 2023",
    certificationsTitle: "Certificaciones",
    salesforceCertification:
      "Salesforce Associate Certification <br> Salesforce - Junio 2023",
    englishCertification:
      "First Certificate in English <br> Cambridge - Diciembre 2018",
    skillsTitle: "Habilidades",
    pythonSkills: "• Python | .NET Core (C#) | Spring Boot (Java) | API REST",
    webSkills:
      "• Angular (ts) | React (js) | Javascript | Typescript | HTML | CSS",
    databaseSkills: "• Diseño de bases de datos relacionales | SQL",
    devOpsSkills: "• Linux (Ubuntu) | Bash | Docker",
    versionControlSkills: "• Git | Github | Bitbucket | Sourcetree",
    agileSkills: "• Metodologías ágiles (Scrum y Kanban) | Jira",
    salesforceSkills: "• Salesforce",
  },
};

let currentLanguage = "en"; // Inglés por defecto, puedes cambiar a 'es' para español

function toggleLanguage() {
  // Cambiar entre 'en' (inglés) y 'es' (español)
  currentLanguage = currentLanguage === "en" ? "es" : "en";

  // Obtener todos los elementos que tienen atributo 'data-translate'
  const elementsToTranslate = document.querySelectorAll("[data-translate]");

  // Actualizar el texto de los elementos según el idioma actual
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage][key]) {
      element.innerText = translations[currentLanguage][key];
    }
  });
}

// Llama a toggleLanguage al cargar la página para establecer el idioma inicial
toggleLanguage();
