import React from 'react';
import avatar from './avatar.jpg'
import {memo} from "react";
export const Avatar:React.FunctionComponent = memo(() => {
    return (
        <img
            src={avatar}
            className="avatar"
            alt="Avatar"
        />
    )
})

