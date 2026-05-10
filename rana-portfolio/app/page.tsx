import { getPersonalInfo, getSkills, getProjects, getExperiences } from '@/lib/sanity.queries';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

// Revalidate every 60 seconds (ISR)
export const revalidate = 60;

export default async function HomePage() {
  // Fetch all content from Sanity in parallel
  const [personalInfo, skills, projects, experiences] = await Promise.all([
    getPersonalInfo(),
    getSkills(),
    getProjects(),
    getExperiences(),
  ]);

  return (
    <>
      <HeroSection personalInfo={personalInfo} />
      <AboutSection personalInfo={personalInfo} skills={skills} />
      <ProjectsSection projects={projects} />
      <ExperienceSection experiences={experiences} />
      <ContactSection personalInfo={personalInfo} />
    </>
  );
}
