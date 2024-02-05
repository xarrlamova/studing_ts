import React, {memo} from 'react';
import {FriendInterface} from "../../types/types";

export const Friend = memo((props: {friend: FriendInterface }) => {
    const {friend} = props
    const {firstname, lastname, age} = friend;
    return (
        (<tr className="friends">
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{age}</td>
        </tr>)
    )
})
