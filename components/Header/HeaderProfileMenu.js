import Image from 'next/image';
import styles from '../../styles/Header.module.css';

export default function HeaderProfileMenu() {
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
