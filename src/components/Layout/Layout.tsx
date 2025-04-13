import { Outlet, Link } from "react-router-dom";

import '@styles/layout.sass';

const Layout = () => {
    return (
        <div className="layout">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/about">À propos</Link></li>
                        <li><Link to="/projects">Projets</Link></li>
                        <li><Link to="/garden">Jardin</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>© Cheporté, 2025</p>
            </footer>
        </div>
    );
}

export default Layout;