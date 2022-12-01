import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/About'>About</Link>
            <Link to='/LogOut'>Logout</Link>
        </nav>
    )
}