import trollFace from '../images/troll_face.png';

export default function Header() {
	return (
		<header className='md:h-28 lg:p-6 lg:gap-6 lg:h-24 flex items-center gap-8 flex-row h-36 p-8 bg-gradient-to-r from-teal-500 to-amber-400'>
			<img className='aspect-square h-full' src={trollFace} alt='troll face' />
			<h1 className='lg:text-4xl text-white font-semibold text-6xl font-sans tracking-tightest'>
				Memeracle
			</h1>
		</header>
	);
}
