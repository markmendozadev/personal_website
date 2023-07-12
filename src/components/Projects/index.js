import "../../App.css";
import "./projects.css";
import Project from "./Project";
import useObserver from "../Hooks";
import simpleTodoImg from "../../assets/simpleTodo.png";
import personalPortfolio from "../../assets/My_Portfolio_Demo.png";
import cryptoGuy from "../../assets/cryptoGuy.png";
import moviejam from "../../assets/movie.png";
import easybank from "../../assets/easybank.PNG";
import bookmark from "../../assets/bookmark.PNG";
const data = [
  // {
  //   id: 1,
  //   title: "Todo List Web App",
  //   img: simpleTodoImg,
  //   url: "https://marktodolist.netlify.app/",
  //   stack: ["Material UI", "ReactJS"],
  //   delay: "300ms",
  // },
  // {
  //   id: 2,
  //   title: "Personal Portfolio",
  //   img: personalPortfolio,
  //   url: "https://markmendoza.netlify.app/",
  //   stack: ["Material UI", "ReactJS"],
  //   delay: "400ms",
  // },
  {
    id: 1,
    title: "Crypto coins information Web App",
    img: cryptoGuy,
    url: "https://cryptoguy.netlify.app/",
    stack: ["ReactJS"],
    delay: "300ms",
  },
  {
    id: 2,
    title: "Movie App",
    img: moviejam,
    url: "https://moviejam.vercel.app/",
    stack: ["ReactJS"],
    delay: "400ms",
  },
  {
    id: 3,
    title: "Easybank Landing Page",
    img: easybank,
    url: "https://easybank-landingpage-mark.vercel.app/",
    stack: ["ReactJS"],
    delay: "500ms",
  },
  {
    id: 4,
    title: "Bookmark Landing Page",
    img: bookmark,
    url: "https://bookmark-landing-mark.vercel.app/",
    stack: ["ReactJS"],
    delay: "600ms",
  },
];
const Projects = () => {
  const [containerRef, isVisible] = useObserver();
  console.log(isVisible);
  return (
    <div id="projects" className="projects" ref={containerRef}>
      <h2
        className={`main__text ${isVisible ? "projects__anim" : ""}`}
        style={{ transitionDelay: "50ms" }}
      >
        PROJECTS
      </h2>
      <p
        className={`sub__text ${isVisible ? "projects__anim" : ""}`}
        style={{ transitionDelay: "200ms" }}
      >
        <a
          href="https://github.com/markmendozadev?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          view all projects
        </a>
      </p>
      <div className={`project__grid`}>
        {data.map((project) => (
          <Project
            key={project.id}
            data={project}
            isVisible={isVisible}
            style={{ transitionDelay: project.delay }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
