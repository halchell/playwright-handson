import Link from 'next/link'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <ul>
          <li><Link href="/">ホーム</Link></li>
          <li><Link href="/form">入力フォーム</Link></li>
        </ul>
        {children}
      </body>
    </html>
  )
}
