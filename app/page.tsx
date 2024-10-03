import Blog from "@/components/section/Blog";
import Commitment from "@/components/section/Commitment";
import Commitment_2nd from "@/components/section/Commitment_2nd";
import FAQ from "@/components/section/FAQ";
import Header from "@/components/section/Header";
import Hero from "@/components/section/Hero";
import Logoipsum from "@/components/section/Logoipsum";
import Metrics from "@/components/section/Metrics";


export default function Home() {
  return (
    <>
    <Header/>
    <Hero/>
    <Logoipsum/>
    <Commitment/>
    <Metrics/>
    <Commitment_2nd/>
    <FAQ/>
    <Blog/>
    </>
  );
}
