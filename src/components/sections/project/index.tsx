import { Col, Row } from "react-bootstrap";
import ProjectCard from "./project.card";
import { useTranslation } from "react-i18next";
import softdink from "../../../assets/project/softdink.png";
import ecom from "../../../assets/project/ecom.png";
import custom from "../../../assets/project/custom.png";
import appostI from "../../../assets/project/Apppost.jpg";

const Project = () => {
  const { t } = useTranslation();
  const projectsImages = [softdink, custom, ecom, appostI];

  const projects = t("projectsSection.projects", { returnObjects: true }) as {
    title: string;
    description: string;
    githubLink: string;
    demoLink: string;
  }[];

  return (
    <>
      <Row>
        <Col xs={12}>
          <h3
            className="text-center"
            dangerouslySetInnerHTML={{ __html: t("projectsSection.heading") }}
          ></h3>
          <h6 className="text-center mb-md-5 mb-2">
            {t("projectsSection.subheading")}
          </h6>
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {projects?.map((item, index) => (
          <Col md={4} className="project-card" key={index}>
            <ProjectCard
              imgPath={projectsImages[index]}
              title={item.title}
              description={item.description}
              githubLink={item.githubLink}
              demoLink={item.demoLink}
            />
          </Col>
        ))}
      </Row>

      <div className="mb-7"></div>
    </>
  );
};

export default Project;
