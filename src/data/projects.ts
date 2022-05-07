export interface ProjectData {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const PROJECTS: ProjectData[] = [
  {
    title: 'MKDview',
    description: 'A Markdown editor.',
    image: '/icons/mkdview-icon.svg',
    url: 'https://mkdview.vercel.app'
  },
  {
    title: 'Space Tourism',
    description: 'A tour to the outer space.',
    image: '/icons/space-tourism-icon.svg',
    url: 'https://spacetourismwk.vercel.app'
  },
  {
    title: 'Advice Gen',
    description: 'An advice generator app.',
    image: '/icons/advicegen-icon.svg',
    url: 'https://advicegenwk.vercel.app'
  },
  {
    title: 'JSThoughts',
    description: 'My personal blog.',
    image: '/icons/jsthoughts-icon.svg',
    url: 'https://jsthoughts.vercel.app'
  },
  {
    title: 'Devideas',
    description: 'A web app ideas management app.',
    image: '/icons/devideas-icon.svg',
    url: 'https://dev-ideas.vercel.app'
  }
];
