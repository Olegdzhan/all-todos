import { memo, type ReactNode } from 'react';
import cn from 'classnames';
import { EFlatButtonType } from './flat-button-enums';
import styles from './flat-button.module.css';

type TFlatButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  htmlType: 'button' | 'submit';
  type?: EFlatButtonType;
};

export const FlatButton = memo<TFlatButtonProps>(({
  children,
  disabled,
  htmlType,
  type = EFlatButtonType.Default,
}) => {
  const calculatedClasses = cn(styles.btn, styles[type]);

  return (
    <button
      className={calculatedClasses}
      disabled={disabled}
      type={htmlType}
    >
      {children}
    </button>
  );
});
