import trollFace from '../images/troll_face.png';

export default function Header() {
	return (
		<header className='h-44 flex items-center py-8 px-12 gap-8 bg-gradient-to-r from-algae to-grass shadow-2xl md:h-40 lg:h-28 lg:px-44'>
			<img className='aspect-square h-full' src={trollFace} alt='troll face' />
			<h1 className='lg:text-4xl text-white font-semibold text-5xl font-sans tracking-tightest'>
				Memeracle
			</h1>
		</header>
	);
}
