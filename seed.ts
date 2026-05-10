import { getCliClient } from 'sanity/cli';

const client = getCliClient();

const projects = [
  { title: 'JomaCake', tech: 'Vue.js', live: 'https://jomacake.com/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-13.png' },
  { title: 'Point Blank Communications', tech: 'React.js', live: 'https://pbc-eg.com/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-4.png' },
  { title: 'Rafiq Dashboard', tech: 'React + TypeScript', live: 'https://rafiq-dashboard-project.vercel.app/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-18.png' },
  { title: 'HMA Consultants', tech: 'WordPress', live: 'https://hma-consultants.ae/en/home/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-16.png' },
  { title: 'Bobinn', tech: 'Vue.js', live: 'https://cafvy.web-pioneer.cloud/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-14.png' },
  { title: 'Web Pioneer', tech: 'Frontend (Laravel Blade)', live: 'https://web-pioneer.com/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-15.png' },
  { title: 'Al-Bokor', tech: 'WordPress', live: 'https://albokor.com/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-17.png' },
  { title: 'Export PBC', tech: 'WordPress', live: 'http://export.pbc-eg.com/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-1.png' },
  { title: 'Sef learn', tech: 'React.js', live: 'https://www.seflearn.com/', img: 'https://ranamagdi.github.io/My-Portfolio/img/project-5.png' }
];

async function seed() {
  console.log('Fetching existing documents...');
  const existingDocs = await client.fetch('*[_type in ["personalInfo", "skill", "experience", "project"]][]._id');
  for (const id of existingDocs) {
    await client.delete(id);
  }
  console.log('Cleared existing data.');

  console.log('Seeding Personal Info...');
  await client.create({
    _type: 'personalInfo',
    name: 'Rana Magdy',
    title: 'Frontend Developer',
    shortBio: 'Frontend Developer focused on building scalable, high-performance applications using React and Vue ecosystems. Passionate about clean architecture, performance optimization, and crafting seamless user experiences.',
    bio: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: 'Frontend Developer with 3 years of experience building and scaling high-performance web applications using Vue and React. Delivered complex e-commerce platforms, dashboards, and admin systems, with hands-on expertise in real-time chat architectures, secure authentication flows (including 2FA), and AI-driven features integrated into user-facing products. Strong focus on performance optimization, scalable architecture, and writing clean, maintainable code for production environments.',
          },
        ],
      },
    ],
    location: 'Nasr City, Cairo - Egypt',
    email: 'ranagrida@gmail.com',
    phone: '+20 106 213 7641',
    whatsapp: '+20 106 213 7641',
    cvUrl: 'https://ranamagdi.github.io/My-Portfolio/Rana_Magdy_Resume.pdf',
    socialLinks: [
      { _type: 'object', _key: 'github', platform: 'GitHub', url: 'https://github.com/ranamagdi', icon: 'github' },
      { _type: 'object', _key: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/in/rana-magdi-4aa5401b0', icon: 'linkedin' }
    ]
  });

  console.log('Seeding Skills...');
  const skillsData = [
    { category: 'Languages & Core', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'], order: 1 },
    { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Vue', 'Nuxt', 'Redux', 'Zustand', 'Zod', 'React Hook Form', 'Vuex', 'Pinia', 'jQuery'], order: 2 },
    { category: 'Styling & UI', items: ['Bootstrap', 'Tailwind CSS', 'Material UI', 'Vuetify', 'Sass'], order: 3 },
    { category: 'Architecture & Concepts', items: ['OOP', 'SOLID Principles', 'Scalable Architecture', 'Performance Optimization', 'Responsive Design', 'Multi-language (i18n)'], order: 4 },
    { category: 'Features & Systems', items: ['Real-time Chat Systems', 'Authentication & Authorization (2FA)', 'Payment Integration', 'Maps Integration', 'AI-powered Features'], order: 5 },
    { category: 'Tools & Integrations', items: ['Firebase', 'Stripe', 'Maps APIs'], order: 6 },
    { category: 'Testing', items: ['Cypress (End-to-End Testing)'], order: 7 },
    { category: 'Workflow & CMS', items: ['Git', 'GitHub', 'Agile Methodologies', 'WordPress'], order: 8 },
  ];
  for (const skill of skillsData) {
    await client.create({ _type: 'skill', ...skill });
  }

  console.log('Seeding Experience & Education...');
  const experienceData = [
    {
      _type: 'experience',
      type: 'work',
      role: 'Frontend Developer',
      company: 'Web Pioneer',
      startDate: '09/2024',
      endDate: '03/2026',
      current: false,
      order: 1,
      description: [{ _type: 'block', children: [{ _type: 'span', text: 'Worked on multiple web projects...' }] }],
      highlights: [
        'Implemented real-time chat systems and AI-powered features',
        'Built secure authentication systems, including Two-Factor Authentication (2FA)',
        'Integrated Firebase, Stripe, and Maps APIs',
        'Developed multi-language (i18n) applications',
        'Ensured performance optimization and scalable architecture'
      ]
    },
    {
      _type: 'experience',
      type: 'work',
      role: 'Frontend Developer',
      company: 'Point Blank Communications',
      startDate: '10/2023',
      endDate: '07/2024',
      current: false,
      order: 2,
      description: [{ _type: 'block', children: [{ _type: 'span', text: 'Worked on multiple web projects...' }] }],
      highlights: [
        'Developed and maintained the company website using React, ensuring high performance and clean architecture.',
        'Built a courses platform using Nuxt.js and Pinia, implementing efficient state management and dynamic content delivery.',
        'Created administrative dashboards with Nuxt.js, focusing on data visualization and usability.',
        'Designed and customized the Maad Tourism website using WordPress, tailoring themes and functionality to meet business needs.'
      ]
    },
    {
      _type: 'experience',
      type: 'education',
      role: 'Bachelor of Engineering',
      company: 'Ain Shams University',
      startDate: '2017',
      endDate: '2022',
      current: false,
      field: 'Computer & Systems Engineering',
      grade: 'Very Good',
      order: 3
    },
    {
      _type: 'experience',
      type: 'education',
      role: 'Full Stack Diploma',
      company: 'Array Training',
      startDate: '2022',
      endDate: '2023',
      current: false,
      description: [{ _type: 'block', children: [{ _type: 'span', text: 'Covered React, APIs, PHP, Laravel, and databases.' }] }],
      order: 4
    }
  ];
  for (const exp of experienceData) {
    await client.create(exp as any);
  }

  console.log('Seeding Projects...');
  for (let i = 0; i < projects.length; i++) {
    const proj = projects[i];
    console.log(`Uploading image for ${proj.title}...`);
    let imageAsset = null;
    try {
      const response = await fetch(proj.img);
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      imageAsset = await client.assets.upload('image', buffer, { filename: `project-${i}.png` });
    } catch (err) {
      console.log(`Failed to upload image for ${proj.title}: ${err}`);
    }

    await client.create({
      _type: 'project',
      title: proj.title,
      slug: { _type: 'slug', current: proj.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') },
      description: `A project built with ${proj.tech}.`,
      techStack: [proj.tech],
      liveUrl: proj.live,
      order: i + 1,
      ...(imageAsset && {
        image: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id }
        }
      })
    });
  }

  console.log('Seed completed successfully!');
}

seed().catch(console.error);
