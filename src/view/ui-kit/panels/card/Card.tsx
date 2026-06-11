import { memo, type ReactNode } from 'react';
import cn from 'classnames';
import { Loadable } from '../loadable';
import { ECardType } from './card-enums';
import styles from './card.module.css';

type TCardProps = {
  as: 'aside' | 'div' | 'section' | 'ul' | 'li';
  children: ReactNode;
  className?: string;
  loading?: string | boolean;
  type?: ECardType;
};

export const Card = memo<TCardProps>(({
  as: Tag = 'div',
  children,
  className,
  loading,
  type = ECardType.Default,
}) => {
  return (
    <Tag className={cn(styles[`card${type}`], className)}>
      {children}
      {loading && (
        <Loadable
          as="div"
          className={styles.loader}
          loading={loading!}
        />
      )}
    </Tag>
  );
});
