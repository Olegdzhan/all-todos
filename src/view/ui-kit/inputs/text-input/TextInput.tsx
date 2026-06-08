import { memo } from 'react';
import { FieldLabel } from '../../labels';
import styles from './text-input.module.css';

type TTextInputProps = {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
};

export const TextInput = memo<TTextInputProps>(({
  id,
  label,
  name,
  placeholder,
}) => {
  return (
    <FieldLabel label={label} htmlFor={id}>
      {label}
      <input
        className={styles.input}
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
      />
    </FieldLabel>
  );
})