import React, {memo, useCallback, useState} from 'react';
import {useEffect} from "react";
import { IoClose } from "react-icons/io5";
import { IoCheckmark } from "react-icons/io5";
import {NAME_REGEX} from "../AddFriend/constants";
import {ValidationInput} from "../ValidationInput";
import {EditInfoUserProps} from "./interfaces";


export const EditInfoUser = memo((props: EditInfoUserProps) => {
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

    const itemHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value:string = e.target.value
        setItem(value)
        if (!(NAME_REGEX.test(value))) {
            setItemError('Неккоректное значение');
        }
        else {
            setItemError('');
            setItem(value);
        }
    },[])

    const blurHandler = useCallback((): void => {
        setIsItemDirty(true)
    }, [])

    const clickingOnOkButton = useCallback((): void => {
        if (isFormValid) {
            onEdit({
                nameForm: nameForm,
                valueForm: item,
            });
            showEditForm();
        }
    }, [isFormValid, item, nameForm])

    const clickingOnCloseButton = useCallback((): void => {
        showEditForm();
    }, [showEditForm])

    return (
        <form>
            <ValidationInput
                className="edit-form"
                isDirty={isItemDirty}
                error={itemError}
                handler={itemHandler}
                value={item}
                blurHandler={blurHandler}
                nameItem={nameItem}
            />
            <IoClose className="close-button" onClick={clickingOnCloseButton}/>
            <IoCheckmark className="ok-button" aria-disabled={!isFormValid} onClick={clickingOnOkButton}/>
        </form>
    )
})
