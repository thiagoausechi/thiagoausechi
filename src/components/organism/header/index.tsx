import styles from './styles.module.css';

import WindowButtons from '../../molecules/window-buttons';
import NavTab from '../../atoms/nav-tab';

const links = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/blog", label: "blog" }
];

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.taskbar}>
        <WindowButtons />
        <div className={styles.title}>thiago ausechi / portfolio</div>
      </div>
      <div className={styles.tabs}>
        {links.map(({ href, label }) => <NavTab key={href} href={href} title={label} />)}
        <div className={styles.filler} />
      </div>
    </nav>
  );
}