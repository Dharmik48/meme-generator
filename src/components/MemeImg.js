import Draggable from 'react-draggable';

export default function MemeImg({ memeData, text1, text2, text3, text4, text5 }) {
	return (
		<div>
			{memeData.box_count === 1 &&
			<div id='meme' className='relative flex-1'>
				<img
					src={memeData.url}
					alt={memeData.name}
					className='w-full aspect-square'
				/>
				<Draggable bounds='parent'>
					<div className='top-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
						{text1}
					</div>
				</Draggable></div> }
				{memeData.box_count === 2 && <div id='meme' className='relative flex-1'>
			<img
				src={memeData.url}
				alt={memeData.name}
				className='w-full aspect-square'
			/>
			<Draggable bounds='parent'>
				<div className='top-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text1}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text2}
				</div>
			</Draggable>
			</div>}
			{memeData.box_count === 3 && <div id='meme' className='relative flex-1'>
			<img
				src={memeData.url}
				alt={memeData.name}
				className='w-full aspect-square'
			/>
			<Draggable bounds='parent'>
				<div className='top-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text1}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='top-60 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text2}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text3}
				</div>
			</Draggable>
			</div> }
			{memeData.box_count === 4 && <div id='meme' className='relative flex-1'>
			<img
				src={memeData.url}
				alt={memeData.name}
				className='w-full aspect-square'
			/>
			<Draggable bounds='parent'>
				<div className='top-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text1}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-80 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text2}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-40 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text3}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text4}
				</div>
			</Draggable>
			</div>}
			{memeData.box_count === 5 && <div id='meme' className='relative flex-1'>
			<img
				src={memeData.url}
				alt={memeData.name}
				className='w-full aspect-square'
			/>
				<Draggable bounds='parent'>
				<div className='top-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text1}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-80 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text2}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='top-40 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text3}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-40 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text4}
				</div>
			</Draggable>
			<Draggable bounds='parent'>
				<div className='bottom-5 left-1/3 cursor-grab meme-text text-4xl font-mono text-white w-fit absolute'>
					{text5}
				</div>
			</Draggable>
			</div>}
		</div>
	);
};
