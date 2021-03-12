import autosize from 'autosize';
import { forwardRef, useEffect, useRef } from 'react';
import styles from '../styles/Textarea.module.css';

/**
 * @param {import('./Textarea').ITextareaProps} param0
 */
function Textarea({ value, onChange, maxLength, counter, CustomFooter, ...props }, ref) {
  let textareaRef = useRef(null);

  /**
   * @param {import('react').ChangeEvent<HTMLTextAreaElement>} event
   */
  const updateValue = (event) => {
    if (maxLength && event.target.value.length > maxLength) return;
    onChange(event);
  };

  const preventEnter = (event) => {
    if (event.key.toLowerCase() === 'enter') {
      event.preventDefault();
    }

    props.onKeyDown(event);
  };

  useEffect(() => {
    autosize(textareaRef.current);
    ref.current = textareaRef.current;
  }, [textareaRef]);

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

export default forwardRef(Textarea);
