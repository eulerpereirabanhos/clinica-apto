import FloatingButton from "@/components/FloatingButton";
import Hero from "@/components/home/Hero";
import Sobre from "@/components/home/Sobre";
import Especialidades from "@/components/home/Especialidades";
import Footer from "@/components/layout/Footer";
import Equipe from "@/components/home/Equipe";
import Depoimentos from "@/components/home/Depoimentos";
import Convenios from "@/components/home/Convenios";
import Galeria from "@/components/home/Galeria";
import FAQ from "@/components/home/FAQ";
import CTAFinal from "@/components/home/CTAFinal";
import Contato from "@/components/home/Contato";
import GoogleMap from "@/components/home/GoogleMap";
import DoctorSection from "@/components/home/DoctorSection";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
         <DoctorSection />
        <Sobre />
        <Especialidades />
      </main>
      <Equipe />
      <Depoimentos /> 
      <Convenios /> 
      <Galeria /> 
      <FAQ /> 
      <Contato />
      <GoogleMap />
      <CTAFinal />
      <Footer />
      <FloatingButton />
    </>
  );
}