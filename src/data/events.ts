export type EventType = "social" | "meeting" | "cultural" | "festival" | "volunteer";

export interface Event {
    id: number;
    title: string;
    date: string; // YYYY-MM-DD format for easy sorting
    time?: string;
    location: string;
    description: string;
    image: string;
    type: EventType;
    featured?: boolean;
}

export const EVENTS: Event[] = [
    // 2026 (Upcoming relative to Jan 14, 2026)
    {
        id: 1,
        title: "Republic Day Picnic",
        date: "2026-01-26",
        time: "11:00 AM",
        location: "Tribble Mill Park",
        description: "Join us for a patriotic celebration with flag hoisting, games, and a potluck lunch.",
        image: "/picnic_2023.png", // Using existing asset
        type: "social",
        featured: true
    },
    {
        id: 2,
        title: "Executive Committee Meeting",
        date: "2026-02-08",
        time: "2:00 PM",
        location: "AMMA Center",
        description: "Monthly meeting for committee members to discuss upcoming programs.",
        image: "/images/meeting.png", // Newly generated placeholder
        type: "meeting"
    },
    {
        id: 3,
        title: "Vishu Celebration 2026",
        date: "2026-04-14",
        time: "10:00 AM",
        location: "Berkmar High School",
        description: "Celebrate the Malayalam New Year with Sadya, cultural performances, and Vishu Kani.",
        image: "/vishu_2023.png", // Using existing asset
        type: "festival",
        featured: true
    },
    {
        id: 4,
        title: "Summer Volleyball Tournament",
        date: "2026-06-15",
        time: "9:00 AM",
        location: "Shorty Howell Park",
        description: "Annual inter-community volleyball tournament. Register your team now!",
        image: "/images/sports.png", // Newly generated placeholder
        type: "social"
    },

    // 2025 (Past)
    {
        id: 101,
        title: "Christmas Gala 2025",
        date: "2025-12-20",
        location: "Atlanta Event Hall",
        description: "A magical evening of carols, cakes, and cultural festivities.",
        image: "/images/christmas.png", // Existing asset
        type: "festival"
    },
    {
        id: 102,
        title: "Onam 2025",
        date: "2025-09-14",
        location: "Lilburn Middle School",
        description: "Grand Onam celebration with over 500 attendees.",
        image: "/images/onam.png", // Existing asset
        type: "festival"
    },
    {
        id: 103,
        title: "Summer Picnic '25",
        date: "2025-07-20",
        location: "Sims Lake Park",
        description: "Fun in the sun with barbecue and tug-of-war.",
        image: "/picnic_2023.png", // Existing asset
        type: "social"
    },
    {
        id: 104,
        title: "Vishu 2025",
        date: "2025-04-12",
        location: "Hindu Temple of Atlanta",
        description: "Traditional celebrations and cultural programs.",
        image: "/vishu_2023.png", // Existing asset
        type: "festival"
    }
];
