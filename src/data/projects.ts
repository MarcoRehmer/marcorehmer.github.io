interface Project {
    title: string;
    slug: string;
    imageUrl: string;
    imageAltText: string;
    tags: ReadonlyArray<string>;
  }

export const projects: ReadonlyArray<Project> = [
    {
      title: "Portfolio",
      slug: "portfolio",
      imageUrl: "/assets/images/project_portfolio_thumbnail.png",
      imageAltText: "Placeholder Image",
      tags: ["Astro", "Typescript"],
    },
    {
      title: "Clockmate",
      slug: "clockmate",
      imageUrl: "/assets/images/project_clockmate_thumbnail.png",
      imageAltText: "Placeholder Image",
      tags: ["Svelte", "NestJS"],
    },
    {
      title: "Squirrel News App",
      slug: "squirrel-news",
      imageUrl: "/assets/images/project_squirrelnews_thumbnail.png",
      imageAltText: "Placeholder Image",
      tags: ["Ionic", "React"],
    },
  ];
  