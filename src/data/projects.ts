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
    shortDescription:
        `<p>Ein Portfolio stellt in der heutigen Zeit die Visitenkarte eines Menschen dar. </p>
         <p>In meinem Portfolio ist eine Beschreibung zu meiner Person zu finden, 
         stelle ich meine Open Source Projekte vor und präsentiere eine chronologische Auflistung meiner vergangenen 
         Business-Projekte und Arbeitgeber.</p>`,
    fullText:
        `<p>Für meine Arbeit als Freelancer ist es wichtig, meinen Kund:innen einen Einblick in meine Fähigkeiten 
        und erfolgreich abgeschlossenen Projekten zu bieten.</p>
        <p>Da ich von Natur aus neugierig bin, habe ich mich hier an ein neues Framework gewagt um mein Portfolio 
        zu erstellen: Die Rede ist von <a href='https://astro.build/'>Astro <i class=\"fa-solid fa-arrow-up-right-from-square\"></i></a>. 
        Astro bietet die Möglichkeit performante statische 
        Seiten im Komponenten-Baukastensystem zu entwickeln und gleichzeitig die Vorzüge der Sprache Typescript zu genießen.</p>
        <p>Dadurch ist das Portfolio auch gleichzeitig ein \"Spielplatz\", um neue Techniken auszuprobieren. Eines der 
        kommenden Features wird die Anbindung an ein sogenanntes \"Headless CMS\" sein um auch einen kleinen Blog mit 
        wissenswerten Beiträgen und Storys aus meinem Entwickler-Alltag zu veröffentlichen.</p>`,
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
      "<p>Squirrel News ist ein kuratierter, konstruktiver Nachrichtendienst.</p> " +
        "<p>Es werden die wichtigsten lösungsorientierten Beiträge aus den internationalen Medien gesammelt und in kompakten, " +
        "kostenlosen Ausgaben gebündelt.</p>",
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
