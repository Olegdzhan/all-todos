import { memo, type ReactNode } from 'react';
import cn from 'classnames';
import { EFlatButtonType } from './flat-button-enums';
import styles from './flat-button.module.css';

type TFlatButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  htmlType: 'button' | 'submit';
  loading?: boolean;
  type?: EFlatButtonType;
};

export const FlatButton = memo<TFlatButtonProps>(({
  children,
  disabled,
  htmlType,
  loading,
  type = EFlatButtonType.Default,
}) => {
  const calculatedClasses = cn(
    styles.btn,
    styles[type],
    { [styles.loading]: loading },
  );

  return (
    <button
      className={calculatedClasses}
      disabled={disabled || loading}
      type={htmlType}
    >
      {children}
    </button>
  );
});
