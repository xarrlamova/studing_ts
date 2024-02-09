import "./styles.css"
import React, {memo} from 'react';
import {Table} from "antd";
import {ColumnInterface} from "./interfaces";
import {FriendsProps} from "./interfaces";


export const Friends = memo((props: FriendsProps) => {
    const {friends} = props;
    if (!friends.length) {
        return(<div>
            <h3>Друзей нет :(</h3>
        </div>)
    }

    const columns: ColumnInterface[] = [
        {
            key: 'firstname',
            title: 'Имя',
            dataIndex: 'firstname'
        },
        {
            key: 'lastname',
            title: 'Фамилия',
            dataIndex: 'lastname'
        },
        {
            key: 'age',
            title: 'Возраст',
            dataIndex: 'age'
        },
    ]

    return (
            <Table className="table" pagination={false} columns={columns} dataSource={friends}/>
        )
})
