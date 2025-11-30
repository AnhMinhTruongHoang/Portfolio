import { Col, Row } from "react-bootstrap";
import AnimationLottie from "../../share/animation-lottie";
import codingJSON from "../../../assets/lottie/coding.json";
//@ts-ignore
import { DEVELOPMENT_LOTTIE } from "../../../assets/lottie/string/development.js";
//@ts-ignore
import { CONTACT_LOTTIE } from "../../../assets/lottie/string/contact.js";
import GlowCard from "../../share/glow-card";
import Divider from "../parts/divider";
import SocialMedia from "../parts/social.media";
import { FcWorkflow } from "react-icons/fc";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col md={6} xs={12}>
          <h3 className="text-center mb-md-5 mb-2">
            {t("aboutSection.heading")} <span className="brand-red">?</span>
          </h3>

          <div>
            <p>{t("aboutSection.intro1")}</p>
            <p>{t("aboutSection.intro2")}</p>
            <p>{t("aboutSection.intro3")}</p>
          </div>

          <div>
            <p>{t("aboutSection.hobbies")}</p>
            <ul>
              <li>{t("aboutSection.hobby1")}</li>
              <li>{t("aboutSection.hobby2")}</li>
              <li>{t("aboutSection.hobby3")}</li>
            </ul>
          </div>

          <div>
            <p className="text-center brand-red">{t("aboutSection.quote")}</p>
            <p className="text-center brand-red">
              {t("aboutSection.quoteAuthor")}
            </p>
          </div>
        </Col>

        <Col
          md={6}
          xs={12}
          className="d-flex align-items-center justify-content-center"
        >
          <AnimationLottie width="80%" animationPath={codingJSON} />
        </Col>
      </Row>

      <Row>
        <Col
          md={6}
          xs={12}
          className="d-none d-md-flex align-items-center justify-content-center mt-md-5 mt-3"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(DEVELOPMENT_LOTTIE)}
          />
        </Col>

        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <div className="d-flex flex-column align-items-center gap-3">
            <h4 className="text-center brand-red">
              {t("aboutSection.futureWork")}
            </h4>
            <GlowCard identifier={`experience-5`}>
              <div className="p-3 relative">
                <div className="experience-container">
                  <div className="details">
                    <div className="icon">
                      <FcWorkflow size={36} />
                    </div>
                    <div className="info">
                      <p className="title">Update ....</p>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col md={6} xs={12} className="mt-md-5 mt-3">
          <h3 className="mb-md-5 mb-2">{t("aboutSection.findMe")}</h3>
          <SocialMedia />
        </Col>

        <Col
          md={6}
          xs={12}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <AnimationLottie
            width="50%"
            animationPath={JSON.parse(CONTACT_LOTTIE)}
          />
          <h4 className="text-center">{t("aboutSection.contactMe")}</h4>
        </Col>
      </Row>

      <div className="mb-5"></div>
    </>
  );
};

export default About;
