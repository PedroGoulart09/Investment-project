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
        </body>
      </html>
    </>
  )
}