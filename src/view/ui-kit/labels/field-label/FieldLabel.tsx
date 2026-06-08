import { memo, type ReactNode } from 'react';
import styles from './fiel-label.module.css';

type TFieldLabelProps = {
  children: ReactNode;
  htmlFor?: string;
  label: string;
};

export const FieldLabel = memo<TFieldLabelProps>(({
  children,
  htmlFor,
  label,
}) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {label}
      {children}
    </label>
  );
});
