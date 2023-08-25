// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    categories: [
      {
        name: "Mathematics",
        description: "Documents related to various branches of mathematics.",
        tags: ["math", "college", "higher education"],
        href: "/categories/mathematics",
      },
      {
        name: "Physical Sciences",
        description: "Resources covering principles of physics and chemistry.",
        tags: [
          "physics",
          "chemistry",
          "science",
          "college",
          "higher education",
        ],
        href: "/categories/physical-sciences",
      },
      {
        name: "Life Sciences",
        description: "Materials exploring biology and life sciences.",
        tags: ["biology", "science", "college", "higher education"],
        href: "/categories/life-sciences",
      },
      {
        name: "Computer Science",
        description:
          "Resources about programming, algorithms, and computer science.",
        tags: [
          "computer science",
          "programming",
          "college",
          "higher education",
        ],
        href: "/categories/computer-science",
      },
      {
        name: "Social Sciences",
        description: "Documents related to human behavior and society.",
        tags: [
          "social sciences",
          "sociology",
          "psychology",
          "college",
          "higher education",
        ],
        href: "/categories/social-sciences",
      },
      {
        name: "Humanities",
        description:
          "Materials covering literature, philosophy, history, and arts.",
        tags: [
          "humanities",
          "literature",
          "philosophy",
          "history",
          "arts",
          "college",
          "higher education",
        ],
        href: "/categories/humanities",
      },
      {
        name: "Engineering",
        description: "Resources about engineering principles and applications.",
        tags: ["engineering", "technology", "college", "higher education"],
        href: "/categories/engineering",
      },
      {
        name: "Health Sciences",
        description: "Documents covering medical and health-related topics.",
        tags: [
          "health sciences",
          "medicine",
          "healthcare",
          "science",
          "college",
          "higher education",
        ],
        href: "/categories/health-sciences",
      },
      {
        name: "Aviation Studies",
        description: "Materials related to aviation, aeronautics, and flight.",
        tags: [
          "aviation studies",
          "aeronautics",
          "flight",
          "college",
          "higher education",
        ],
        href: "/categories/aviation-studies",
      },
      {
        name: "Business",
        description:
          "Resources about business administration, management, and economics.",
        tags: [
          "business",
          "management",
          "economics",
          "college",
          "higher education",
        ],
        href: "/categories/business",
      },
      {
        name: "Theology",
        description:
          "Documents exploring theological concepts and religious studies.",
        tags: ["theology", "religious studies", "college", "higher education"],
        href: "/categories/theology",
      },
      // Add more categories as needed
    ],
  });
}
