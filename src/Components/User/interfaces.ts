import {EditInterface, UserInterface} from "../../types/types";

export interface EditInfoUserProps extends InfoUserProps{
    /** Функция, управляет состояние - отображать форму редактирования или нет */
    showEditForm: () => void,
}

export interface UserProps{
    /** Функция сохранения редактируемого значения в данных пользователя*/
    onEdit: (info: EditInterface) => void,

    /** Данные пользователя (Имя, Фамилия) */
    user: UserInterface,
}

export interface InfoUserProps extends EditInterface{
    /** Функция сохранения редактируемого значения в данных пользователя*/
    onEdit: (info: EditInterface) => void,

    /** Название значения на русском*/
    nameItem: string,
}