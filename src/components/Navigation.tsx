import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
                <div className='flex justify-between items-center w-full'>
                    <div className='text-2xl drop-shadow-2xl' >
                        <IconButton className='invisible md:invisible'>
                            {/* Can be converted to visible by default when collapsible menu is implemented */}
                            <MenuIcon className='text-white' />
                        </IconButton>
                        <span></span>
                        <Link href='/'>
                            <span className='text-white pr-5 border-accent border-b-2 '>Ideen</span>
                        </Link>
                    </div>
                    <div className='text-xl'>
                        <Box className=' md:visible'>
                            {/* Can be converted to invisible by default when collapsible menu is implemented */}
                            {navItems.map((item) => (
                                <Link key={item.url} href={item.url} className='text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-accent before:absolute before:left-0 before:bottom-0  p-2 rounded-lg'>
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
