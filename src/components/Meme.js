import { useEffect, useState } from 'react';
import InputBox from './InputBox';
import MemeImg from './MemeImg';
import DownloadBtn from './DownloadBtn';
import RandomImg from './RandomImg';

export default function Meme({ memes, setMemes, currMeme, setCurrMeme }) {
	const [topText, setTopText] = useState('Top Text');
	const [bottomText, setBottomText] = useState('Bottom Text');

	useEffect(() => {
		Object.keys(currMeme).length === 0 &&
			setCurrMeme(memes[Math.floor(Math.random() * memes.length + 1)]);
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
				<p className='text-algae dark:text-white'>
					Hint: You can drag and move around the text!
				</p>
			</div>
			<MemeImg memeData={currMeme} topText={topText} bottomText={bottomText} />
		</section>
	);
}
