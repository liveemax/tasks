import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <Link style={{padding:"10px"}} to={"/"}>Главная</Link>
            <Link style={{padding:"10px"}} to={"/employees"}>Сотрудники</Link>
        </div>
    );
}