import Hero from "@/components/Hero";
import dynamic from 'next/dynamic';

// Import About dynamically and handle modules that may not have a default export
const About = dynamic(() => import('@/components/About').then(mod => mod.default || mod));

export default function Home() {
	return (
		<>
			<Hero />
			<About />
		</>
	);
}