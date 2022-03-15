import React, {useState, useEffect} from 'react';
import axios from 'axios';

type Props = {};

interface RoomModel{
    name: string;
}

const Room = (props: Props)=>{
    const [rooms, setRooms] = useState<RoomModel[]>([{name: "Rendrikson"}]);

    useEffect(()=>{
        axios.get('http://localhost:3000/rooms')
        .then(response => {
            //rooms = response.data;
            setRooms(response.data);
        });

        (async () => {
            try {
                const response = await axios.get('http://localhost:3000/rooms');
                setRooms(response.data);
            } catch (error) {
               console.log(error);
            }
        })();
    }, [])

    function cliclou(event: any){
        console.log(event)
    }
    
    console.log(rooms);
    return(
        <div>
            <h1>Salas</h1>
            <ul>
                {rooms.map((room, index)=>(
                    <li onClick={(event) => cliclou(event)} key={index}>{room.name}</li>
                ))}
            </ul>
        </div>
    )

}

export default Room;
