export const metadata = {
  title: "Pinnacl Properties",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body style={{ margin: 0, fontFamily: "Inter, system-ui, Arial" }}>
        <div style={{ minHeight: "100vh", background: "#fff" }}>
          {children}
        </div>
      </body>
    </html>
  );
}
