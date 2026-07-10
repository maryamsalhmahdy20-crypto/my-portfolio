import { projects } from "@/data/projects";

import PortfolioCard from "./PortfolioCard";

export default function PortfolioGrid(){

return(

<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

{

projects.map(project=>(

<PortfolioCard

key={project.id}

id={project.id}

title={project.title}

category={project.category}

cover={project.cover}

/>

))

}

</div>

);

}