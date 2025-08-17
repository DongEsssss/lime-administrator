
import { Outlet } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';

import Box from '@mui/material/Box';

import Logo from '../Logo/logo';
import navigation from '../../Assets/navigation/navigate';
import Footer from '../Footer/Footer';

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

interface DemoProps {
    window?: () => Window;
}

// 메인 콘텐츠 영역 + Footer
function DemoPageContent() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
            }}
        >
            {/* 콘텐츠 영역 */}
            <Box sx={{ flex: 1, p: 0 }}>
                <Outlet />
            </Box>

            {/* Footer는 항상 하단 */}
            <Box sx={{ flexShrink: 0 }}>
                <Footer />
            </Box>
        </Box>
    );
}



// material mui dashboard
function DashboardLayoutBranding({ window }: DemoProps) {
    const demoWindow = window?.();

    return (
        <AppProvider
            navigation={navigation}
            branding={{
                logo: <Logo />,
                homeUrl: '/',
                title: 'Lime - Administrator'
            }}
            theme={demoTheme}
            window={demoWindow}
        >
            <DashboardLayout>
                <DemoPageContent />
            </DashboardLayout>
        </AppProvider>
    );
}

// 최종 MainLayout
export default function MainLayout(props: DemoProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <DashboardLayoutBranding {...props} />
        </Box>
    );
}
