import Image from 'next/image';
import styles from '../styles/PostCard.module.css';

/**
 * @param {Object} param0
 * @param {string} param0.avatarUrl
 * @param {number} param0.commentsCount
 * @param {number} param0.likesCount
 * @param {string} param0.authorName
 * @param {string} param0.message
 * @param {boolean} param0.isLikes
 */
export default function PostCard({ avatarUrl, commentsCount, likesCount, authorName, message, isLikes }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>
          <Image
            className={styles.avatarBox}
            src={avatarUrl}
            alt={`Аватар пользователя ${authorName}`}
            width={48}
            height={48}
          />
        </div>

        <div className={styles.content}>
          <span className={styles.author}>{authorName}</span>
          <span className={styles.message}>{message}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.footerItem}>
          <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg' tabIndex='0' role='button'>
            {isLikes ? (
              <path
                d='M12.63 5.63c2.27-1.68 5.44-1.78 7.4 0l.24.23a6.03 6.03 0 01-.04 8.49l-7.22 6.6a1.5 1.5 0 01-2.02 0L3.73 14.3a6.02 6.02 0 01.23-8.67c1.97-1.8 5.14-1.69 7.45.03.2.17.4.35.59.54.2-.2.41-.39.63-.58z'
                fill='#E64646'
              />
            ) : (
              <path
                className={styles.selected}
                d='M18.84 12.9a4.02 4.02 0 00-.15-5.78c-1.2-1.1-3.31-1.03-4.82.08-.38.32-.74.7-1.08 1.14a1 1 0 01-1.58 0 7.9 7.9 0 00-1.04-1.1c-1.55-1.15-3.65-1.22-4.86-.12l-.15.14a4.01 4.01 0 00-.04 5.61L12 19.16l6.84-6.25zm-6.2-7.27c2.26-1.68 5.43-1.78 7.4 0l.23.23a6.03 6.03 0 01-.04 8.49l-7.22 6.6a1.5 1.5 0 01-2.02 0L3.73 14.3a6.02 6.02 0 01.23-8.67c1.97-1.8 5.14-1.69 7.45.03.2.17.4.35.59.54.2-.2.41-.39.63-.58z'
                fill='#99A2AD'
              />
            )}
          </svg>
          {likesCount}
        </div>
        <div className={styles.footerItem}>
          <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg' tabIndex='0' role='button'>
            <path
              className={styles.selected}
              d='M13.77 17.45c.25-.23.58-.35.92-.35h3.81c1 0 1.6-.6 1.6-1.6v-8c0-1-.6-1.6-1.6-1.6h-12c-1 0-1.6.6-1.6 1.6v8c0 1 .6 1.6 1.6 1.6H9c.7.2.7.2.9.9v2.83l3.87-3.38zm-4.93 5.08A1.98 1.98 0 018.1 21v-2.1H6.5c-2 0-3.4-1.4-3.4-3.4v-8c0-2 1.4-3.4 3.4-3.4h12c2 0 3.4 1.4 3.4 3.4v8c0 2-1.4 3.4-3.4 3.4h-3.66l-3.73 3.26c-.73.72-1.59.89-2.27.37z'
              fill='#99A2AD'
            />
          </svg>
          {commentsCount}
        </div>
        <div className={styles.footerItem}>
          <svg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg' tabIndex='0' role='button'>
            <path
              className={styles.selected}
              d='M11.88 3.43a2.22 2.22 0 00-2.05 2.22v2.2H9.8a10.23 10.23 0 00-8.04 11.1.92.92 0 001.65.47l.2-.25A9.31 9.31 0 019.6 15.8l.22-.02v2.58a2.2 2.2 0 003.57 1.75l8.04-6.35a2.24 2.24 0 000-3.5L13.4 3.9a2.2 2.2 0 00-1.36-.47h-.16zm.16 1.86c.08 0 .16.03.22.08l8.04 6.34a.36.36 0 010 .57l-8.04 6.35a.36.36 0 01-.58-.28v-3.57a.93.93 0 00-.94-.93h-.24l-.35.02a11.13 11.13 0 00-6.29 2.45l-.18.15.03-.14a8.35 8.35 0 017.16-6.77.93.93 0 00.8-.92l.01-2.99c0-.2.16-.36.36-.36z'
              fill='#99A2AD'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
