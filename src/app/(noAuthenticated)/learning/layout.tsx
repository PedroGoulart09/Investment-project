import Footer from '@/app/components/dashboard/footer';
import '../globals.css';
export const metadata = {
  title: 'Aprendizado',
}

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body>
            {children}
            <Footer />
        </body>
      </html>
    </>
  )
}