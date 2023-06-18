import Head from 'next/head'
import { Suspense, useEffect, useRef, useState } from 'react';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { TextScramble } from '@a7sc11u/scramble';

import { SwitchTransition, CSSTransition } from "react-transition-group";
import React from 'react';
import { Button } from '@mui/material';


export default function ProjectCardLoader(props: any) {


    return (
        <div className=' bg-zinc-700 h-64 rounded-3xl group overflow-hidden'>
            <div className='m-auto bg-zinc-900 h-64 rounded-3xl p-4 duration-100 gap-y-2'>
                <div className='h-1/3 relative'>
                    <div className=' bg-zinc-700 h-full m-auto rounded-xl' />
                </div>
                <div className='grid gap-3 h-2/3'>
                    <div className=' bg-zinc-700 h-4 w-1/3 m-auto rounded-xl' />
                    <div className=' bg-zinc-700 h-3 w-full rounded-xl' />
                    <div className=' bg-zinc-700 h-3 w-full rounded-xl' />
                    <div className='bg-zinc-800 h-12 m-auto w-2/5 rounded-xl' />
                </div>


            </div>
        </div>

    )
}
