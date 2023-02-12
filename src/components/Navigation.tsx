
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';


export default function Navigation() {
    const navItems = [
        { name: 'Home', url: '/' },
        { name: 'Projects', url: '/projects' },
        { name: 'Contact', url: '/contact' }
    ];
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    return (
        <>
            <div className='w-full h-20 bg-gradient-to-b from-primary p-3'>

                <div className='flex justify-between items-center'>
                    <div className='text-2xl drop-shadow-2xl'>
                        <IconButton className='visible md:invisible'>
                            <MenuIcon className='text-white' />
                        </IconButton>
                        <span className='text-white pr-5 border-accent border-b-2 '>Ideen</span>
                    </div>
                    <div className='text-xl'>
                        <Box className='invisible md:visible'>
                            {navItems.map((item) => (
                                <Link key={item.url} href={item.url} className='text-white hover:bg-accent p-2 rounded-lg'>
                                    {item.name}
                                </Link>
                            ))}
                        </Box>
                    </div>
                </div>

            </div>


        </>
    )
}
