import { memo } from 'react';
import { dictionaries, type EDictionaryName } from '@/services/dictionary-service';
import { Status, type EStatusType } from '@/view/ui-kit';

type TDictionaryStatusProps = {
  className?: string;
  dictionary: EDictionaryName;
  statusColor?: EStatusType;
  value: string | number | symbol;
}

export const DictionaryStatus = memo(({
  className,
  dictionary,
  statusColor,
  value,
}: TDictionaryStatusProps) => {
  return (
    <Status className={className} status={statusColor}>
      {dictionaries[dictionary].get(value as any)}
    </Status>
  );
});
