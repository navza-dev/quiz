
export const QUIZ_DATA = [
  {
    id: 1,
    question: "How do you prefer to solve problems?",
    options: [
      { text: "Writing code or analyzing data", type: "technical" },
      { text: "Drawing or designing something new", type: "creative" },
      { text: "Talking and listening to others", type: "people" },
      { text: "Organizing schedules and tasks", type: "logistics" }
    ]
  },
  {
    id: 2,
    question: "What's your dream workspace?",
    options: [
      { text: "A high-tech lab or setup", type: "technical" },
      { text: "A messy but creative studio", type: "creative" },
      { text: "A bustling classroom or office", type: "people" },
      { text: "A modern, minimalist headquarters", type: "logistics" }
    ]
  },
  {
    id: 3,
    question: "Which activity sounds most fun?",
    options: [
      { text: "Solving a complex puzzle", type: "technical" },
      { text: "Writing a story or making music", type: "creative" },
      { text: "Helping someone learn a task", type: "people" },
      { text: "Scaling a business for growth", type: "logistics" }
    ]
  },
  {
    id: 4,
    question: "How do you handle deadlines?",
    options: [
      { text: "Break it down into logic steps", type: "technical" },
      { text: "Work in short, creative bursts", type: "creative" },
      { text: "Collaborate with a team to finish", type: "people" },
      { text: "Follow a strict calendar plan", type: "logistics" }
    ]
  },
  {
    id: 5,
    question: "What's your biggest strength?",
    options: [
      { text: "Critical thinking and logic", type: "technical" },
      { text: "Innovation and imagination", type: "creative" },
      { text: "Empathy and communication", type: "people" },
      { text: "Execution and efficiency", type: "logistics" }
    ]
  }
];

export const CAREER_RESULTS = {
  technical: {
    title: "The Tech Visionary",
    description: "You excel at logic, data, and building complex systems. Your future lies in technology, science, or engineering.",
    careers: ["Software Engineer", "Data Scientist", "Robotics Engineer", "Cybersecurity Expert"],
    icon: "Cpu"
  },
  creative: {
    title: "The Creative Catalyst",
    description: "You see beauty where others see chaos. Your path leads to arts, media, and design where your imagination can soar.",
    careers: ["UI/UX Designer", "Content Creator", "Art Director", "Game Designer"],
    icon: "Palette"
  },
  people: {
    title: "The Human Connection",
    description: "You have a natural gift for understanding and helping people. You thrive in education, healthcare, or social services.",
    careers: ["Teacher", "Psychologist", "Human Resources Manager", "Public Relationsist"],
    icon: "Users"
  },
  logistics: {
    title: "The Strategic Leader",
    description: "You are the master of efficiency and execution. You belong in business, management, or high-level administration.",
    careers: ["Project Manager", "Operations Director", "Entrepreneur", "Financial Analyst"],
    icon: "Briefcase"
  }
};
