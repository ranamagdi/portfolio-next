const https = require('https');
const fs = require('fs');

https.get('https://ranamagdi.github.io/My-Portfolio/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const projectsSection = data.split('id="project"')[1];
    if (!projectsSection) return console.log('No projects section found');
    
    // Extract div cards
    const regex = /<div[^>]*class="project-box"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g;
    let match;
    const projects = [];
    
    while ((match = regex.exec(projectsSection)) !== null) {
      const content = match[1];
      
      const imgMatch = content.match(/<img[^>]*src="([^"]+)"/);
      const linkMatch = content.match(/<a[^>]*href="([^"]+)"/);
      const titleMatch = content.match(/<h4>([^<]+)<\/h4>/);
      
      projects.push({
        title: titleMatch ? titleMatch[1].trim() : 'Unknown Project',
        image: imgMatch ? 'https://ranamagdi.github.io/My-Portfolio/' + imgMatch[1] : null,
        link: linkMatch ? linkMatch[1] : null
      });
    }
    
    fs.writeFileSync('projects.json', JSON.stringify(projects, null, 2));
    console.log('Saved projects to projects.json');
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
