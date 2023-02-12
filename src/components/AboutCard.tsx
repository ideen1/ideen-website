import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { TextScramble } from '@a7sc11u/scramble';
import { useEffect, useState } from 'react';


export default function AboutCard() {
    const thingsIam = ['Full-Stack', 'Embedded', 'Software Engineer', 'Student', 'Innovator', 'Leader', 'Creative', 'Curious'];

    const [currentThing, setCurrentThing] = useState('');

    useEffect(() => {
        setTimeout(() => {
            const randomThing = thingsIam[Math.floor(Math.random() * thingsIam.length)];
            setCurrentThing(randomThing);

        }, 2000);
    }, [currentThing]);



    return (
        <>
            <div className='grid m-auto bg-zinc-700 h-1/2 w-3/5 rounded-3xl '>

                <div className='grid grid-cols-1 md:grid-cols-2 place-content-center'>
                    <div className='grid h-4/5 mb-10 md: mb-0 md:border-r-2 place-content-center'>
                        <div className='grid m-5'>
                            <h1 className='text-3xl font-bold text-white'>Ideen Banijamali</h1>
                            <h2 className='text-2xl font-bold text-accent'>
                                <TextScramble text={currentThing} scramble={2} />
                            </h2>

                        </div>
                    </div>
                    <div className='grid h-4/5 place-content-center'>
                        <div className='grid m-5 '>
                            <p className='text-white'>Welcome to ideen.ca! I am a passionate 3rd year software engineering student interested in full-stack and embedded. This summer I will be joining HPE as a software intern.</p>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}