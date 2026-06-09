import { memo, type ReactNode } from 'react';
import cn from 'classnames';
import { ECardType } from './card-enums';
import styles from './card.module.css';

type TCardProps = {
  as: 'aside' | 'div' | 'section' | 'ul' | 'li';
  children: ReactNode;
  className?: string;
  type?: ECardType;
};

export const Card = memo<TCardProps>(({
  as: Tag = 'div',
  children,
  className,
  type = ECardType.Default,
}) => {
  return (
    <Tag className={cn(styles[`card${type}`], className)}>
      {children}
    </Tag>
  );
});
