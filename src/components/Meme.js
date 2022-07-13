import { useEffect, useState } from 'react';
import InputBox from './InputBox';
import MemeImg from './MemeImg';
import DownloadBtn from './DownloadBtn';
import RandomImg from './RandomImg';

export default function Meme() {
	const [memes, setMemes] = useState([]);
	const [currMeme, setCurrMeme] = useState({});
	const [topText, setTopText] = useState('Top Text');
	const [bottomText, setBottomText] = useState('Bottom Text');

	useEffect(() => {
		fetch('https://api.imgflip.com/get_memes')
			.then(data => data.json())
			.then(({ data }) => {
				setMemes(data.memes);
				setCurrMeme(
					data.memes[Math.floor(Math.random() * data.memes.length + 1)]
				);
			});
	}, []);

	return (
		<section className='py-20 mx-12 flex gap-14 flex-col lg:flex-row-reverse lg:mx-44'>
			<div className='flex flex-col gap-8 flex-1'>
				<form className='flex flex-col gap-8 h-min'>
					<InputBox
						placeholder='Top Text'
						text={topText}
						setText={setTopText}
					/>
					<InputBox
						placeholder='Bottom Text'
						text={bottomText}
						setText={setBottomText}
					/>
				</form>
				<DownloadBtn />
				<RandomImg memes={memes} setCurrMeme={setCurrMeme} />
			</div>
			<MemeImg memeData={currMeme} topText={topText} bottomText={bottomText} />
		</section>
	);
}
