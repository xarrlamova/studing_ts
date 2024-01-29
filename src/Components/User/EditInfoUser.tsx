import React, {ReactElement, ReactEventHandler, useState} from 'react';
import {useEffect} from "react";
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import {NAME_REGEX} from "../AddFriend/constants";
import {ValidationInput} from "../ValidationInput";
import {EditInterface} from "../../types/types";

interface EditInfoUserProps {
    /** Название значения на русском*/
    nameItem: string,

    /** Название поля */
    nameForm: string,

    /** Функция, управляет состояние - отображать форму редактирования или нет */
    showEditForm: () => void,

    /** Функция сохранения редактируемого значения в данных пользователя*/
    onEdit: (info: EditInterface) => void,

    /** Значение поля */
    valueForm: string,
}

export const EditInfoUser = (props: EditInfoUserProps) => {
    const {nameItem, nameForm, showEditForm, onEdit, valueForm} = props;

    const [item, setItem] = useState<string>(valueForm)
    const [isItemDirty, setIsItemDirty] = useState<boolean>(false)
    const [itemError, setItemError] = useState<string>('')
    const [isFormValid, setIsFormValid] = useState<boolean>(false)

    useEffect(() => {
        if (itemError) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }, [itemError])

    const itemHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setItem(e.target.value)
        if (!(NAME_REGEX.test(e.target.value))) {
            setItemError('Неккоректное значение');
        }
        else {
            setItemError('');
            setItem(e.target.value);
        }
    }

    const blurHandler = (): void => {
        setIsItemDirty(true)
    }

    const clickingOnOkButton = (): void => {
        if (isFormValid) {
            onEdit({
                nameForm: nameForm,
                valueForm: item,
            });
            showEditForm();
        }
    }

    const clickingOnCloseButton = (): void => {
        showEditForm();
    }

    return (
        <form>
            <ValidationInput className="edit-form" isDirty={isItemDirty} error={itemError} handler={itemHandler} value={item} blurHandler={blurHandler} nameItem={nameItem}/>
            <IoClose className="close-button" onClick={clickingOnCloseButton}/>
            <IoCheckmark aria-disabled={!isFormValid} className="ok-button" onClick={clickingOnOkButton}/>
        </form>
    )
}
