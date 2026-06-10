import { memo, type ReactNode } from 'react';
import cn from 'classnames';
import styles from './loadable.module.css';

type TLoadableProps = {
  as?: 'section' | 'aside' | 'div' | 'ul';
  children: ReactNode;
  className?: string;
  loading: boolean;
};

export const Loadable = memo(({
  as: Tag = 'div',
  children,
  className,
  loading,
}: TLoadableProps) => {
  const classes = cn(
    styles.container,
    { [styles.loading]: loading },
    className,
  );

  return (
    <Tag className={classes}>
      {children}
    </Tag>
  );
});
