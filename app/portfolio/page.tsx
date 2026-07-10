import PortfolioGrid from "@/components/portfolio/PortfolioGrid";

export default function Portfolio(){

return(

<main className="min-h-screen bg-slate-950 text-white">

<section className="max-w-7xl mx-auto px-8 py-32">

<h1 className="text-7xl font-black">

Portfolio

</h1>

<p className="text-slate-400 mt-6 mb-16 text-xl">

Selected Graphic Design Projects

</p>

<PortfolioGrid/>

</section>

</main>

);

}