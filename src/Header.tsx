import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    &nbsp; &nbsp; <Link to="/pays">Pays</Link>
                    &nbsp; &nbsp; <Link to="/bidon">Bidon</Link>
                </nav>
            </div>
        </>
    );
}

export default Header;