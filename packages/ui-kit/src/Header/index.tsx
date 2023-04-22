import React from 'react';
import styles from './Header.module.css';

export type HeaderProps = {
  children: React.ReactNode,
  className?: string,
};

export function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      {children}
    </header>
  );
}
