import Draggable from 'react-draggable';

export default function MemeImg({ imgUrl }) {
	console.log(imgUrl);
	return (
		<div className='relative'>
			<Draggable bounds='parent'>
				<div className='w-fit'>Drag me</div>
			</Draggable>
			<img src={imgUrl.url} alt={imgUrl.name} className='lg:w-1/3' />
		</div>
	);
}
