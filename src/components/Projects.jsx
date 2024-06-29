import img1 from "../assets/projects-images/project-img-1.jpg";
import img2 from "../assets/projects-images/project-img-2.jpg";
import img3 from "../assets/projects-images/project-img-3.jpg";
const Projects = () => {
  return (
    <div className="projects section">
      <h2 className="title title-small">
        If you're after something a little unconventional, you've landed in the
        perfect spot! <br></br>Here, it's all about exploring through
        photography
      </h2>

      <div className="projects__composition">
        <img className="project__img small-img-1 " src={img1}></img>
        <img className="project__img big-img" src={img2}></img>
        <img className="project__img  small-img-2" src={img3}></img>
      </div>
    </div>
  );
};

export default Projects;
