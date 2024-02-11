const Navbar = ({newValue}) => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Menu</a></li>
                    <li><a href="">{!newValue ? "Contact" : newValue}</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar