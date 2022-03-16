import Button from "../Button";
const Project = (props) => {
  const { data } = props;

  return (
    <div
      className={`${props.isVisible ? "projects__anim" : ""}`}
      style={props.style}
    >
      <h2
        className={`${props.isVisible ? "projects__anim" : ""}`}
        style={{ textAlign: "center", marginBottom: "0.5rem" }}
      >
        {data.title}
      </h2>
      <img
        src={data.img}
        width="100%"
        height="80%"
        alt="project"
        style={{ marginBottom: "0.2rem" }}
      />
      <div className="button__container__projects">
        <Button
          href={data.url}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          View Demo
        </Button>
      </div>
    </div>
  );
};

export default Project;
