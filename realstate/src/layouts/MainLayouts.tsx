import { Box } from '@mui/material'
import React, { ReactNode } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

interface MainLayoutProps {
    children: ReactNode;
}

const MainLayouts: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <Box>
            <Header />
            {children}
            <Footer />
        </Box>
    )
}

export default MainLayouts;