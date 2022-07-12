import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';
import InputBox from './InputBox';
import MemeImg from './MemeImg';

export default function Meme() {
	const [memeUrl, setMemeUrl] = useState('');

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then(data => data.json())
			.then(({ data }) => {
				setMemeUrl(data.memes[0]);
			});
	}, []);

	return (
		<section className='my-20 mx-12 lg:mx-20'>
			<form className='flex flex-col gap-8 w-full lg:flex-row'>
				<InputBox placeholder='Top Text' />
				<InputBox placeholder='Bottom Text' />
			</form>
			<MemeImg imgUrl={memeUrl} />
		</section>
	);
}
