interface TimelineGroup {
    fromTo: string;
    groupTitle: string;
    projects: ReadonlyArray<{
        title: string;
        type: "project" | "education" | "open-source";
        techs: ReadonlyArray<string>;
    }>;
}

export const timeline: ReadonlyArray<TimelineGroup> = [
    {
        fromTo: "2023 - heute",
        groupTitle: "Web Developer / Freelancer",
        projects: [
            // {
            //     title:
            //         "Burp Suite Certified Practitioner",
            //     type: "education",
            //     techs: ["Burp Suite", "Penetration Testing"],
            // },
            {
                title:
                    "Clockmate - Zeiterfassung für Einzelpersonen und kleinere Unternehmen",
                type: "project",
                techs: ["NextJS / React", "Go"],
            },
        ],
    },
    {
        fromTo: "2022 - heute",
        groupTitle: "Web Developer / Co-Team Lead (t2Informatik GmbH)",
        projects: [
            {
                title: "Squirrel News - Mobile News App zum lesen von kuratierten News",
                type: "open-source",
                techs: ["Ionic Framework", "React", "Firebase"],
            },
            {
                title:
                    "Geleiteter Zuordnungs- und Verarbeitungsprozess von Akten und Antragsteller:innen im Asylverfahren",
                type: "project",
                techs: ["Typescript", "Angular", "Nx"],
            },
            {
                title: "Antworterhebung von konfigurierbaren Fragebögen",
                type: "project",
                techs: ["Typescript", "Angular"],
            },
        ],
    },
    {
        fromTo: "2021 - 2022",
        groupTitle: "Web Developer (t2Informatik GmbH)",
        projects: [
            {
                title:
                    "Administrations-Oberfläche zur Verwaltung von automatisierten Background-Tasks",
                type: "project",
                techs: ["Typescript", "Angular"],
            },
            {
                title:
                    "Konfigurator zur Angebotserstellung zum Verkauf von Dialyse-Systemen",
                type: "project",
                techs: ["Typescript", "Angular"],
            },
            {
                title: "Monitoring von Patient:innen-Daten im Dialyse-Prozess",
                type: "project",
                techs: ["Typescript", "Angular"],
            },
        ],
    },
    {
        fromTo: "2018 - 2021",
        groupTitle: "Lead Mobile Developer (sys-pro GmbH)",
        projects: [
            {
                title: "Angular Crash Course for fast Developers (Udemy)",
                type: "education",
                techs: ["Angular"],
            },
            {
                title: "RactJS - The Complete Course (Udemy)",
                type: "education",
                techs: ["React"],
            },
            {
                title: "automatisiertes Replenishment in einem Mode-Unternehmen",
                type: "project",
                techs: ["C#", "Xamarin"],
            },
            {
                title:
                    "Mobile App für logistische Vorgänge mit RFID-Unterstützung (Wareneingang / Warenausgang)",
                type: "project",
                techs: ["C#", "Windows CE", "Xamarin"],
            },
        ],
    },
    {
        fromTo: "2014 - 2018",
        groupTitle: "Frontend Developer / Junior Backend Developer (sys-pro GmbH)",
        projects: [
            {
                title: "Fernschule (SGD) 1 Jahr Android Development",
                type: "education",
                techs: ["Android"],
            },
            {
                title: "dezentrale Offline-Ready Mobile App zur Preis-Etikettierung",
                type: "project",
                techs: ["C#", "Windows CE"],
            },
            {
                title:
                    "Mobile App zur Bestandserfassung / Inventur mit RFID-Technologie",
                type: "project",
                techs: ["C#", "Windows CE"],
            },
        ],
    },
];