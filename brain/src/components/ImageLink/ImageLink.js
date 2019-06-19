import React from 'react';
import './ImageLink.css'

const ImageLink = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div>
		<p className='f4 white'>
			{'This brain will detect faces in your pictures. Give it a try!'} 
		</p>
		<div className='center'>
			<div className='pa4 br3 center shadow-4 form'>
				<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
				<button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit} >Detect</button>
			</div>
		</div>
		</div>
	);
}

export default ImageLink;