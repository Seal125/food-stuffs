import styles from '../app/page.module.css';

export default function Navbar() {
    return (<header>
        <nav>
            <ul className={styles.navbar}>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/food">Food</a>
                </li>
            </ul>
        </nav>
    </header>);
}