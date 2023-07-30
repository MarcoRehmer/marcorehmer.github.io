interface Project {
  title: string;
  slug: string;
  thumbnailUrl: string;
  thumbnailAltText: string;
  projectImageUrl: string;
  projectImageAltText: string;
  shortDescription: string;
  fullText: string;
  tags: ReadonlyArray<string>;
  externalUrl?: string;
}

export const projects: ReadonlyArray<Project> = [
  {
    title: "Portfolio",
    slug: "portfolio",
    thumbnailUrl: "/assets/images/projects/portfolio_thumbnail.png",
    thumbnailAltText: "Placeholder Image",
    projectImageUrl: "/assets/images/projects/portfolio_thumbnail.png",
    projectImageAltText: "Portfolio Project Image",
    tags: ["Astro", "Typescript"],
    shortDescription: "Lorem Ipsum",
    fullText: "Foo Bar Full Text",
  },
  {
    title: "Squirrel News App",
    slug: "squirrel-news",
    thumbnailUrl: "/assets/images/projects/squirrel-news-app_thumbnail.png",
    thumbnailAltText: "Placeholder Image",
    projectImageUrl: "/assets/images/projects/squirrel-news-app.webp",
    projectImageAltText: "Squirrel News App Project Image",
    tags: ["Ionic", "React", "Firebase"],
    shortDescription:
      "Squirrel News ist ein kuratierter, konstruktiver Nachrichtendienst. " +
      "Es werden dei wichtigsten lösungsorientierten Beiträge aus den internationalen Medien gesammelt und in kompakten, " +
      "kostenlosen Ausgaben gebündelt.",
    fullText:
      "<p>Um alle Nutzer:innen anzusprechen, wurde die Squirrel News App mit dem Ionic Framework und React entwickelt. " +
      "Dadurch ist es möglich, sie sowohl für iOS und Android bereitzustellen.</p>" +
      "<p>Als Grundlage dient ein Google Firebase-Backend um die Ausgaben einfach und effizient auszuliefern.</p>" +
      "<p>Mit enger Zusammenarbeit von ehrenamtlichen Designer:innen wird für eine saubere UI / UX hingearbeitet. " +
      "Design-Entwürfe werden in Figma geteilt und besprochen und durch eine (nahezu) agile Arbeitsweise in Sprints können auch " +
      "Aufgaben schnell von den Entwickler:innen erledigt werden. Über die Plattform <a href='https://bitrise.io'>Bitrise <i class=\"fa-solid fa-arrow-up-right-from-square\"></i></a> " +
      "wird mittels CI/CD sowohl für Android als auch für iOS automatisiert testbare Deployments ermöglicht.</p>",
    externalUrl: "https://squirrel-news.net/",
  },
];
