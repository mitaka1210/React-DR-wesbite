import React from 'react'
import style from './messages.module.scss';

function Message(props)  {
    return (
        <div className = {style.contentTxt}>

                {props.text}
                {props.textTwo}
                {props.textThird}
                {props.textFour}
             
        </div>
    )
}

export default Message
