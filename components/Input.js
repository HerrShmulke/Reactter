import styles from '../styles/Input.module.css';
import { IInputProps } from './Input';

/**
 *
 * @param {IInputProps} param0
 */
export default function Input({ value, onChange, label, maxLength, ...props }) {
  const updateValue = (element) => {
    if (maxLength && element.target.value.length > maxLength) return;
    onChange(element);
  };

  return (
    <div>
      <label>
        <span className={styles.label}>{label}</span>
        <input className={styles.input} value={value} onChange={updateValue} {...props} />
      </label>
    </div>
  );
}
