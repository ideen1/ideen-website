import Image from 'next/image'
import React from 'react';
import { Button } from '@mui/material';
import { Project } from '@/types/IProject';

export default function ProjectCard(props: Project) {
    return (
        <div className=' bg-zinc-700 h-64 rounded-3xl group overflow-hidden'>
            <div className='m-auto bg-zinc-900 h-64 rounded-3xl transition ease-in-out group-hover:-translate-y-10 duration-100 gap-y-2'>
                <div className='h-1/3 relative'>
                    <Image className="rounded-t-3xl m-auto object-cover" src={props.image} alt={props.title} fill={true} />
                </div>
                <div className='grid gap-3 h-2/3 p-4'>
                    <h1 className='grid text-xl font-bold text-white m-auto'>{props.title}</h1>
                    <p className='grid text-sm font-bold text-white m-auto'>{props.description}</p>
                    <div className='flex gap-x-2 m-auto'>
                        {props.launchUrl && <Button style={{ backgroundColor: 'green' }} className='m-auto' variant="contained" href={props.launchUrl} target="_blank">Launch</Button>}
                        {props.github && <Button style={{ backgroundColor: '#372549' }} className='m-auto' variant="contained" href={props.github} target="_blank">GitHub</Button>}

                    </div>
                </div>
                <div className='flex mt-1 justify-center gap-x-2'>
                    <Image src='/tool-images/tailwind.png' className='' alt={'tailwind'} title='Tailwind CSS' width={30} height={30} />
                    <Image src='/tool-images/ts.png' className='' alt={'tailwind'} title='Tailwind CSS' width={30} height={30} />
                </div>

            </div>
        </div>

    )
}
