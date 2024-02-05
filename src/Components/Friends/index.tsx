import React, {memo} from 'react';
import {Friend} from "./Friend";
import {FriendInterface} from "../../types/types";


export const Friends = memo((props: {friends: Array<FriendInterface>}) => {
    const {friends} = props;
    if (!friends.length) {
        return(<div>
            <h3>Друзей нет :(</h3>
        </div>)
    }

    return (<tbody >
    {friends.map((el) => (<Friend key={el.id} friend={el}/>))}
    </tbody>)
})
