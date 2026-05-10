import { client } from './sanity.client';
import type { PersonalInfo, Skill, Project, Experience } from './types';

export async function getPersonalInfo(): Promise<PersonalInfo | null> {
  return client.fetch(
    `*[_type == "personalInfo"][0]{
      _id, name, title, shortBio, bio,
      location, email, phone, whatsapp, cvUrl,
      avatar, socialLinks
    }`
  );
}

export async function getSkills(): Promise<Skill[]> {
  return client.fetch(
    `*[_type == "skill"] | order(order asc){
      _id, category, items, order
    }`
  );
}

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    `*[_type == "project"] | order(order asc){
      _id, title, slug, description, image,
      techStack, liveUrl, repoUrl, featured, order
    }`
  );
}

export async function getExperiences(): Promise<Experience[]> {
  return client.fetch(
    `*[_type == "experience"] | order(order asc){
      _id, type, role, company, startDate, endDate,
      current, description, field, grade, highlights, order
    }`
  );
}
