import React from 'react';
import { ThemeProvider } from '../components/theme-provider';
import '../globals.css';

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <head>
                <title>Visual Discovery Platform</title>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;