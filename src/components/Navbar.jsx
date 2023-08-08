import logo from "../assets/react.svg";

function Navbar() {
    return(
        <nav>
            <img src={logo} alt="logo" className="navbar-image" />
            <h2 className="nav--logo">AirBnb</h2>
        </nav>
    )
}

export default Navbar