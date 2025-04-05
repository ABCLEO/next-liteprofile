type Hero = {
  title: string;
  description: string;
  typeAnimationTexts: (string | number)[];
  achievementsList: Achievement[];
};

type Achievement = {
  metric: string;
  value: string;
  postfix?: string;
  prefix?: string;
};

export const hero: Hero = {
  title: "我是 游鎧",
  description: "一位立志成為軟體工程師的高中生自我介紹",
  typeAnimationTexts: [
    "擔任機器人社活動長",
    1000,
    "擔任圖書股長",
    1000,
    "擔任輔導股長",
    1000,
  ],
  achievementsList: [
    { metric: "國文", value: "11", postfix: "級" },
    { metric: "英文", value: "8", postfix: "級" },
    { metric: "數A", value: "9", postfix: "級" },
    { metric: "社會", value: "11", postfix: "級" },
    { metric: "數B", value: "14", postfix: "級" },
  ],
};
