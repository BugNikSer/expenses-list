import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import AppHeader from './AppHeader';

export const metadata = {
  title: 'Мои траты',
  description: 'Список моих трат',
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  overflow: 'auto'
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body style={{ margin: 0, padding: 0 }} className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme} defaultMode='system'>
            <InitColorSchemeScript attribute="class" />
            <main style={wrapperStyle}>
              <AppHeader />
              {children}
            </main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
