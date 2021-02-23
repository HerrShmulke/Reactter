import autosize from 'autosize';
import { useEffect, useRef } from 'react';
import styles from '../styles/Textarea.module.css';

/**
 * @param {Object} param0
 * @param {string} param0.value
 * @param {string} param0.placeholder
 * @param {number} param0.maxLength
 * @param {string} param0.name
 * @param {boolean} param0.counter
 * @param {JSX.Element} param0.CustomFooter
 * @param {import('react').DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>} param0.props
 * @param {import('react').Dispatch<import('react').SetStateAction<string>>} param0.setValue
 */
export default function Textarea({ value, setValue, placeholder, maxLength, counter, CustomFooter, ...props }) {
  let textareaRef = useRef(null);

  const updateValue = (element) => {
    if (maxLength && element.target.value.length > maxLength) return;
    setValue(element.target.value);
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
