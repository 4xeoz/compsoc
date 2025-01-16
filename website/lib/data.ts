export interface EventDataSchem {
    EventName: string;
    EventPicture: string;
    EventDescription: string;
    EventDate: string;
    EventStartTime: string;
    EventLocation: string;
    EventEndTime: string;
}

export const EventData: EventDataSchem[] = [
    {
        EventName: "Tech Conference 2023",
        EventPicture: "https://picsum.photos/800/600?random=1",
        EventDescription: "Join us for the latest in technology. This event will feature keynote speeches, panel discussions, and networking opportunities with professionals from various tech indust.",
        EventDate: "2025-10-01",
        EventStartTime: "10:00 AM",
        EventLocation: "EAP",
        EventEndTime: "12:00 PM",
    },
    {
        EventName: "AI & Machine Learning Summit",
        EventPicture: "https://picsum.photos/800/600?random=2",
        EventDescription: "Explore the advancements in AI and Machine Learning with experts from around the world. This summit will cover a wi",
        EventDate: "2023-10-02",
        EventStartTime: "11:00 AM",
        EventLocation: "Tech Park",
        EventEndTime: "01:00 PM", 
    },
    {
        EventName: "Startup Pitch Night",
        EventPicture: "https://picsum.photos/800/600?random=3",
        EventDescription: "Watch startups pitch their innovative ideas to a panel of investors. This event provides a platform for entrepreneurs to showcase. Attendees will witness a variet",
        EventDate: "2023-10-03",
        EventStartTime: "09:00 AM",
        EventLocation: "Innovation Hub",
        EventEndTime: "11:00 AM",
    },
    {
        EventName: "Startup Pitch Night",
        EventPicture: "https://picsum.photos/800/600?random=3",
        EventDescription: "Watch startups pitch their innovative ideas to a panel of investors. This event provides a platform for entrepreneurs to showcase. Attendees will witness a variet",
        EventDate: "2023-10-03",
        EventStartTime: "09:00 AM",
        EventLocation: "Innovation Hub",
        EventEndTime: "11:00 AM",
    },
    {
        EventName: "Startup Pitch Night",
        EventPicture: "https://picsum.photos/800/600?random=3",
        EventDescription: "Watch startups pitch their innovative ideas to a panel of investors. This event provides a platform for entrepreneurs to showcase. Attendees will witness a variet",
        EventDate: "2023-10-03",
        EventStartTime: "09:00 AM",
        EventLocation: "Innovation Hub",
        EventEndTime: "11:00 AM",
    },
    {
        EventName: "Startup Pitch Night",
        EventPicture: "https://picsum.photos/800/600?random=3",
        EventDescription: "Watch startups pitch their innovative ideas to a panel of investors. This event provides a platform for entrepreneurs to showcase. Attendees will witness a variet",
        EventDate: "2023-10-03",
        EventStartTime: "09:00 AM",
        EventLocation: "Innovation Hub",
        EventEndTime: "11:00 AM",
    },
];

export const OrganisationLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/6/6a/Apple_logo_black.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/0e/Spotify_logo_with_text.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/1b/Netflix_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Twitter_Logo_Blue.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/7e/Instagram_logo_2016.svg",
];



export interface TeamMember {
    roleName: string;
    picture: string;
    fullName: string;
    linkedin: string;
    website: string;
    instagram: string;
  }
  
  export interface TeamDataEntry {
    year: number;
    members: TeamMember[];
  }
  
  export const TeamData: TeamDataEntry[] = [
    {
      year: 2023,
      members: [
        {
          roleName: "President",
          picture: "https://picsum.photos/200/300?random=1",
          fullName: "Alice Johnson",
          linkedin: "https://www.linkedin.com/in/alicejohnson",
          website: "https://alicejohnson.com",
          instagram: "https://www.instagram.com/alicejohnson",
        },
        {
          roleName: "Vice President",
          picture: "https://picsum.photos/200/300?random=2",
          fullName: "Bob Smith",
          linkedin: "https://www.linkedin.com/in/bobsmith",
          website: "https://bobsmith.com",
          instagram: "https://www.instagram.com/bobsmith",
        },
        {
          roleName: "Secretary",
          picture: "https://picsum.photos/200/300?random=5",
          fullName: "Evelyn Turner",
          linkedin: "https://www.linkedin.com/in/evelynturner",
          website: "https://evelynturner.com",
          instagram: "https://www.instagram.com/evelynturner",
        },
        {
          roleName: "Treasurer",
          picture: "https://picsum.photos/200/300?random=6",
          fullName: "Frank Lee",
          linkedin: "https://www.linkedin.com/in/franklee",
          website: "https://franklee.com",
          instagram: "https://www.instagram.com/franklee",
        },
        {
          roleName: "Event Coordinator",
          picture: "https://picsum.photos/200/300?random=7",
          fullName: "Grace Hopper",
          linkedin: "https://www.linkedin.com/in/gracehopper",
          website: "https://gracehopper.com",
          instagram: "https://www.instagram.com/gracehopper",
        },
      ],
    },
    {
      year: 2022,
      members: [
        {
          roleName: "President",
          picture: "https://picsum.photos/200/300?random=3",
          fullName: "Charlie Brown",
          linkedin: "https://www.linkedin.com/in/charliebrown",
          website: "https://charliebrown.com",
          instagram: "https://www.instagram.com/charliebrown",
        },
        {
          roleName: "Vice President",
          picture: "https://picsum.photos/200/300?random=4",
          fullName: "Diana Prince",
          linkedin: "https://www.linkedin.com/in/dianaprince",
          website: "https://dianaprince.com",
          instagram: "https://www.instagram.com/dianaprince",
        },
        {
          roleName: "Secretary",
          picture: "https://picsum.photos/200/300?random=8",
          fullName: "Henry Ford",
          linkedin: "https://www.linkedin.com/in/henryford",
          website: "https://henryford.com",
          instagram: "https://www.instagram.com/henryford",
        },
        {
          roleName: "Treasurer",
          picture: "https://picsum.photos/200/300?random=9",
          fullName: "Ivy Watson",
          linkedin: "https://www.linkedin.com/in/ivywatson",
          website: "https://ivywatson.com",
          instagram: "https://www.instagram.com/ivywatson",
        },
        {
          roleName: "Event Coordinator",
          picture: "https://picsum.photos/200/300?random=10",
          fullName: "Jack Ryan",
          linkedin: "https://www.linkedin.com/in/jackryan",
          website: "https://jackryan.com",
          instagram: "https://www.instagram.com/jackryan",
        },
      ],
    },
  ];
  