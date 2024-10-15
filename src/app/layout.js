import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";


export const metadata = {
  title: "React Movies",
  description: "Finalmente aprendendo React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
