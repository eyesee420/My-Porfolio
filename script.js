function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "default.css";

  }

  if (mode === "blue") {
    document.getElementById("theme-style").href = "blue.css";

  }

  if (mode === "green") {
    document.getElementById("theme-style").href = "green.css";

  }

  if (mode === "purple") {
    document.getElementById("theme-style").href = "purple.css";

  }
  localStorage.setItem("theme", mode);
}

let theme = localStorage.getItem("theme");

// Fetching the theme from the local storage if available
if (theme) setTheme(theme);
else setTheme("light");

let themeDots = document.getElementsByClassName("theme-dot");

for (let theme = 0; themeDots.length > theme; theme++) {
    themeDots[theme].addEventListener("click", function () {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

class Project {
  constructor({
                projectName,
                projectDescription,
                projectImage,
                codeLink,
                demoLink
              }) {
    this.title = this.createHeadingTag({
      headingType: "h6",
      className: "post-title",
      text: projectName
    });

    this.description = this.createParaTag({
      className: "post-intro",
      text: projectDescription
    });

    this.demo = this.createAttributeTag({
      href: demoLink,
      text: "Live Demo"
    });

    this.code = this.createAttributeTag({
      href: codeLink,
      text: "Source Code"
    });

    this.projectImage = this.createImageTag({
      className: "thumbnail",
      src: projectImage,
      alt: projectName
    });

    this.sourceCodeDiv = this.createDiv({
      className: "source-code",
      childElements: [this.demo, this.code]
    });

    this.cardHeaderDiv = this.createDiv({
      className: "post-preview",
      childElements: [this.title, this.description, this.sourceCodeDiv]
    });

    this.cardComponent = this.createDiv({
      className: "post",
      childElements: [this.projectImage, this.cardHeaderDiv]
    });
  }

  createAttributeTag({ href = "", target = "_blank", text }) {
    const tagDocument = document.createElement("a");
    tagDocument.href = href;
    tagDocument.target = target;
    const tagTextElement = document.createTextNode(text);
    tagDocument.appendChild(tagTextElement);
    return tagDocument;
  }

  createParaTag({ className = null, text = "" }) {
    const paraElement = document.createElement("p");
    if (className) paraElement.className = className;

    const paraText = document.createTextNode(text);
    paraElement.appendChild(paraText);
    return paraElement;
  }

  createDiv({ className = null, childElements = [] }) {
    const divElement = document.createElement("div");
    if (className) divElement.className = className;
    childElements.forEach(element => {
      divElement.appendChild(element);
    });
    return divElement;
  }

  createHeadingTag({ headingType = "h1", className = null, text = "" }) {
    const headingTag = document.createElement(headingType);
    if (className) headingTag.className = className;
    const headingText = document.createTextNode(text);
    headingTag.appendChild(headingText);
    return headingTag;
  }

  createImageTag({ className = null, src = "", alt = "" }) {
    const imageTag = document.createElement("img");
    if (className) imageTag.className = className;
    imageTag.src = src;
    imageTag.alt = alt;
    return imageTag;
  }

  createProjectCard() {
    return this.cardComponent;
  }
}

const projects = [
{
    projectName: "event calendar",
    projectDescription: "Designed & Built Event Calendar Application using HTML CSS and JavaScript.",
    projectImage: "images/event-calendar.png",
    codeLink: "https://github.com/eyesee420/event-calendar.git",
    demoLink: "https://eyesee420.github.io/event-calendar/"
  },
  {
    projectName: "book tittles arrays",
    projectDescription:"book tittles arrays with clickable buttons and sorted, assorted and rewind",
    projectImage: "images/book titles.png",
    codeLink: "https://github.com/eyesee420/BOOKS-TITLES.git",
    demoLink: "https://eyesee420.github.io/BOOKS-TITLES/"
  },
  {
    projectName: "simple hover images",
    projectDescription:"Designed & Built simple hover images Application using HTML CSS and JavaScript.",
    projectImage: "images/images.png",
    codeLink: "https://github.com/eyesee420/img_icaonapo_ian-christopher.git",
    demoLink: "https://eyesee420.github.io/img_icaonapo_ian-christopher/"

  },
  {
    projectName: "Dino Game",
    projectDescription:
      "Designed & Built Dino Game Application using HTML CSS and JavaScript.",
    projectImage: "images/dinoima.png",
    codeLink: "https://github.com/eyesee420/dino_game.git",
    demoLink: "https://eyesee420.github.io/dino_game/"
  },
  {
    projectName: "Dino Game",
    projectDescription:
      "Designed & Built Dino Game Application using HTML CSS and JavaScript.",
    projectImage: "images/dinoima.png",
    codeLink: "https://github.com/eyesee420/dino_game.git",
    demoLink: "https://eyesee420.github.io/dino_game/"
  },
  {
    projectName: "First Responsive Project",
    projectDescription:
      "Our first Responsive Web Group task made Purely html and css ",
    projectImage: "images/firsts.png",
    codeLink: "https://github.com/eyesee420/first.git",
    demoLink: "https://eyesee420.github.io/first/"
  },
  {
    projectName: "Calculator project",
    projectDescription:
      "Designed & Built Calculator Application using HTML CSS and JavaScript.",
    projectImage: "images/luu.png",
    codeLink: "https://github.com/eyesee420/icyy-calcu-google-style.git",
    demoLink: "https://eyesee420.github.io/calculator/"
  },
 
];

const createCards = () => {
  projects.map(project => {
      const projectCard = new Project({
        projectName: project.projectName,
        projectDescription: project.projectDescription,
        projectImage: project.projectImage,
        codeLink: project.codeLink,
        demoLink: project.demoLink
      }).createProjectCard();
      document.getElementById("post-wrapper-id").appendChild(projectCard);
    }
  );
};
createCards();
