import Footer from "@/app/components/dashboard/footer";

export const metadata = {
  title: 'Tipos de perfil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
