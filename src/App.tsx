import './App.css';
import {Avatar} from "./Components/Avatar";
import {User} from "./Components/User";
import {Friends} from "./Components/Friends";
import {useState} from "react";
import {AddFriend} from "./Components/AddFriend";
import {FriendInterface, EditInterface, UserInterface} from "./types/types";


function App(): JSX.Element {

    const [friends, setFriends] = useState<Array<FriendInterface>>([
        {
            id: 1,
            firstname: 'Руслан',
            lastname: 'Набеев',
            age: 25,
        },
        {
            id: 2,
            firstname: 'Ангелина',
            lastname: 'Харламова',
            age: 27
        }
    ])

    const [user, setUser] = useState<UserInterface>({
        firstname: 'Алиса',
        lastname: 'Харламова',
    })

    const addFriend = (friend: FriendInterface) => {
        const id: number = Date.now();
        setFriends(prevState => ([...prevState, {id, ...friend}]))
    }

    const onEdit = (info: EditInterface) => {
        setUser(state => ({...state, [info.nameForm]: info.valueForm}))
    }


    return (
        <div>
            <Avatar/>
            <User user={user} onEdit={onEdit}/>
            <div className="add-friends"><AddFriend onAdd={addFriend}/></div>
            <div className="friends">
                <Friends friends={friends}/>
            </div>
        </div>

    );
}

export default App;
