import Typewriter from "typewriter-effect";
import SocialMedia from "../parts/social.media.js";
import { useTranslation } from "react-i18next";
import "../hero/hero.scss";
import ResizeButton from "../parts/resize.button.tsx";
import { APP_DATA } from "@/helpers/data.js";
import { MdFileDownload } from "react-icons/md";
import { AiFillFire } from "react-icons/ai";
import CVFile from "../../../assets/cv/Truong-Hoang-Anh-Minh-CV.pdf";

interface IProps {
  scrollToExperienceSection: () => void;
}

const HeroLeft = (props: IProps) => {
  const { t } = useTranslation();

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleDownLoadCV = () => {
    const link = document.createElement("a");
    link.href = CVFile;
    link.download = "Truong-Hoang-Anh-Minh-CV.pdf";
    link.click();
  };

  return (
    <div className="hero-left">
      <h3>
        Hi There!{" "}
        <span className="wave" role="img" aria-labelledby="wave">
          👋🏻
        </span>
      </h3>
      <h3 style={{ paddingTop: 10, paddingBottom: 5 }}>
        I'M &nbsp;
        <strong className="brand-red">{t("appHeader.brand")}</strong>
      </h3>
      <Typewriter
        options={{
          strings: ["Software Developer", "Intern", "Open Source Contributor"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          wrapperClassName: "brand-green",
        }}
      />
      <div className="mt-md-6 mt-3 mb-md-5 mb-2">
        <SocialMedia
          github={APP_DATA.GITHUB_URL}
          facebook={APP_DATA.FACEBOOK_URL}
          zalo={APP_DATA.ZALO_URL}
        />
      </div>
      <div className="d-md-flex d-none gap-4">
        <ResizeButton
          onClick={props.scrollToExperienceSection}
          btnText={t("heroSection.exp")}
          btnIcons={<AiFillFire style={{ color: "orange" }} />}
          btnStyle={{
            background: "unset",
            border: "1px solid var(--border-hero-right)",
            color: "var(--text-white-1)",
          }}
        />
        <ResizeButton
          onClick={handleDownLoadCV}
          btnText={t("heroSection.cv")}
          btnIcons={<MdFileDownload />}
        />
      </div>
    </div>
  );
};

export default HeroLeft;
