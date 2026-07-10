import Image from "next/image";

import { notFound } from "next/navigation";

import { projects } from "@/data/projects";

export default async function Project({

params,

}:{

params:Promise<{id:string}>

}){

const {id}=await params;

const project=projects.find(p=>p.id===id);

if(!project){

notFound();

}

return(

<main className="min-h-screen bg-slate-950 text-white">

<div className="max-w-7xl mx-auto px-8 py-32">

<h1 className="text-6xl font-black">

{project.title}

</h1>

<p className="mt-8 text-slate-400">

{project.description}

</p>

<div className="grid md:grid-cols-2 gap-8 mt-20">

{

project.images.map((image,index)=>(

<div

key={index}

className="relative h-[420px] rounded-3xl overflow-hidden"

>

<Image

src={image}

alt={project.title}

fill

className="object-cover hover:scale-105 duration-500"

/>

</div>

))

}

</div>

</div>

</main>

);

}