import projectsConfig from '@/config/projects.json';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  client: string;
  location: string;
  year: string;
  summary: string;
  metrics: string;
  tags: string[];
  deliverables: string[];
  visualType: 'merchant';
}

// All project records are loaded directly from src/config/projects.json
export const PROJECTS_DATA: ProjectItem[] = projectsConfig.projects as ProjectItem[];
