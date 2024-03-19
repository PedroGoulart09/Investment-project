import '../(noAuthenticated)/globals.css';
export const metadata = {
  title: 'Perfil de investidor',
}

export default function RootLayout({ children }: any) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body className='font-main-font'>
            {children}
        </body>
      </html>
    </>
  )
}