'use client';

import styles from './styles.module.css';

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

export default function NavTab({ href, title }: any) {
  const segment = useSelectedLayoutSegments();
  const active = href === `/${segment}`;

  return (
    <Link
      href={href}
      className={`${styles.tab} ${active ? styles.active : ''}`}
    >
      {active ? `<${title}/>` : `_${title}`}
    </Link>
  );
}