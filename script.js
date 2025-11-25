// ============================================
// PORTFOLIO RENDERING SCRIPT
// Don't edit this file unless you want to change the layout
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  renderHero();
  renderAbout();
  renderCTFStats();
  renderProjects();
  renderBlog();
  renderContact();
  renderFooter();
});

// Render Hero Section
function renderHero() {
  document.getElementById('hero-name').textContent = CONTENT.personal.name;
  document.getElementById('hero-role').textContent = CONTENT.personal.role;
  
  const socialLinks = document.getElementById('social-links');
  
  const socials = [
    { url: CONTENT.personal.socials.github, icon: 'github', label: 'GitHub' },
    { url: CONTENT.personal.socials.linkedin, icon: 'linkedin', label: 'LinkedIn' },
    { url: CONTENT.personal.socials.twitter, icon: 'twitter', label: 'Twitter' }
  ];
  
  socials.forEach(social => {
    const link = document.createElement('a');
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.className = 'p-3 bg-slate-800 hover:bg-slate-700 rounded-lg transition-all duration-300 hover:scale-110 glow';
    link.innerHTML = getSocialIcon(social.icon);
    link.setAttribute('aria-label', social.label);
    socialLinks.appendChild(link);
  });
}

// Render About Section
function renderAbout() {
  document.getElementById('bio-text').textContent = CONTENT.personal.bio;
  
  const skillsContainer = document.getElementById('skills-container');
  CONTENT.skills.forEach(skillSet => {
    const div = document.createElement('div');
    div.innerHTML = `
      <h4 class="text-cyan-400 font-bold mb-2">${skillSet.category}:</h4>
      <div class="flex flex-wrap gap-2">
        ${skillSet.items.map(skill => `
          <span class="px-3 py-1 bg-slate-800 text-slate-300 rounded text-sm border border-slate-700">
            ${skill}
          </span>
        `).join('')}
      </div>
    `;
    skillsContainer.appendChild(div);
  });
}

