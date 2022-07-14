export default function Browse({ memes, setCurrMeme, setBrowse }) {
	const renderMemes = memes.map((meme, i) => {
		return (
			i < 25 && (
				<li
					key={meme.id}
					className='cursor-pointer p-4'
					onClick={() => {
						setCurrMeme(meme);
						setBrowse(false);
					}}
				>
					<img src={meme.url} alt={meme.name} loading='lazy' />
				</li>
			)
		);
	});

	return (
		<section className='my-12 px-12 lg:px-44'>
			<h1 className='text-4xl mb-4 text-white'>Top meme templates</h1>
			<main>
				<ul className='columns-1 md:columns-2 lg:columns-3 -mx-4'>
					{renderMemes}
				</ul>
			</main>
		</section>
	);
}
