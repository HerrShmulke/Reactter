import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

/**
 * @param {Object} param0
 * @param {Object} param0.user
 * @param {string} param0.user.name
 * @param {string} param0.user.avatarUrl
 */
function UserProfile({ user }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className={styles.profile} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {user.name}
      <Image
        className={styles.avatar}
        src={user.avatarUrl}
        alt={`Аватар пользователя ${user.name}`}
        width={30}
        height={30}
      />
      <svg width='12' height='12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M6 7.1L3.32 4.865a.5.5 0 10-.64.768l3 2.5a.5.5 0 00.64 0l3-2.5a.5.5 0 00-.64-.768L6 7.099z'
          fill='#99A2AD'
        />
      </svg>
      {isHover ? <ProfileMenu /> : ''}
    </div>
  );
}

function ProfileMenu() {
  return (
    <div className={styles.profileMenu}>
      <div className={styles.profileMenuItem}>
        <Image src='/profile.svg' width={22} height={22} />
        Настройки
      </div>
      <div className={styles.profileMenuItem}>
        <Image src='/exit.svg' width={22} height={22} />
        Выйти
      </div>
    </div>
  );
}

/**
 * @param {Object} param0
 * @param {Object} param0.user
 * @param {string} param0.user.name
 * @param {string} param0.user.avatarUrl
 */
export default function Header({ user }) {
  return (
    <header className={styles.header}>
      <img src='/logo.svg' />
      {user ? <UserProfile user={user} /> : ''}
    </header>
  );
}
