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
      "What I learned while using WebSockets to connect recycling suppliers and collectors in real time.",
    tags: ["Django", "WebSockets", "Backend"],
    lessons: [
      "Real-time features work best when each event has a clear purpose. I kept messages small and focused on changes users needed to see immediately.",
      "Channel groups made it easier to send updates only to the relevant users instead of broadcasting every event to everyone.",
      "Connection errors are part of the experience, so loading, reconnecting, and fallback states deserve the same attention as the successful path.",
    ],
  },
  {
    title: "Designing mobile-first tools for small businesses",
    date: "October 2025",
    readTime: "5 min read",
    summary:
      "Product lessons from turning everyday MSME workflows into focused mobile features for Climbio.",
    tags: ["React Native", "Product", "UX"],
    lessons: [
      "A useful product starts with the workflow, not the feature list. I mapped the daily tasks first and designed around the shortest path to completion.",
      "Small screens force better decisions. Clear hierarchy, simple language, and fewer actions made each module easier to understand.",
      "Feedback from real users helped separate features that sounded impressive from the ones that genuinely saved time.",
    ],
  },
  {
    title: "Using AI as a practical product feature",
    date: "May 2026",
    readTime: "4 min read",
    summary:
      "Lessons from integrating Gemini AI into Strivo to generate structured strategies for MSMEs.",
    tags: ["Gemini AI", "Prompting", "Product"],
    lessons: [
      "AI output becomes more useful when the input is structured. Asking users focused questions produced more relevant strategies than relying on one open-ended prompt.",
      "A generated answer should be a starting point, not a final decision. The interface needs to help users review, edit, and apply recommendations.",
      "Clear constraints and predictable output formats made the AI response easier to display and more dependable for users.",
    ],
  },
];
