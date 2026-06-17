import cn from 'classnames';
import {
  memo,
  type ReactNode,
  type MouseEvent,
} from 'react';
import { EFlatButtonType } from './flat-button-enums';
import styles from './flat-button.module.css';

type TFlatButtonProps = {
  children: ReactNode;
  disabled?: boolean;
  htmlType: 'button' | 'submit';
  loading?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: EFlatButtonType;
};

export const FlatButton = memo<TFlatButtonProps>(({
  children,
  disabled,
  htmlType,
  loading,
  onClick,
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
      onClick={onClick}
      type={htmlType}
    >
      {children}
    </button>
  );
});
