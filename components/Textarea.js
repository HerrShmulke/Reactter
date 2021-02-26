import autosize from 'autosize';
import { useEffect, useRef } from 'react';
import styles from '../styles/Textarea.module.css';

/**
 * @param {import('./Textarea').ITextareaProps} param0
 */
export default function Textarea({ value, onChange, maxLength, counter, CustomFooter, ...props }) {
  let textareaRef = useRef(null);

  /**
   * @param {import('react').ChangeEvent<HTMLTextAreaElement>} event
   */
  const updateValue = (event) => {
    if (maxLength && event.target.value.length > maxLength) return;
    onChange(event);
  };

  const preventEnter = (event) => {
    if (event.which === 13) {
      event.preventDefault();
    }
  };

  useEffect(() => {
    autosize(textareaRef.current);
  });

  return (
    <div>
      <textarea
        {...props}
        value={value}
        className={styles.textarea}
        onChange={updateValue}
        onKeyDown={preventEnter}
        ref={textareaRef}
      ></textarea>

      <div className={styles.footer}>
        {counter ? (
          <span className={`${styles.counter} ${value.length >= maxLength - maxLength * 0.1 ? styles.redCounter : ''}`}>
            {value.length}/{maxLength}
          </span>
        ) : (
          ''
        )}

        {CustomFooter ? (
          <div className={styles.customFooter}>
            <CustomFooter />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
