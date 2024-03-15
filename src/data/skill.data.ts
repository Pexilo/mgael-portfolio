type Skill = {
  id: number;
  emoji: string;
  name: string;
  category: string;
  firstUse: number;
  estimatedLevel: 1 | 2 | 3 | 4 | 5;
  favorite?: boolean;
};
export const skillList: Skill[] = [
  {
    id: 1,
    emoji: "🐍",
    category: "backend",
    name: "Python",
    firstUse: 2021,
    estimatedLevel: 2,
  },
  {
    id: 2,
    category: "backend",
    emoji: "☕",
    name: "Java",
    firstUse: 2022,
    estimatedLevel: 3,
  },
  {
    id: 3,
    emoji: "🐘",
    name: "PHP",
    category: "backend",
    firstUse: 2021,
    estimatedLevel: 2,
  },
  {
    id: 4,
    emoji: "⚛️",
    name: "React",
    category: "frontend",
    firstUse: 2023,
    estimatedLevel: 4,
    favorite: true,
  },

  {
    id: 5,
    emoji: "🌐",
    name: "HTML/CSS",
    category: "frontend",
    firstUse: 2021,
    estimatedLevel: 4,
  },
  {
    id: 6,
    emoji: "💻",
    name: "Javascript",
    category: "frontend",
    firstUse: 2021,
    estimatedLevel: 5,
  },
  {
    id: 7,
    emoji: "🔷",
    name: "Typescript",
    category: "frontend",
    firstUse: 2023,
    estimatedLevel: 5,
    favorite: true,
  },
  {
    id: 8,
    emoji: "💻",
    name: "Visual Studio",
    category: "environnement",
    firstUse: 2022,
    estimatedLevel: 3,
  },
  {
    id: 9,
    emoji: "📱⚛️",
    name: "React Native",
    category: "frontend",
    firstUse: 2023,
    estimatedLevel: 3,
  },
  {
    id: 10,
    emoji: "🟩",
    name: "Node.js",
    category: "backend",
    firstUse: 2021,
    estimatedLevel: 4,
    favorite: true,
  },
  {
    id: 11,
    emoji: "🚀",
    name: "Express.js",
    category: "backend",
    firstUse: 2021,
    estimatedLevel: 4,
  },
  {
    id: 12,
    emoji: "🍃",
    name: "MongoDB",
    category: "backend",
    firstUse: 2022,
    estimatedLevel: 4,
  },
  {
    id: 13,
    emoji: "🐬",
    name: "MySQL",
    category: "backend",
    firstUse: 2021,
    estimatedLevel: 4,
    favorite: true,
  },
  {
    id: 14,
    emoji: "🔀",
    name: "Github",
    category: "environnement",
    firstUse: 2021,
    estimatedLevel: 4,
    favorite: true,
  },
  {
    id: 15,
    emoji: "🐧",
    name: "Linux",
    category: "environnement",
    firstUse: 2021,
    estimatedLevel: 3,
  },
  {
    id: 16,
    emoji: "🐳",
    name: "Docker",
    category: "divers",
    firstUse: 2023,
    estimatedLevel: 3,
    favorite: true,
  },
  {
    id: 17,
    emoji: "🪟",
    name: "Windows",
    category: "environnement",
    firstUse: 2007,
    estimatedLevel: 5,
  },
  {
    id: 27,
    emoji: "🤖",
    name: "ChatGPT",
    category: "divers",
    firstUse: 2022,
    estimatedLevel: 4,
  },
  {
    id: 28,
    emoji: "🗨️",
    name: "Discord.js",
    category: "divers",
    firstUse: 2020,
    estimatedLevel: 5,
    favorite: true,
  },
  {
    id: 29,
    emoji: "🏭",
    name: "Proxmox",
    category: "divers",
    firstUse: 2023,
    estimatedLevel: 3,
  },
  {
    id: 30,
    emoji: "📋",
    name: "SCRUM",
    category: "divers",
    firstUse: 2021,
    estimatedLevel: 4,
    favorite: true,
  },
  {
    id: 31,
    emoji: "🅰️",
    name: "Angular",
    category: "frontend",
    firstUse: 2022,
    estimatedLevel: 3,
    favorite: true,
  },
  {
    id: 32,
    emoji: "🆚",
    name: "VSCode",
    category: "environnement",
    firstUse: 2020,
    estimatedLevel: 5,
    favorite: true,
  },
  {
    id: 33,
    emoji: "🧠",
    name: "IntelliJ",
    category: "environnement",
    firstUse: 2021,
    estimatedLevel: 3,
  },
  {
    id: 34,
    emoji: "🌑",
    name: "Eclipse",
    category: "environnement",
    firstUse: 2022,
    estimatedLevel: 3,
  },
  {
    id: 35,
    emoji: "⚡",
    name: "Vite",
    category: "divers",
    firstUse: 2023,
    estimatedLevel: 3,
  },
];
