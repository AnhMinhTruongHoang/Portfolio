import { FaFacebook } from "react-icons/fa6";
import { SiGithub, SiZalo } from "react-icons/si";

interface ISocialMediaProps {
  github?: string;
  facebook?: string;
  zalo?: string;
}

const SocialMedia: React.FC<ISocialMediaProps> = ({
  github = "https://github.com/AnhMinhTruongHoang",
  facebook = "https://www.facebook.com/minh.anh.223360/?locale=vi_VN",
  zalo = "https://chat.zalo.me/",
}) => {
  return (
    <div className="my-4 d-flex items-center gap-3">
      {github && (
        <a href={github} target="_blank" className="highlight" title="GitHub">
          <SiGithub size={30} />
        </a>
      )}
      {facebook && (
        <a
          href={facebook}
          target="_blank"
          className="highlight"
          title="Facebook"
        >
          <FaFacebook size={30} />
        </a>
      )}
      {zalo && (
        <a href={zalo} target="_blank" className="highlight" title="Zalo">
          <SiZalo size={30} />
        </a>
      )}
    </div>
  );
};

export default SocialMedia;
