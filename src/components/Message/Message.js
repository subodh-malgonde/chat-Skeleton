import React from 'react';
import classes from './Message.module.css';

const Message = (props) => {
    return(
        <div className={classes.Message} style={{backgroundColor:props.bgcolor,left:props.left,color:props.color}}>
            <div className={classes.MessageWrapper}>{props.body}</div>
            <div className={classes.timeWrap}>
                <span className={classes.time} style={{color:props.tcolor}}>{props.time}</span>
                <span>Tick</span>
            </div>
        </div>
    )
}

export default Message