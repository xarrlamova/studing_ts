import React, {memo} from 'react';
import {FriendInterface} from "../../types/types";

export const Friend = memo((props: FriendInterface) => {
    const {firstname, lastname, age} = props;
    return (
        (<tr className="friends">
            <td>{firstname}</td>
            <td>{lastname}</td>
            <td>{age}</td>
        </tr>)
    )
})
