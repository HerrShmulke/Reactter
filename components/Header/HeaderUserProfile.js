import { useState } from 'react';
import Image from 'next/image';
import HeaderProfileMenu from './HeaderProfileMenu';
import styles from '../../styles/Header.module.css';

/**
 * @param {import("./HeaderUserProfile").IHeaderUserProfileProps} param0
 */
export default function HeaderUserProfile({ user }) {
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
      {isHover ? <HeaderProfileMenu /> : ''}
    </div>
  );
}
