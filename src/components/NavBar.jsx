import {navLinks} from "../constants";

const NavBar = () => {
    return (
        <header>
            <nav>
                <img  src="/logo1.svg" alt="Optiprim3" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