// Render CTF Stats Section
function renderCTFStats() {
  const platformsContainer = document.getElementById('ctf-platforms');
  
  CONTENT.ctfStats.platforms.forEach(platform => {
    const card = document.createElement('div');
    card.className = 'bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10';
    
    let statsHTML = '';
    
    if (platform.rank) {
      statsHTML += `
        <div class="flex justify-between items-center">
          <span class="text-slate-400 text-sm">Rank:</span>
          <span class="text-slate-200 font-bold">${platform.rank}</span>
        </div>
      `;
    }
    
    if (platform.roomsCompleted) {
      statsHTML += `
        <div class="flex justify-between items-center">
          <span class="text-slate-400 text-sm">Rooms:</span>
          <span class="text-green-400 font-bold">${platform.roomsCompleted}</span>
        </div>
      `;
    }
    
    if (platform.streak) {
      statsHTML += `
        <div class="flex justify-between items-center">
          <span class="text-slate-400 text-sm flex items-center">
            <svg class="w-4 h-4 mr-1 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7S9.3 6.2 9.3 4.7C9.3 3.2 10.5 2 12 2zm0 19c-3.9 0-7-3.1-7-7 0-1.4.4-2.7 1.1-3.8.2-.3.6-.5 1-.5.2 0 .4.1.6.2.4.3.6.9.3 1.4-.5.8-.7 1.7-.7 2.7 0 2.8 2.2 5 5 5s5-2.2 5-5c0-1-.3-1.9-.7-2.7-.3-.5-.1-1.1.3-1.4.2-.1.4-.2.6-.2.4 0 .8.2 1 .5.7 1.1 1.1 2.4 1.1 3.8 0 3.9-3.1 7-7 7z"/>
            </svg>
            Streak:
          </span>
          <span class="text-orange-400 font-bold">${platform.streak} days</span>
        </div>
      `;
    }
    
    if (platform.boxesPwned) {
      statsHTML += `
        <div class="flex justify-between items-center">
          <span class="text-slate-400 text-sm">Boxes Pwned:</span>
          <span class="text-green-400 font-bold">${platform.boxesPwned}</span>
        </div>
      `;
    }
    
    if (platform.challenges) {
      statsHTML += `
        <div class="flex justify-between items-center">
          <span class="text-slate-400 text-sm">Challenges:</span>
          <span class="text-cyan-400 font-bold">${platform.challenges}</span>
        </div>
      `;
    }
    
    if (platform.points) {
      statsHTML += `
        <div class="flex justify-between items-center">
          <span class="text-slate-400 text-sm">Points:</span>
          <span class="text-cyan-400 font-bold">${platform.points}</span>
        </div>
      `;
    }
    
    if (platform.solved) {
      statsHTML += `
        <div class="flex justify-between items-center">
          <span class="text-slate-400 text-sm">Solved:</span>
          <span class="text-green-400 font-bold">${platform.solved}</span>
        </div>
      `;
    }
    
    card.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-xl font-bold ${platform.color}">${platform.name}</h3>
        <svg class="w-6 h-6 ${platform.color}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
        </svg>
      </div>
      <div class="space-y-3 mb-4">
        ${statsHTML}
      </div>
      <a href="${platform.profileUrl}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span>View Profile</span>
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    `;
    
    platformsContainer.appendChild(card);
  });
  
  // Render achievements
  const achievementsContainer = document.getElementById('ctf-achievements');
  CONTENT.ctfStats.recentAchievements.forEach(achievement => {
    const div = document.createElement('div');
    div.className = 'flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors';
    div.innerHTML = `
      <div class="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-cyan-400"></div>
      <div class="flex-1">
        <h4 class="text-slate-100 font-bold mb-1">${achievement.title}</h4>
        <div class="flex flex-wrap gap-2 text-sm">
          <span class="text-cyan-400">${achievement.platform}</span>
          <span class="text-slate-500">•</span>
          <span class="text-slate-500">${achievement.date}</span>
        </div>
      </div>
    `;
    achievementsContainer.appendChild(div);
  });
}

// Render Projects Section
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  CONTENT.projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group';
    
    card.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
          ${project.title}
        </h3>
        <span class="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded">
          ${project.status}
        </span>
      </div>
      
      <p class="text-slate-400 mb-4">${project.description}</p>
      
      <div class="flex flex-wrap gap-2 mb-4">
        ${project.tech.map(tech => `
          <span class="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
            ${tech}
          </span>
        `).join('')}
      </div>
      
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm">
        ${getGithubIcon()}
        <span>View on GitHub</span>
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    `;
    
    projectsGrid.appendChild(card);
  });
}

// Render Blog Section
function renderBlog() {
  const blogPosts = document.getElementById('blog-posts');
  
  CONTENT.blogPosts.forEach(post => {
    const article = document.createElement('article');
    article.className = 'bg-slate-900 p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group cursor-pointer';
    
    article.innerHTML = `
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
        <h3 class="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-2 sm:mb-0">
          ${post.title}
        </h3>
        <span class="text-slate-500 text-sm whitespace-nowrap">
          ${post.date} • ${post.readTime}
        </span>
      </div>
      
      <p class="text-slate-400 mb-4">${post.excerpt}</p>
      
      <div class="flex flex-wrap gap-2">
        ${post.tags.map(tag => `
          <span class="px-3 py-1 bg-slate-800 text-green-400 text-xs rounded border border-slate-700">
            #${tag}
          </span>
        `).join('')}
      </div>
    `;
    
    if (post.link && post.link !== '#') {
      article.onclick = () => window.open(post.link, '_blank');
    }
    
    blogPosts.appendChild(article);
  });
}

// Render Contact Section
function renderContact() {
  const emailLink = document.getElementById('email-link');
  emailLink.href = `mailto:${CONTENT.personal.email}`;
}

// Render Footer
function renderFooter() {
  const footerText = document.getElementById('footer-text');
  footerText.textContent = `© 2025 ${CONTENT.personal.name} | Built with HTML, CSS & JavaScript`;
}

// Helper Functions
function getSocialIcon(type) {
  const icons = {
    github: `<svg class="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
    linkedin: `<svg class="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    twitter: `<svg class="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
  };
  return icons[type] || '';
}

function getGithubIcon() {
  return `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
}
