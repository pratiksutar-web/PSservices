import React, { useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

const ListCompo = (props)=>{

    const [line,lineState] = useState(false);

    const cutIt = ()=>{
        lineState(true);

    }

    return (<div className ="todo_style">
    <span onClick ={cutIt}>
    <DeleteIcon className ="delete_btn"/>
    </span>
    <li style ={{textDecoration:line ?"line-through":"none"}}>{props.text}</li>
    </div>
);
}

export default ListCompo;