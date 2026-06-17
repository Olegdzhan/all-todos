import cn from 'classnames';
import { memo, type ReactNode } from 'react';
import { EStatusType } from './status-enums';
import styles from './status.module.css';

type TStatusProps = {
  children: ReactNode;
  className?: string;
  status?: EStatusType;
};

export const Status = memo(({
  children,
  className,
  status = EStatusType.Info,
}: TStatusProps) => {
  return (
    <aside className={cn(styles.status, className)}>
      <span className={cn(styles.pulse, styles[status])} />
      {children}
    </aside>
  );
});
