// ============================================
// CONTENT CONFIGURATION
// Edit this file to update your portfolio
// ============================================

const CONTENT = {
  // Personal Information
  personal: {
    name: "Nick Evans",
    role: "MSci Computer Science @ Royal Holloway | Cybersecurity & OSINT",
    bio: "First-year MSci Computer Science student at Royal Holloway. I specialize in OSINT and Geolocation, blending competitive gaming skills with cybersecurity tradecraft. Creator of Geonections and former Top 10 UK GeoGuessr player.",
    email: "contact@nickevans.dev", // Update with your real email
    socials: {
      github: "https://github.com/NickEvans4130",
      linkedin: "https://www.linkedin.com/in/nick-evans-893593243/",
      twitter: "https://x.com/NickEvansOSINT" // Updated to the handle we discussed
    }
  },
  
  // Skills Matrix
  skills: [
    { 
      category: "OSINT & Recon", 
      items: ["Geolocation", "IMINT (Image Intelligence)", "Public Records", "Social Media Investigation"] 
    },
    { 
      category: "Technical Security", 
      items: ["Network Traffic Analysis", "Web App Security (OWASP)", "Linux Command Line", "CTF Methodologies"] 
    },
    { 
      category: "Development", 
      items: ["Python", "JavaScript", "HTML/CSS", "React/Node.js"] 
    },
    { 
      category: "Soft Skills", 
      items: ["Team Leadership", "Problem Solving", "Technical Writing", "Project Management"] 
    }
  ],
  
  // CTF & Competitive Statistics
  ctfStats: {
    platforms: [
      {
        name: "GeoGuessr (UK)",
        rank: "#7 Peak",
        highlight: "Competitive",
        detail: "Top 10 UK Ranking",
        profileUrl: "#", 
        color: "text-yellow-400"
      },
      {
        name: "BAE Systems CTF",
        rank: "Winner",
        highlight: "1st Place",
        detail: "Capture The Flag",
        profileUrl: "#", 
        color: "text-red-500"
      },
      {
        name: "TryHackMe",
        rank: "Top 10%",
        roomsCompleted: 15,
        streak: 12,
        profileUrl: "https://tryhackme.com/p/YourUsername", 
        color: "text-green-400"
      }
    ],
    recentAchievements: [
      { 
        title: "1st Place - BAE Systems CTF", 
        platform: "Competition", 
        date: "2024-11-20" 
      },
      { 
        title: "Geonections Feature by Rainbolt", 
        platform: "Community", 
        date: "2024-10-15" 
      },
      { 
        title: "Homeland Security Certification", 
        platform: "Certification", 
        date: "2024-09-01" 
      }
    ]
  },
  
  // Projects Portfolio
  projects: [
    {
      id: 1,
      title: "Geonections.com",
      description: "A viral geolocation puzzle game widely adopted by the GeoGuessr community. Featured by content creators like Rainbolt, Zi8gzag, and Chicago Geographer.",
      tech: ["JavaScript", "Web Development", "Google Maps API"],
      github: "https://geonections.com/", // Linking to live site
      status: "Live"
    },
    {
      id: 2,
      title: "Python Port Scanner",
      description: "A custom command-line tool for network reconnaissance, capable of identifying open ports and service versions on target IP ranges.",
      tech: ["Python", "Socket Programming", "Networking"],
      github: "https://github.com/NickEvans4130/port-scanner", // Placeholder link
      status: "Completed"
    },
    {
      id: 3,
      title: "Cisco Work Experience Project",
      description: "Assisted with enterprise network projects during a placement at Cisco, gaining practical exposure to corporate network environments.",
      tech: ["Networking", "Enterprise Infrastructure", "Corporate Security"],
      github: "#",
      status: "Completed"
    }
  ],
  
  // Blog Posts & Write-ups
  blogPosts: [
    {
      id: 1,
      title: "Breaking Down the 'Just Deploy It' CTF Challenge",
      date: "2024-11-25",
      excerpt: "A deep dive into how I exploited a Django Debug Mode misconfiguration to reveal secret keys and win points in the BAE Systems CTF.",
      tags: ["CTF Write-up", "Web Security", "Django"],
      readTime: "6 min",
      link: "#" 
    },
    {
      id: 2,
      title: "Key Takeaways from OWASP London Chapter",
      date: "2024-11-10",
      excerpt: "Insights on the latest web vulnerabilities discuss at the recent OWASP London meetup and how they apply to modern dev-sec-ops.",
      tags: ["Events", "Networking", "OWASP"],
      readTime: "4 min",
      link: "#" 
    },
    {
      id: 3,
      title: "Geolocation Case Study: Finding the Unfindable",
      date: "2024-10-30",
      excerpt: "A step-by-step walkthrough of how I used sun analysis and infrastructure markers to pinpoint a location in rural Brazil.",
      tags: ["OSINT", "Geolocation", "Case Study"],
      readTime: "8 min",
      link: "#" 
    },
    {
      id: 4,
      title: "From eSwatini to Cyber: Lessons in Leadership",
      date: "2024-09-15",
      excerpt: "Reflecting on my World Challenge volunteer trip and how managing team dynamics in high-pressure environments translates to Incident Response.",
      tags: ["Soft Skills", "Leadership", "Personal"],
      readTime: "5 min",
      link: "#" 
    }
  ]
};
