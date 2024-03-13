import React, {memo, useCallback, useState} from 'react';
import {IoCreateOutline} from "react-icons/io5";
import {EditInfoUser} from "./EditInfoUser";
import {InfoUserProps} from "./interfaces";

export const InfoUser = memo((props: InfoUserProps) => {
    const {valueForm, onEdit, nameItem, nameForm} = props;

    const [isEditForm, setIsEditForm] = useState<boolean>(
        false
    );

    const showEditForm = useCallback(():void => {
        setIsEditForm(prevState => !prevState)
    }, [])
    return (
        <div className="info">
            <p className="text">{valueForm}</p>
            <IoCreateOutline className="edit-button" onClick={showEditForm}/>
            {isEditForm && <EditInfoUser showEditForm={showEditForm} nameItem={nameItem} valueForm={valueForm} nameForm={nameForm} onEdit={onEdit}/>}
        </div>
    )
})