import cn from 'classnames';
import styles from './loadable.module.css';

import type { ReactNode } from 'react';

type TLoadableProps = {
  as?: 'section' | 'aside' | 'div' | 'ul';
  children?: ReactNode;
  className?: string;
  loading: string | boolean;
};

export const Loadable = ({
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

  const beforeContent = typeof loading === 'string' ? loading : 'Загрузка...';

  return (
    <Tag className={classes} data-before-content={beforeContent}>
      {children}
    </Tag>
  );
};
