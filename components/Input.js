import styles from '../styles/Input.module.css';

/**
 * @param {Object} param0
 * @param {string} param0.value
 * @param {string} param0.label
 * @param {string} param0.placeholder
 * @param {number} param0.maxLength
 * @param {boolean} param0.password
 * @param {string} param0.name
 * @param {import('react').Dispatch<import('react').SetStateAction<string>>} param0.setValue
 */
export default function Input({ value, setValue, label, placeholder, password, maxLength, name }) {
  const updateValue = (element) => {
    if (maxLength && element.target.value.length > maxLength) return;
    setValue(element.target.value);
  };

  return (
    <div>
      <label>
        <span className={styles.label}>{label}</span>
        <input
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={updateValue}
          type={password ? 'password' : undefined}
          name={name}
        />
      </label>
    </div>
  );
}
