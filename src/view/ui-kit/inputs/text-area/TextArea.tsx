import { memo } from 'react';
import { FieldLabel } from '../../labels';
import styles from './text-area.module.css';

type TTextAreaProps = {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
};

export const TextArea = memo<TTextAreaProps>(({
  id,
  label,
  name,
  placeholder,
}) => {
  return (
    <FieldLabel label={label} htmlFor={id}>
      <textarea
        className={styles.textarea}
        id={id}
        name={name}
        placeholder={placeholder}
        rows={5}
      />
    </FieldLabel>
  );
});
