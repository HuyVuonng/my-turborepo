export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
       <main style={{textAlign: 'center'}}>
          <h1>CustomLayout</h1>
          {children}
       </main>
      </body>
    </html>
  );
}
