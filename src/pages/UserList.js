import PersonList from "../componentes-crud/PersonList";

export default function UserList(){
    return(
        <div className='container userlist'>
            <div className='container userlist-container'>
                <PersonList />
            </div>
        </div>
    )
}