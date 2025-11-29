import { FaFacebook } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { SiZalo } from "react-icons/si";

const SocialMedia = () => {
  return (
    <div className="my-4 d-flex items-center gap-3">
      <a
        href="https://github.com/AnhMinhTruongHoang"
        target="_blank"
        className="highlight"
        title="GitHub"
      >
        <SiGithub size={30} />
      </a>

      <a
        href="https://www.facebook.com/minh.anh.223360/?locale=vi_VN"
        target="_blank"
        className="highlight"
        title="Facebook"
      >
        <FaFacebook size={30} />
      </a>
      <a
        href="https://chat.zalo.me/"
        target="_blank"
        className="highlight"
        title="Zalo"
      >
        <SiZalo size={30} />
      </a>
    </div>
  );
};

export default SocialMedia;
