import '../globals.css';
import { ThemeProvider } from '@/app/components/dashboard/theme-provider'
import { ModeToggle } from '@/app/components/dashboard/darkMode';
import Footer from '@/app/components/dashboard/footer';
export const metadata = {
  title: 'Login',
}

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className='font-main-font'>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className='flex justify-center mt-20 '>
              <ModeToggle />
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}