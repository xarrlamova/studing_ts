import React, {memo} from 'react';
import {InfoUser} from "./InfoUser";
import {UserProps} from "./interfaces";

export const User = memo((props: UserProps) => {
    const {user, onEdit} = props;
    const {firstname, lastname} = user;


    return(
        <div className="user-info">
            <InfoUser valueForm={firstname}  onEdit={onEdit} nameItem="Имя" nameForm="firstname"/>
            <InfoUser valueForm={lastname} onEdit={onEdit} nameItem="Фамилия" nameForm="lastname"/>
        </div>
    )
})
