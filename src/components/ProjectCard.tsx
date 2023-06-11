import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { TextScramble } from '@a7sc11u/scramble';

import { SwitchTransition, CSSTransition } from "react-transition-group";
import React from 'react';
import { Button } from '@mui/material';



export default function ProjectCard(props: any) {


    return (
        <div className='m-auto w-96  bg-zinc-700 h-64 rounded-3xl group'>
            <div className='m-auto bg-zinc-900 h-64 rounded-3xl p-4 transition ease-in-out group-hover:-translate-y-10 duration-100'>
                <Image className="rounded-3xl m-auto" src={props.image} alt={props.title} width={50} height={50} />
                <div className='grid m-5 gap-3'>
                    <h1 className='grid text-xl font-bold text-white m-auto'>{props.title}</h1>
                    <p className='grid text-sm font-bold text-white m-auto'>{props.description}</p>
                    <div className='grid m-auto'>
                        <Button className='m-auto' variant="contained" href={props.link} target="_blank">View Project</Button>

                    </div>
                </div>
            </div>
        </div>

    )
}
