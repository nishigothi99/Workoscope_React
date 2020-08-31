import React from "react";

export const Card = (props) => {
  //   console.log(props.info.ID, props.index);
  return (
    <div id="card">
      <p>
        Your {props.info.ID} task : {props.info.task}
        <button onClick={() => props.onDelete(props.info.ID)}>Delete</button>
        <button onClick={() => props.onEdit(props.info.ID)}>Edit</button>
        <br />
        
          {props.index === props.info.ID ? (
            <input id="enter"
              type="text"
              defaultValue={props.info.task}
              onChange={(event) => {
              props.onUpdate(event,event.target.value, props.info.ID)
            }}
            onKeyPress = {(event) => {props.keyHandle(event)}
            }
            ></input>
          ) : null}
        
      </p>
    </div>
  );
};