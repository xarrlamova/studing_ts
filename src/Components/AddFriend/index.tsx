import React, {memo, useCallback, useMemo, useState} from 'react';
import {useEffect} from "react";
import {NAME_REGEX} from "./constants";
import {ValidationInput} from "../ValidationInput";
import {FriendInterface} from "../../types/types";
import {AddFriendProps} from "./interfaces";

export const AddFriend = memo((props: AddFriendProps) => {
    const {onAdd} = props;

    const [friend, setFriend] = useState<FriendInterface>(
        {
            firstname: '',
            lastname: '',
            age: 0,
        })
    const firstname = 'firstname';
    const lastname = 'lastname';

    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [age, setAge] = useState<string>('')

    const [isNameDirty, setNameDirty] = useState<boolean>(false)
    const [isSurnameDirty, setSurnameDirty] = useState<boolean>(false)
    const [isAgeDirty, setAgeDirty] = useState<boolean>(false)

    const [nameError, setNameError] = useState<string>('поле Имя не может быть пустым')
    const [surnameError, setSurnameError] = useState<string>('поле Фамилия не может быть пустым')
    const [ageError, setAgeError] = useState<string>('поле Возраст не может быть  пустым')

    const [isFormValid, setIsFormValid] = useState<boolean>(false)

    useEffect(() => {
        if (nameError || surnameError || ageError) {
            setIsFormValid(false)
        } else {
            setIsFormValid(true)
        }
    }, [nameError, surnameError, ageError])


    // СПРОСИТЬ У РУСЛАНА
    // type ValidationHandlerInterface {
    //     /** Значение, веденное пользователем*/
    //     e: React.ChangeEvent<HTMLInputElement>,
    //
    //     setFunction: (value: string) => void,
    //
    //     /** Сетер состояния ошибки */
    //     setError: (value: string) => void,
    //
    //     /** Регулярное выражение для валидации */
    //     reg: RegExp,
    //
    //     /** Название значения для редактирования */
    //     nameValue: string,
    // }


    const validationHandler = useCallback((
                                   e: React.ChangeEvent<HTMLInputElement>,
                                   setFunction: (value : string) => void,
                                   setError: (value: string) => void,
                                   reg: RegExp,
                                   nameValue: string,
                                   ):void => {
        const value:string = e.target.value
        setFunction(value)
        if (!reg.test(value)) {
            setError('Неккоректное значение')
        } else {
            setError('');
            setFriend(prevState => ({...prevState, [nameValue]:value}));
        }
    }, [])

    const nameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>):void => {
        validationHandler(e, setName, setNameError, NAME_REGEX, firstname)
    }, [validationHandler]);

    const surnameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>):void => {
        validationHandler(e, setSurname, setSurnameError, NAME_REGEX, lastname)
    }, [validationHandler]);

    const ageHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>):void => {
        validationHandler(e, setAge, setAgeError, /^[1-9][0-9]*$/, 'age')
    }, [validationHandler]);

    const blurHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>):void => {
        switch (e.target.name) {
            case firstname:
                setNameDirty(true)
                break
            case lastname:
                setSurnameDirty(true)
                break
            case 'age':
                setAgeDirty(true)
                break
            default:
                console.log('default')
        }
    }, [])

    const clickingOnAddFriendsButton = useCallback(():void => {
        onAdd({
            firstname: friend.firstname,
            lastname: friend.lastname,
            age: Number(friend.age),
        })
    }, [friend.age, friend.firstname, friend.lastname, onAdd])

    return (
        <form>
            <ValidationInput 
                className="add-friends-input" 
                isDirty={isNameDirty} 
                error={nameError} 
                handler={nameHandler} 
                value={name} 
                blurHandler={blurHandler} 
                nameItem='Имя' 
                name={firstname}
            />
            <ValidationInput 
                className="add-friends-input" 
                isDirty={isSurnameDirty} 
                error={surnameError} 
                handler={surnameHandler} 
                value={surname} 
                blurHandler={blurHandler} 
                nameItem='Фамилия' 
                name={lastname}
            />
            <ValidationInput 
                className="add-friends-input" 
                isDirty={isAgeDirty} 
                error={ageError} 
                handler={ageHandler} 
                value={age} 
                blurHandler={blurHandler} 
                nameItem='Возраст' 
                name={'age'}
            />
            <button 
                disabled={!isFormValid} 
                className="add-friends-button" 
                type="button"
                onClick={clickingOnAddFriendsButton}
            >
                Добавить!!
            </button>
        </form>
    )
})
