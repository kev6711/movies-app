import { useLocation, Link } from "react-router-dom";

const Header = () => {
    const pathname = useLocation().pathname;
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to='/' className={pathname === "/" ? "active" : ""}>
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to='/favorites' className={pathname === "/favorites" ? "active" : ""}>
                            Coups de coeur
                        </Link>
                    </li>
                </ul>
            </nav>
            <h1>React Movies</h1>
        </header>
    );
};

export default Header;
