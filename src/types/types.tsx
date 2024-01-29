export interface FriendInterface {
    /** ID друга */
    id?: number,

    /** Имя друга */
    firstname: string,

    /** Фамилия друга */
    lastname: string,

    /** Возраст друга */
    age: number,
}

export interface UserInterface {
    /** Имя пользователя */
    firstname: string,

    /** Фамилия пользователя */
    lastname: string,
}

/** Функция сохранения редактируемого значения в данных пользователя*/
export interface EditInterface {
    /** Название поля в форме редактирования */
    nameForm: string,

    /** Значение поля в форме редактирования */
    valueForm: string,
}