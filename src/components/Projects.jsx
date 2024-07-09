import img1 from "../assets/projects-images/project-img-1.jpg";
import img2 from "../assets/projects-images/project-img-2.jpg";
import img3 from "../assets/projects-images/project-img-3.jpg";
import img4 from "../assets/projects-images/project-img-4.jpg";

import { useTranslation } from 'react-i18next';
const Projects = () => {
        const { t } = useTranslation();
  return (
    <div className="projects section">
      <h2 className="title title-small">
            {t('projects.title')}
      </h2>

      <div className="projects__composition">
        <img className="project__img small-img-1 " src={img2}></img>
        <img className="project__img big-img" src={img1}></img>
        <img className="project__img medium-img " src={img4}></img>
        <img className="project__img  small-img-2" src={img3}></img>
      </div>
    </div>
  );
};

export default Projects;
