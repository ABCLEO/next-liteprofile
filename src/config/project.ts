type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string[];
  intro: string;
};

export const projects: Project[] = [
  {
    id: "frctw-web",
    title: "FRC Taiwan 2025 - 台灣賽區官方網站",
    description:
      "協助新北市政府活動大會建立比賽官網，採用 i18n 架構支援多國語言頁面。",
    image: "/images/projects/frctw-web.png",
    tag: ["精選", "網站"],
    intro: "https://www.frc.tw",
  },
  {
    id: "codecat-web",
    title: "程式貓官網 - 科技教育社群的介紹",
    description:
      "基於 Docusaurus 建立支援 Markdown 的文本網站，並在上面發怖科技新聞。",
    image: "/images/projects/codecat-web.png",
    tag: ["精選", "網站"],
    intro: "https://www.codecat.tw",
  },
  {
    id: "kuang-ti-web",
    title: "個人網站 - 使用 Next.js 搭建 RWD 網站",
    description:
      "使用 Next.js 搭配 Tailwind CSS 建立 RWD 網站，現在這個網站即是成果。",
    image: "/images/projects/kuang-ti-web.png",
    tag: ["精選", "網站"],
    intro: "https://www.kuang-ti.com",
  },
  {
    id: "next-staticblog",
    title: "NPM包 - next-staticblog",
    description:
      "提供開箱即用的部落格頁面，簡化相關配置。曾達到每週數百次的安裝量。",
    image: "/images/projects/next-staticblog.png",
    tag: ["精選", "服務"],
    intro: "https://www.npmjs.com/package/next-staticblog",
  },
  {
    id: "discord-templatebot",
    title: "Discord bot - 一隻商用專業模板機器人",
    description:
      "一個基於 discord.py 製作的機器人，使用Cogs架構支援即時熱修復，無須停機重啟。",
    image: "/images/projects/discord-templatebot.png",
    tag: ["精選", "服務"],
    intro: "https://github.com/yd-tw/Discord-TemplateBot",
  },
  {
    id: "frc-robot",
    title: "FRC機器人 - 國際性的大型機器人競賽",
    description:
      "工業級的機器人競賽，撰寫包含自動駕駛、視覺辨識、編碼器在內的多項技術。",
    image: "/images/projects/frc-robot.png",
    tag: ["精選", "比賽"],
    intro: "https://frc.codecat.tw",
  },
  {
    id: "ntut-pbl",
    title: "北科大PBL - 比賽小車重製",
    description:
      "改良我在北科大 PBL 時製作的車子，使其 AI 視覺辨識系統更加穩定與準確。",
    image: "/images/projects/ntut-pbl.png",
    tag: ["比賽"],
    intro: "https://github.com/yd-tw/Arduino-Car",
  },
  {
    id: "sciencefair-cat",
    title: "科展 - 基於AI影像分析的貓咪情緒辨識",
    description:
      "分析提示工程對於影像辨識模型的差異，包含模態、語言、關鍵詞等提示詞差異對照。",
    image: "/images/projects/sciencefair-cat.png",
    tag: ["比賽"],
    intro: "/404",
  },
  {
    id: "wupamap",
    title: "嗚帕村線上地圖 - 基於 D3.js 資料視覺化",
    description:
      "透過 D3.j3 渲染包含鐵路路線、河流在內的組件，同時支援透過網址參數快速定位。",
    image: "/images/projects/wupamap.png",
    tag: ["網站"],
    intro: "https://wupa.ydtw.net",
  },
  {
    id: "hui",
    title: "線上夾娃娃機遊戲 - Three.js 建構的立體遊戲",
    description:
      "透過 Three.js 建立立體遊戲網頁。透過虛擬搖桿操縱爪子並支援隨機顯示禮物外觀。",
    image: "/images/projects/hui.png",
    tag: ["網站"],
    intro: "/404",
  },
  {
    id: "phaser-chshs",
    title: "中核高中 - 使用 Phaser 建立的線上遊戲",
    description: "透過 Phaser 建立的類 RPG 冒險遊戲，支援登入儲存遊戲進度。",
    image: "/images/projects/phaser-chshs.png",
    tag: ["網站"],
    intro: "/404",
  },
];
