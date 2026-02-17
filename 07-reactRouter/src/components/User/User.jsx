import { useParams } from "react-router-dom"

export default function User() {
    const {userId} = useParams();
    return(
        <div className="text-center text-xl bg-gray-500 m-4 p-4">User:
            <div className="bg-yellow-500">
                UserID : {userId}
                <br/>
                UserID Type : {typeof(userId)}
            </div>
        </div>
    );
}