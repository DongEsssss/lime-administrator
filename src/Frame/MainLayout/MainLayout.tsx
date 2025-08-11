import Box from '@mui/material/Box';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <div style={{ flex: 1, padding: 0 }}>
                <Outlet />
            </div>
            <Footer />
        </Box>
    );
}