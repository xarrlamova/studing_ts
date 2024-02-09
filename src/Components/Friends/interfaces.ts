import {FriendInterface} from "../../types/types";

export interface ColumnInterface {
    /** Ключ столбца */
    key: string;

    /** Название столбца */
    title: string;

    /** Название поля, из которого будут браться данные */
    dataIndex: string;
}

export interface FriendsProps {
    friends: Array<FriendInterface>
}