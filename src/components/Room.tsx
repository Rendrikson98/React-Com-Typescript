import React from 'react';
import axios from 'axios';

type Props = {

}

const Room = (props: Props)=>{
    let rooms: any[] = [];
    axios.get('http://localhost:3000/rooms')
    .then(response => {
        rooms = response.data;
    });
    console.log(rooms);
    return(
        <div>
            <h1>Salas</h1>
            <ul>
                <li>Sala 1</li>
                <li>Sala 2</li>
            </ul>
        </div>
    )

}

export default Room;
