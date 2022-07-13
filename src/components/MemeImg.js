import Draggable from 'react-draggable';

export default function MemeImg({ memeData, topText, bottomText }) {
	// console.log(memeData);
	return (
		<div id='meme' className='relative flex-1'>
			<img
				src={memeData.url}
				alt={memeData.name}
				className='w-full aspect-square'
			/>
			<Draggable bounds='parent'>
				<div className='top-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{topText}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{bottomText}
				</div>
			</Draggable>
		</div>
	);
}
