import { HoverEffect } from "@/components/ui/hover-cards";

export function DisplaySkillsCards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Business Analysis",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Strategic Planning",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Business Consulting",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Marketing Strategy",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Experience Design",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Audit & Evaluation",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
