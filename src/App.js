import Header from './components/Header';
import Meme from './components/Meme';
import Footer from './components/Footer';

export default function App() {
	return (
		<div className='flex flex-col justify-between dark:bg-palenight min-h-screen w-screen'>
			<Header />
			<Meme />
			<Footer />
		</div>
	);
}
