import { memo, type ReactNode } from 'react';
import { ECardType } from './card-enums';
import styles from './card.module.css';

type TCardProps = {
  as: 'aside' | 'div' | 'section' | 'ul' | 'li';
  children: ReactNode;
  type?: ECardType;
};

export const Card = memo<TCardProps>(({
  as: Tag = 'div',
  children,
  type = ECardType.Default,
}) => {
  return (
    <Tag className={styles[`card${type}`]}>
      {children}
    </Tag>
  );
});
