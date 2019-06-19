import React from 'react';
import './FaceRecognition.css'

const FaceRecognition = ({ box, imageUrl }) => {
	return (
		<div className='center pa4'>
			<div className='absolute'>
				<img id='inputimage' alt='' src={imageUrl} width='400px' height='auto' />
				<div className='bbox' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
			</div>
		</div>
	);
}

export default FaceRecognition;