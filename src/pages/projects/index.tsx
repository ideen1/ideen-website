import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from '@/components/Navigation';
import AnimateSlide from '@/components/AnimateSlide';
import { Suspense, useEffect, useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { ProjectData } from '@/types/IProject';

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {

  const [response, setProjects] = useState<ProjectData>({ projects: [] });
  useEffect(() => {
    fetch('/api/get-projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])


  return (
    <>
      <Head>
        <title>Ideen Banijamali</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
      </Head>
      <div className=''>
        <AnimateSlide direction='down' delay={200}>
          <Navigation />
        </AnimateSlide>

        <div className='flex flex-wrap gap-14 p-4'>
          {response.projects.map((project, index) => (
            <div className='m-auto w-96' key={index}>
              <AnimateSlide direction='up' delay={(index + 1) * 300} >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              </AnimateSlide>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
