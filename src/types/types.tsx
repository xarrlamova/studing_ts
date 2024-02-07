export interface FriendInterface extends UserInterface {
    /** Возраст */
    age: number,

    /** ID друга */
    id?: number,
}

export interface UserInterface {
    /** Имя */
    firstname: string,

    /** Фамилия */
    lastname: string,
}

/** Функция сохранения редактируемого значения в данных пользователя*/
export interface EditInterface {
    /** Название поля */
    nameForm: string,

    /** Значение поля */
    valueForm: string,
}