import './App.css';
import {Avatar} from "./Components/Avatar";
import {User} from "./Components/User";
import {Friends} from "./Components/Friends";
import {useCallback, useState} from "react";
import {AddFriend} from "./Components/AddFriend";
import {FriendInterface, EditInterface, UserInterface} from "./types/types";
import {DATA} from "./constants";


function App(): JSX.Element {

    const [friends, setFriends] = useState<Array<FriendInterface>>(DATA);

    const [user, setUser] = useState<UserInterface>({
        firstname: 'Алиса',
        lastname: 'Харламова',
    });

    const addFriend = useCallback((friend: FriendInterface): void => {
            const id: number = Date.now();
            setFriends(prevState => ([...prevState, {id, ...friend}]))
        }, []

    )

    const onEdit = useCallback((info: EditInterface): void => {
        setUser(state => ({...state, [info.nameForm]: info.valueForm}))
    }, [])


    return (
        <div>
            <Avatar/>
            <User user={user} onEdit={onEdit}/>
            <div className="add-friends"><AddFriend onAdd={addFriend}/></div>
                <Friends friends={friends}/>
        </div>

    );
}

export default App;
