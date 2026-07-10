import Image from "next/image";
import Link from "next/link";

type Props = {

    id:string;

    title:string;

    category:string;

    cover:string;

};

export default function PortfolioCard({

id,

title,

category,

cover,

}:Props){

return(

<Link

href={`/portfolio/${id}`}

className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500 duration-300 hover:-translate-y-3"

>

<div className="relative h-72 overflow-hidden">

<Image

src={cover}

alt={title}

fill

className="object-cover group-hover:scale-110 duration-500"

/>

</div>

<div className="p-6">

<p className="text-blue-400">

{category}

</p>

<h2 className="text-3xl font-bold mt-2">

{title}

</h2>

</div>

</Link>

);

}