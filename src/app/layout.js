// import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

import {AppRouterCacheProvider} from '@mui/material-nextjs/v16-appRouter';
import GlobalTheme from "@/app/global-theme";
import {ThemeProvider} from "@mui/material";
import {Roboto} from "next/font/google";


const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});
export default function RootLayout({children}) {
    return (
        <html lang="en" className={roboto.className}>
        <body>
        <AppRouterCacheProvider>
            <ThemeProvider theme = {GlobalTheme}>
                {children}


            </ThemeProvider>

        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
