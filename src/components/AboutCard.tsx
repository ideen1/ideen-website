import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { TextScramble } from '@a7sc11u/scramble';

import { SwitchTransition, CSSTransition } from "react-transition-group";
import React from 'react';
import { Button } from '@mui/material';



export default function AboutCard() {
    const thingsIam = ['Full-Stack Engineer', 'Software Engineering Student', 'Software Engineer', 'Embedded Engineer', 'Innovator', 'Leader', 'Creative', 'Curious'];

    const [currentThing, setCurrentThing] = useState('Software Engineer');

    useEffect(() => {
        setInterval(() => {
            const randomThing = thingsIam[Math.floor(Math.random() * thingsIam.length)];
            setCurrentThing(randomThing);

        }, 3500);
    }, []);



    const [mode, setMode] = React.useState("out-in");
    const [state, setState] = React.useState<string>("true");
    const helloRef = React.useRef(null);
    const goodbyeRef = React.useRef(null);
    const nodeRef = state ? helloRef : goodbyeRef;


    return (
        <>
            <div className='grid m-auto bg-zinc-700 h-fit md:h-1/2 w-full lg:w-3/5 rounded-3xl'>
                <div className='grid grid-cols-1 h-full md:grid-cols-2 place-items-center'>
                    <div className='grid h-4/5 w-full md:border-r-2 content-center'>
                        <div className='grid m-5 place-items-center'>
                            <div className='grid h-full w-4/5'>
                                <Image className="rounded-full m-auto" src={'/me.jpg'} alt={'Ideen Photo'} width={150} height={150} />
                                <h1 className='grid text-3xl font-bold text-white m-auto'>Ideen Banijamali</h1>
                                <h2 className='grid text-2xl font-bold text-accent m-auto'>
                                    <TextScramble text={currentThing} scramble={8} />
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className='grid h-4/5 place-content-center'>
                        <div className='grid m-5 justify-self-start'>
                            <p className='text-white'>
                                Welcome to ideen.ca! I&apos;m a software
                                engineering student whose passionate about
                                creating innovative solutions. Through my previous internships and clubs,
                                I have worked with various programming languages and
                                technologies. I&apos;m eager to continue learning and
                                taking on new challenges to make a positive impact
                                through software development. This summer I will be
                                joining <b>Hewlett Packard Enterprise</b> as a Software Intern.</p>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
