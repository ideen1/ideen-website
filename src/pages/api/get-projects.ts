import type { NextApiRequest, NextApiResponse } from 'next'

import { ProjectData } from '../../types/IProject'


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

  res.status(200).json({
    tools: [


    ],
    projects: [

      {
        title: 'KoolTickets',
        description: 'Movie ticket booking app with focus on design patterns and PHP',
        image: '/project-images/kooltickets.png',
        link: 'https://google.com',
        tools: ['php', 'tailwind', 'react']

      },
      {
        title: 'Equa',
        description: 'Chrome extension/web portal with a goal to increase donations through everyday shopping',
        image: '/project-images/equa.png',
        link: 'https://google.com'
      },
      {
        title: '',
        description: 'A Patient Information System with a focus on transactional SQL and responsive design',
        image: '/images/1.jpg',
        link: 'https://github.com/ideen1/cpsc471-project'
      },
      {
        title: 'SnapShare',
        description: 'A photo sharing platform with a custom written uploader and image optimization.',
        image: '/images/2.jpg',
        link: 'https://google.com'
      },
      {
        title: 'Authentify',
        description: 'Turnkey authentication solution for web applications to integrate with third-party providers including Google, Facebook and Apple.',
        image: '/images/1.jpg',
        link: 'https://google.com'
      },
      {
        title: 'Food Bank Optimizer',
        description: 'This Java app uses a combination-based algorithm to optimize food supply amongst hampers',
        image: '/images/2.jpg',
        link: 'https://github.com/ideen1/ENSF409-FinalProject'
      },
      {
        title: 'MySmartCloset',
        description: 'Application which uses weather APIs along with colour matching to choose the best outfit for the day.',
        image: '/images/1.jpg',
        link: 'https://google.com'
      },
      {
        title: 'LinkUp',
        description: 'Social platform for people to coordinate schedules and find times to meet',
        image: '/images/2.jpg',
        link: 'linkup.ideen.ca'
      },
      {
        title: 'Meni',
        description: 'Digital menu platform for small business owners currently surving over a dozen clients',
        image: '/images/2.jpg',
        link: 'meniapp.ca'
      },
      {
        title: 'Home Assistant',
        description: 'Contributed interface improvements to the open source project Home Assistant, a home automation platform running on Python',
        image: '/images/2.jpg',
        link: 'linkup.ideen.ca'
      },
      {
        title: 'WLED',
        description: 'Numerous enhancements allowing side channel relay control for large lighting displays',
        image: '/images/2.jpg',
        link: 'linkup.ideen.ca'
      },
      {
        title: 'Chat App',
        description: 'Basic chat application focused on AWS and serverless architecture',
        image: '/images/2.jpg',
        link: 'linkup.ideen.ca'
      },
      {
        title: 'Helios Telemetry Dashboard',
        description: 'Live telemtry dashboard for the University of Calgary Solar Car Team',
        image: '/images/2.jpg',
        link: 'ltelemetry-beta.calgarysolarcar.ca'
      }
    ]
  })
}
