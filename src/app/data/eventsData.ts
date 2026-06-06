export interface EventModel {
  id: string;
  title: string;
  tagline: string;
  time: string;
  venue: string;
  description: string;
  rules: string[];
  prize: string;
  image: string;
}

export interface ClubModel {
  id: string;
  name: string;
  nameJp: string;
  description: string;
  image: string;
  events: EventModel[];
}

export const clubsData: ClubModel[] = [
  {
    id: "music",
    name: "Music Club",
    nameJp: "音楽部",
    description: "Harmony in every note. Details to be decided.",
    image: "/music_club.png",
    events: [
      {
        id: "music-tbd",
        title: "Music Event - TBD",
        tagline: "To be decided",
        time: "TBD",
        venue: "TBD",
        description: "Event details are currently under planning and will be announced soon.",
        prize: "TBD",
        image: "/MusicCardBackground.png",
        rules: ["Rules and guidelines will be shared soon."]
      }
    ]
  },
  {
    id: "dance",
    name: "Dance Club",
    nameJp: "舞踊部",
    description: "Move. Express. Perform. Details to be decided.",
    image: "/dance_club.png",
    events: [
      {
        id: "dance-tbd",
        title: "Dance Event - TBD",
        tagline: "To be decided",
        time: "TBD",
        venue: "TBD",
        description: "Event details are currently under planning and will be announced soon.",
        prize: "TBD",
        image: "/dance_club.png",
        rules: ["Rules and guidelines will be shared soon."]
      }
    ]
  },
  {
    id: "drama",
    name: "Drama Club",
    nameJp: "演劇部",
    description: "Performance, expression, and storytelling. Details to be decided.",
    image: "/drama_club.png",
    events: [
      {
        id: "drama-tbd",
        title: "Drama Event - TBD",
        tagline: "To be decided",
        time: "TBD",
        venue: "TBD",
        description: "Event details are currently under planning and will be announced soon.",
        prize: "TBD",
        image: "/drama_club.png",
        rules: ["Rules and guidelines will be shared soon."]
      }
    ]
  },
  {
    id: "photography",
    name: "Photography Club",
    nameJp: "写真部",
    description: "Capturing moments and shifting perspectives. Details to be decided.",
    image: "/photography_club.png",
    events: [
      {
        id: "photo-tbd",
        title: "Photography Event - TBD",
        tagline: "To be decided",
        time: "TBD",
        venue: "TBD",
        description: "Event details are currently under planning and will be announced soon.",
        prize: "TBD",
        image: "/photography_club.png",
        rules: ["Rules and guidelines will be shared soon."]
      }
    ]
  },
  {
    id: "design",
    name: "Design Club",
    nameJp: "美術設計部",
    description: "Ideas shaped into visual assets. Details to be decided.",
    image: "/design_club.png",
    events: [
      {
        id: "design-tbd",
        title: "Design Event - TBD",
        tagline: "To be decided",
        time: "TBD",
        venue: "TBD",
        description: "Event details are currently under planning and will be announced soon.",
        prize: "TBD",
        image: "/design_club.png",
        rules: ["Rules and guidelines will be shared soon."]
      }
    ]
  },
  {
    id: "literary",
    name: "Literary Club",
    nameJp: "文芸部",
    description: "Poetry, prose, and intellectual expression. Details to be decided.",
    image: "/literary_club.png",
    events: [
      {
        id: "literary-tbd",
        title: "Literary Event - TBD",
        tagline: "To be decided",
        time: "TBD",
        venue: "TBD",
        description: "Event details are currently under planning and will be announced soon.",
        prize: "TBD",
        image: "/literary_club.png",
        rules: ["Rules and guidelines will be shared soon."]
      }
    ]
  }
];

export function getEventById(id: string): EventModel | undefined {
  for (const club of clubsData) {
    const event = club.events.find(e => e.id === id);
    if (event) return event;
  }
  return undefined;
}
