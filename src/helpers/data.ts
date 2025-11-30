import softdink from "../assets/project/softdink.png";
import ecom from "../assets/project/ecom.png";
import custom from "../assets/project/custom.png";
import appostI from "../assets/project/apppost.jpg";

export const APP_DATA = {
  FACEBOOK_URL: "https://www.facebook.com/minh.anh.223360/",
  GITHUB_URL: "https://github.com/AnhMinhTruongHoang",
  ZALO_URL: "https://chat.zalo.me/",
};

export const EXPERIENCES = [
  {
    id: 1,
    title: {
      vi: "Đại học công nghệ Đồng nai",
      en: "Dong Nai University of Technology",
    },
    company: {
      vi: "Chuyên ngành ngôn ngữ anh",
      en: "English linguistics.",
    },
    duration: {
      vi: "2019 - 2022",
      en: "2019 - 2022",
    },
  },
  {
    id: 2,
    title: {
      vi: "Aptech",
      en: "Aptech",
    },

    company: {
      vi: "Lập trình viên",
      en: "Software Engineering",
    },
    duration: {
      vi: "2024 - hiện tại",
      en: "2024 - present",
    },
  },
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: softdink,
    title: "Dự án Landing Page 3D – SoftDrinkX",
    description:
      "Xây dựng một trang landing page 3D giới thiệu loạt sản phẩm nước giải khát mới, lấy cảm hứng từ phong cách landing page của Coca-Cola.",
    githubLink: "https://github.com/AnhMinhTruongHoang/SoftDrinkPage",
    demoLink: "https://soft-drink-page.vercel.app",
  },
  {
    id: 2,
    imgPath: custom,
    title: "Dự án Custom 3D - Jewelry Website",
    description:
      "Xây dựng một website cho phép người dùng tùy chỉnh trang sức 3D (nhẫn, vòng, dây chuyền…) trực tiếp trên trình duyệt",
    githubLink: "https://github.com/AnhMinhTruongHoang/JohnnyMinhJewelry",
    demoLink: "https://johnny-minh-jewelry.vercel.app",
  },
  {
    id: 3,
    imgPath: ecom,
    title: "Dự án E-commerce Website",
    description:
      "Xây dựng một website thương mại điện tử chuyên về sản phẩm gaming (gear, phụ kiện, phần mềm).",
    githubLink: "https://github.com/AnhMinhTruongHoang/Next-Nest-Ecommerce",
    demoLink: "https://next-nest-ecommerce.vercel.app",
  },

  {
    id: 4,
    imgPath: appostI,
    title: "Dự án Post office - APPost",
    description:
      "“APPost là một hệ thống quản lý bưu chính được phát triển để thay thế mô hình phần mềm độc lập mà công ty đang sử dụng. Hệ thống mới cho phép tất cả các chi nhánh kết nối trên một nền tảng trực tuyến thống nhất, giúp quá trình gửi, nhận và theo dõi thư từ, bưu phẩm trở nên nhanh hơn, chính xác hơn và minh bạch hơn.”",
    githubLink: "https://github.com/AnhMinhTruongHoang/Project_03",
    demoLink: "https://github.com/AnhMinhTruongHoang/Project_03",
  },
];

export const SKILLS_DATA = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "React",
  "Next JS",
  "nestjs",
  "Tailwind",
  "MongoDB",
  "MySQL",
  "Git",
  "Figma",
  "MaterialUI",
  "threejs",
  "blender",
];
