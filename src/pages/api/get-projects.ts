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

  setTimeout(() => {
    res.status(200).json({
      tools: [


      ],
      projects: [

        {
          title: 'Meni',
          description: 'Digital menu platform for small business owners currently surving over a dozen clients',
          image: '/project-images/meni.png',
          launchUrl: 'https://meniapp.ca'
        },
        {
          title: 'KoolTickets',
          description: 'Movie ticket booking app with focus on design patterns and PHP',
          image: '/project-images/kooltickets.png',
          github: 'https://github.com/ideen1/movie-theatre-app',
          tools: ['php', 'tailwind', 'react']

        },
        {
          title: 'LinkUp',
          description: 'Social platform for people to coordinate schedules and find times to meet',
          image: '/project-images/linkup.png',
          launchUrl: 'https://linkup.ideen.ca'
        },
        {
          title: 'Equa',
          description: 'Chrome extension/web portal with a goal to increase donations through everyday shopping',
          image: '/project-images/equa.png',
          github: 'https://github.com/ideen1/Hack-The-Change-2023'
        },
        {
          title: 'Helios Telemetry Dashboard',
          description: 'Live telemetry dashboard for the University of Calgary Solar Car Team',
          image: '/project-images/telemetry.png',
          launchUrl: 'https://telemetry-beta.calgarysolarcar.ca',
          github: 'https://github.com/UCSolarCarTeam/Helios-Telemetry'
        },
        {
          title: 'SnapShare',
          description: 'A photo sharing platform with a custom written uploader and image optimization.',
          image: '/project-images/snapshare.png',
          launchUrl: 'https://312.ideen.ca/apps/SnapShare/'
        },
        {
          title: 'Authentify',
          description: 'Turnkey authentication solution for web applications to integrate with third-party providers including Google, Facebook and Apple.',
          image: '/project-images/authentify.png',
          launchUrl: 'https://312.ideen.ca/apps/Authentify/',
          github: 'https://github.com/ideen1/Authentify'
        },
        {
          title: 'Food Bank Optimizer',
          description: 'This Java app uses a combination-based algorithm to optimize food supply amongst hampers',
          image: '/images/2.jpg',
          github: 'https://github.com/ideen1/ENSF409-FinalProject'
        },
        {
          title: 'MySmartCloset',
          description: 'Application which uses weather APIs along with colour matching to choose the best outfit for the day.',
          image: '/project-images/closet.png',
          launchUrl: 'https://312.ideen.ca/apps/MySmartCloset',
          github: 'https://google.com'
        },
        {
          title: 'Home Assistant',
          description: 'Contributed interface improvements to the open source project Home Assistant, a home automation platform running on Python',
          image: '/project-images/ha.png',
          github: 'linkup.ideen.ca'
        },
        {
          title: 'WLED',
          description: 'Numerous enhancements allowing side channel relay control for large lighting displays',
          image: '/project-images/wled.png',
          github: 'linkup.ideen.ca'
        },
        {
          title: 'Chat App',
          description: 'Basic chat application focused on AWS and serverless architecture',
          image: '/images/2.jpg',
          github: 'linkup.ideen.ca'
        },
        {
          title: '',
          description: 'A Patient Information System with a focus on transactional SQL and responsive design',
          image: '/images/1.jpg',
        },
      ]
    })
  }, 10)
}
