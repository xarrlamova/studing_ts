import React, {memo} from "react";

interface ValidationInputProps {
    /** Флаг, был ли пользователь в поле */
    isDirty: boolean,

    /** Ошибка */
    error: string,

    /** Обработчик событий ПОСМОТРЕТЬ*/
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void,

    /** Значение поля */
    value: string,

    /** Функция, был ли пользователь в поле */
    blurHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,

    /** Название поля на русском */
    nameItem: string,

    /** Имя элемента поля */
    name?: string,

    /** СSS - свойство */
    className: string,
}

export const ValidationInput = memo((props: ValidationInputProps) => {
    const {isDirty, error, handler, value, blurHandler, nameItem, name, className} = props;

    return (
        <>
            {(isDirty && error) && <div className='error'>{error}</div>}
            <input className={className} placeholder={nameItem}
                   onChange={handler} value={value} onBlur={blurHandler} name={name}/>
        </>
    )
})