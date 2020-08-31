import React from 'react'

export const Card = (props) =>
<div id="card">
<p>Your {props.info.ID} task : {props.info.task} <button onClick={() => props.onDelete(props.info.ID)}>Delete</button></p>
      
</div>