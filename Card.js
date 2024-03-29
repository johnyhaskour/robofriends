import React from 'react';

const Card = (props) => {
	return (
		//<h1>Robofriends</h1>
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt="robots" src={`https:robohash.org/${props.id}?200*200`} />
			<div>
				<h2>{props.name}</h2>
				<p> {props.Email}</p>
			</div>
		</div>
	);
}

export default Card;