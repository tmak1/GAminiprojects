import React from 'react'
import './Bar.css'

export default function Bar(props) {
    const barStyle = { width: `${props.val / props.max *100}%`}
    return (
        <div className="bar-wrapper">
            <div className="bar" style={barStyle}></div>
        </div>
    )
}