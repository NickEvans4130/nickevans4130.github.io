// ============================================
// CONTENT CONFIGURATION
// Edit this file to update your portfolio
// ============================================

const CONTENT = {
  // Personal Information
  personal: {
    name: "Nick Evans",
    role: "MSci Computer Science @ Royal Holloway | Cybersecurity & OSINT",
    bio: "Currently a first year MSci Computer Science with Cyber Security at Royal Holloway, University of London. Looking to compete in more CTF challenges and build home lab projects, passionate about threat detection and protection.",
    email: "contact@nickevans.dev", // Update with your real email
    socials: {
      github: "https://github.com/NickEvans4130",
      linkedin: "https://www.linkedin.com/in/nick-evans-893593243/",
      twitter: "https://x.com/NickEvansCS"
    }
  },
  
  // Skills Matrix
  skills: [
    { 
      category: "Security", 
      items: ["Threat Detection", "OSINT", "Network Security", "Incident Response"] 
    },
    { 
      category: "Languages", 
      items: ["Python", "JavaScript", "Bash", "SQL"] 
    },
    { 
      category: "Tools", 
      items: ["Wireshark", "Nmap", "Burp Suite", "Metasploit"] 
    },
    { 
      category: "Platforms", 
      items: ["Linux", "Windows", "Docker", "Git"] 
    }
  ],
  
  // CTF Platform Statistics
  ctfStats: {
    platforms: [
      {
        name: "TryHackMe",
        rank: "Beginner",
        roomsCompleted: 12,
        streak: 5,
        profileUrl: "https://tryhackme.com/p/YourUsername", // Update with your profile
        color: "text-red-400"
      },
      {
        name: "HackTheBox",
        rank: "Script Kiddie",
        boxesPwned: 3,
        challenges: 8,
        profileUrl: "https://app.hackthebox.com/profile/YourID", // Update with your profile
        color: "text-green-400"
      },
      {
        name: "PicoCTF",
        points: 1250,
        solved: 15,
        profileUrl: "https://play.picoctf.org/users/YourUsername", // Update with your profile
        color: "text-blue-400"
      }
    ],
    recentAchievements: [
      { 
        title: "Completed Advent of Cyber 2024", 
        platform: "TryHackMe", 
        date: "2024-12-25" 
      },
      { 
        title: "First Root on HTB", 
        platform: "HackTheBox", 
        date: "2025-01-10" 
      },
      { 
        title: "Top 10% in PicoCTF", 
        platform: "PicoCTF", 
        date: "2024-11-15" 
      }
    ]
  },
  
  // Projects Portfolio
  projects: [
    {
      id: 1,
      title: "Network Traffic Analyzer",
      description: "Python-based packet analysis tool for detecting anomalies in network traffic patterns.",
      tech: ["Python", "Scapy", "Pandas"],
      github: "https://github.com/NickEvans4130/network-analyzer",
      status: "In Progress"
    },
    {
      id: 2,
      title: "CTF Toolkit",
      description: "Collection of scripts and utilities for common CTF challenges including crypto, forensics, and web exploitation.",
      tech: ["Python", "Bash", "Docker"],
      github: "https://github.com/NickEvans4130/ctf-toolkit",
      status: "Active"
    }
    // Add more projects here
  ],
  
  // Blog Posts & Write-ups
  blogPosts: [
    {
      id: 1,
      title: "Getting Started with Home Lab Setup",
      date: "2025-01-15",
      excerpt: "A beginner's guide to setting up your first cybersecurity home lab using VirtualBox and Kali Linux.",
      tags: ["Home Lab", "Tutorial", "Beginner"],
      readTime: "8 min",
      link: "#" // Add link when post is published
    },
    {
      id: 2,
      title: "TryHackMe: Blue Room Walkthrough",
      date: "2025-01-10",
      excerpt: "Complete walkthrough of the Blue room on TryHackMe, covering EternalBlue exploitation and Windows privilege escalation.",
      tags: ["CTF", "Windows", "Exploitation"],
      readTime: "12 min",
      link: "#" // Add link when post is published
    }
    // Add more blog posts here
  ]
};

// ============================================
// HOW TO UPDATE YOUR PORTFOLIO:
// ============================================

/*

1. ADD A NEW PROJECT:
   Copy this template and add it to the projects array:

   {
     id: 3,
     title: "SIEM Home Lab",
     description: "Built a Security Information and Event Management system using Splunk and Sysmon.",
     tech: ["Splunk", "Sysmon", "Windows"],
     github: "https://github.com/NickEvans4130/siem-lab",
     status: "Completed"
   }

2. ADD A NEW BLOG POST:
   Copy this template and add it to the blogPosts array:

   {
     id: 3,
     title: "OSINT Techniques for Cybersecurity",
     date: "2025-02-01",
     excerpt: "Exploring open-source intelligence gathering methods...",
     tags: ["OSINT", "Investigation", "Tools"],
     readTime: "10 min",
     link: "https://yourblog.com/osint-techniques"
   }

3. UPDATE CTF STATS:
   Simply change the numbers in the ctfStats section:
   - roomsCompleted: 15
   - boxesPwned: 5
   - etc.

4. ADD NEW SKILLS:
   Add items to any category or create a new category:

   {
     category: "Cloud",
     items: ["AWS", "Azure", "GCP"]
   }

5. ADD CTF ACHIEVEMENTS:
   Add to the recentAchievements array:

   {
     title: "Completed OWASP Top 10 Path",
     platform: "TryHackMe",
     date: "2025-02-01"
   }

*/
