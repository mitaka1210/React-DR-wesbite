import React from 'react';


function Card(props) {
	return (
		
		<div>
            <div >
                {props.title}
                {props.pricing}
                {props.content}
            </div>
            <div>
                {props.work}
            </div>
        </div>
		
	)
}

export default Card
