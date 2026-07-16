"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {

  return (

<section className="bg-slate-900 text-white py-28">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-2 gap-20 items-center">

{/* الصورة */}

<motion.div

initial={{opacity:0,x:-80}}

whileInView={{opacity:1,x:0}}

transition={{duration:.8}}

viewport={{once:true}}

>

<div className="relative">

<Image

src="/images/profile.jpg"

alt="About"

width={500}

height={600}

className="rounded-[35px] object-cover shadow-2xl"

/>

<div className="absolute -bottom-8 -right-8 bg-blue-600 rounded-3xl px-8 py-6">

<p className="text-5xl font-black">

4+

</p>

<p className="text-sm">

Years Experience

</p>

</div>

</div>

</motion.div>

{/* النص */}

<motion.div

initial={{opacity:0,x:80}}

whileInView={{opacity:1,x:0}}

transition={{duration:.8}}

viewport={{once:true}}

>

<p className="uppercase tracking-[6px] text-blue-400">

About Me

</p>

<h2 className="text-5xl font-black mt-5">

Creative Graphic Designer

</h2>

<p className="mt-10 leading-9 text-slate-300">

Professional Graphic Designer specialized in
Brand Identity,
Social Media,
Print Design,
Marketing Materials,
and Website UI Design.

</p>

<p className="mt-8 leading-9 text-slate-400">

I transform ideas into visual identities
that strengthen brands
and leave a memorable impression.

Every project is designed with
strategy,
creativity,
and attention to detail.

</p>

<div className="grid grid-cols-2 gap-6 mt-14">

<div className="bg-slate-800 rounded-2xl p-6">

<h3 className="text-4xl font-black text-blue-400">

120+

</h3>

<p className="mt-2 text-slate-300">

Completed Projects

</p>

</div>

<div className="bg-slate-800 rounded-2xl p-6">

<h3 className="text-4xl font-black text-blue-400">

40+

</h3>

<p className="mt-2 text-slate-300">

Happy Clients

</p>

</div>

</div>

</motion.div>

</div>

</div>

</section>

);

}