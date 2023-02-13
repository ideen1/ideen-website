
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';


export default function AnimateSlide(pageProps: any) {
    const containerRef = useRef(null);


    return (
        <>
            <Slide direction={pageProps.direction} in={true} container={containerRef.current} easing={'ease'} timeout={pageProps.delay || 800}>
                <div>
                    <Fade in={true} timeout={pageProps.delay+400 || 1200} >
                        <Box sx={{ width: '100%', height: '100%' }} >
                            {pageProps.children}
                        </Box>
                    </Fade>
                </div>
            </Slide>

        </>
    )
}
