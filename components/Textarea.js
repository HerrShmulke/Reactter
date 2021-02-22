import autosize from 'autosize';
import { useEffect, useRef } from 'react';
import styles from '../styles/Textarea.module.css';

/**
 * @param {Object} param0
 * @param {string} param0.value
 * @param {string} param0.placeholder
 * @param {number} param0.maxLength
 * @param {string} param0.name
 * @param {import('react').Dispatch<import('react').SetStateAction<string>>} param0.setValue
 */
export default function Textarea({ value, setValue, placeholder, maxLength, name }) {
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
    <textarea
      value={value}
      onChange={updateValue}
      placeholder={placeholder}
      className={styles.textarea}
      ref={textareaRef}
      onKeyDown={preventEnter}
      name={name}
    ></textarea>
  );
}
