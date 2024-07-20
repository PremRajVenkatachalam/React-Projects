import React,{createContext} from 'react' ;
import Login from './Login';

export const DataContext = createContext();


const Data = () => {

   
const userData = 
    [
        {
            "id": 1,
            "username": "johndoe",
            "password": "password123"
        },
        {
            "id": 2,
            "username": "janesmith",
            "password": "qwerty456"
        },
        {
            "id": 3,
            "username": "alicejones",
            "password": "alice789"
        },
        {
            "id": 4,
            "username": "bobmartin",
            "password": "martin123"
        },
        {
            "id": 5,
            "username": "charliebrown",
            "password": "brown456"
        },
        {
            "id": 6,
            "username": "davidwilliams",
            "password": "williams789"
        },
        {
            "id": 7,
            "username": "emilydavis",
            "password": "davis123"
        },
        {
            "id": 8,
            "username": "frankthomas",
            "password": "thomas456"
        },
        {
            "id": 9,
            "username": "gracelee",
            "password": "lee789"
        },
        {
            "id": 10,
            "username": "henryclark",
            "password": "clark123"
        }
    ];

    const usernames = userData.map((user) => user.username);
    const passwords = userData.map((pass)=>{
        return pass.password;
    })
    console.log(passwords);
    console.log(usernames);


    return (
        <DataContext.Provider value={{usernames, passwords}}>
            <Login />
        </DataContext.Provider>
    );
}


export default Data;