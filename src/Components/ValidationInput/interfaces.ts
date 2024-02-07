import React from "react";

export interface ValidationInputProps {
    /** Флаг, был ли пользователь в поле */
    isDirty: boolean,

    /** Ошибка */
    error: string,

    /** Обработчик событий */
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void,

    /** Значение поля */
    value: string,

    /** Функция, был ли пользователь в поле */
    blurHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,

    /** Название поля на русском */
    nameItem: string,

    /** СSS - свойство */
    className: string,

    /** Имя элемента поля */
    name?: string,
}