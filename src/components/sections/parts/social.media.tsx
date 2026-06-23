import { useState } from "react";
import { FaFacebook } from "react-icons/fa6";
import { SiGithub, SiZalo } from "react-icons/si";

interface ISocialMediaProps {
  github?: string;
  facebook?: string;
  zaloPhone?: string;
}

const SocialMedia: React.FC<ISocialMediaProps> = ({
  github = "https://github.com/AnhMinhTruongHoang",
  facebook = "https://www.facebook.com/minh.anh.223360/?locale=vi_VN",
  zaloPhone = "09xxxxxxxx",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyZalo = async () => {
    try {
      await navigator.clipboard.writeText(zaloPhone);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      alert(`Zalo: ${zaloPhone}`);
    }
  };

  return (
    <div className="my-4 d-flex items-center gap-3">
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
          title="GitHub"
        >
          <SiGithub size={30} />
        </a>
      )}

      {facebook && (
        <a
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="highlight"
          title="Facebook"
        >
          <FaFacebook size={30} />
        </a>
      )}

      {zaloPhone && (
        <button
          type="button"
          onClick={handleCopyZalo}
          className="highlight"
          title={`Click để copy số Zalo: ${zaloPhone}`}
          style={{
            border: "none",
            background: "transparent",
            padding: 0,
            cursor: "pointer",
            position: "relative",
          }}
        >
          <SiZalo size={30} />

          {copied && (
            <span
              style={{
                position: "absolute",
                left: "50%",
                top: "110%",
                transform: "translateX(-50%)",
                whiteSpace: "nowrap",
                fontSize: 12,
                padding: "4px 8px",
                borderRadius: 6,
                background: "#111",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.2)",
                zIndex: 20,
              }}
            >
              Đã copy Zalo
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default SocialMedia;
