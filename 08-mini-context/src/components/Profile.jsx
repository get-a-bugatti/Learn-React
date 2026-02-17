import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Profile () {
    const {user} = useContext(UserContext);

    if (!user.username) return <p>Please login first.</p>

    return <p>Welcome {user.username}</p>
}