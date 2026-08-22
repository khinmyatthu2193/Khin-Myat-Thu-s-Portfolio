export interface Post {
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  lessons: string[];
}

export const posts: Post[] = [
  {
    title: "Building real-time features with Django Channels",
    date: "March 2025",
    readTime: "4 min read",
    summary:
      "What I learned while exploring real-time functionality with Django and WebSockets through RecycleLink.",
    tags: ["Django", "WebSockets", "Backend"],
    lessons: [
      "Real-time behavior introduced a different way of thinking about how the interface and backend communicate.",
      "WebSockets helped me explore updates that do not depend on a traditional page refresh.",
      "The project reminded me that understanding the flow of data is as important as making the interface work.",
    ],
  },
  {
    title: "Designing mobile-first tools for small businesses",
    date: "October 2025",
    readTime: "5 min read",
    summary:
      "What revisiting Climbio through Version 2 taught me about iteration and mobile development.",
    tags: ["React Native", "Product", "UX"],
    lessons: [
      "Returning to an existing project helped me notice decisions I had not understood the first time.",
      "Working with React Native and Firebase gave me more confidence in mobile application development.",
      "Iteration is not only about adding features; it is also about understanding what already exists and learning how to improve it carefully.",
    ],
  },
  {
    title: "Learning with AI-assisted development tools",
    date: "2026",
    readTime: "4 min read",
    summary:
      "How tools such as Gemini AI, Claude Code, and Cursor are shaping the way I explore ideas and learn while building.",
    tags: ["AI", "Learning", "Development tools"],
    lessons: [
      "AI can help me explore unfamiliar ideas, but I still need to understand and verify what I use.",
      "The most useful prompts begin with a clear problem and enough context.",
      "AI-assisted development works best for me as a learning partner, not a replacement for thinking through the problem.",
    ],
  },
];
