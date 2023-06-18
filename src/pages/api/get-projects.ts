import type { NextApiRequest, NextApiResponse } from 'next'

import { ProjectData } from '../../types/IProject'
import { projects } from './data/projects';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectData>
) {

  const tools = [{
    id: 'react',
    image: '/images/react.png',
    name: 'React'
  },
  {
    id: 'nextjs',
    image: '/images/nextjs.png',
    name: 'Next.js'
  },
  {
    id: 'php',
    image: '/images/php.png',
    name: 'PHP'
  },
  {
    id: 'tailwind',
    image: '/images/tailwind.png',
    name: 'Tailwind CSS'
  },];


  res.status(200).json(projects)
}
