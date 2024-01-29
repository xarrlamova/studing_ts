import React, {useState} from 'react';
import {IoCreateOutline} from "react-icons/io5";
import {EditInfoUser} from "./EditInfoUser";
import {EditInterface} from "../../types/types";

interface InfoUserProps {
    /** Значение поля */
    valueForm: string,

    /** Функция сохранения редактируемого значения в данных пользователя*/
    onEdit: (info: EditInterface) => void,

    /** Название значения на русском*/
    nameItem: string,

    /** Название поля */
    nameForm: string,
}

export const InfoUser = (props: InfoUserProps) => {
    const {valueForm, onEdit, nameItem, nameForm} = props;

    const [isEditForm, setIsEditForm] = useState<boolean>(
        false
    );

    const showEditForm = ():void => {
        setIsEditForm(prevState => !prevState)
    }

    return (
        <div className="info">
            <p className="text">{valueForm}</p>
            <IoCreateOutline className="edit-button" onClick={showEditForm}/>
            {isEditForm && <EditInfoUser showEditForm={showEditForm} nameItem={nameItem} valueForm={valueForm} nameForm={nameForm} onEdit={onEdit}/>}
        </div>
    )
}