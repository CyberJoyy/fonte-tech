import Head from "next/head";
import Header from "@/Components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Products from "@/components/Products/Products";
import Clients from "@/components/Clients/Clients";
import About from "@/Components/About/About";
import Box from "@/components/Box/Box";
import Team from "@/components/Team/Team";
import Subscribe from "@/components/Subscribe/Subscribe";
import Footer from "@/Components/Footer/Footer";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'


export default function Home() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  return (
    <>
      <Head>
        <title>Tech Fontes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main>
        <Navbar />
        <Header />
        <Products />
        <About />
        <Clients />
        <Box />
        <Team />
        <Subscribe />
        <Footer />
      </main>
    </>
  );
}
