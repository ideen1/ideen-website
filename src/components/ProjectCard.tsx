import Head from 'next/head'
import { Suspense, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { TextScramble } from '@a7sc11u/scramble';

import { SwitchTransition, CSSTransition } from "react-transition-group";
import React from 'react';
import { Button } from '@mui/material';



export default function ProjectCard(props: any) {


    return (
        <div className=' bg-zinc-700 h-64 rounded-3xl group overflow-hidden'>
            <Suspense fallback={<div><h1 className='text-3xl text-white'>Loading...</h1></div>}>
                <div className='m-auto bg-zinc-900 h-64 rounded-3xl p-4 transition ease-in-out group-hover:-translate-y-10 duration-100 gap-y-2'>
                    <div className='h-1/3 relative'>
                        <Image className="rounded-xl m-auto object-cover" src={props.image} alt={props.title} fill={true} />
                    </div>
                    <div className='grid gap-3 h-2/3'>
                        <h1 className='grid text-xl font-bold text-white m-auto'>{props.title}</h1>
                        <p className='grid text-sm font-bold text-white m-auto'>{props.description}</p>
                        <div className='grid m-auto'>
                            <Button className='m-auto' variant="contained" href={props.link} target="_blank">View Project</Button>

                        </div>
                    </div>
                    <div className='flex mt-5 justify-center gap-x-2'>
                        <Image src='/tool-images/tailwind.png' className='' alt={'tailwind'} title='Tailwind CSS' width={30} height={30} />
                        <Image src='/tool-images/ts.png' className='' alt={'tailwind'} title='Tailwind CSS' width={30} height={30} />
                    </div>

                </div>

            </Suspense>



        </div>

    )
}
