import cn from 'classnames';
import { memo, type ReactNode } from 'react';
import styles from './text.module.css';

type TTextProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'figcaption';
  children: ReactNode;
  className?: string;
};

export const Text = memo<TTextProps>(({
  as: Tag = 'p',
  children,
  className,
}) => {
  return (
    <Tag className={cn(styles[Tag], className)}>
      {children}
    </Tag>
  );
});
