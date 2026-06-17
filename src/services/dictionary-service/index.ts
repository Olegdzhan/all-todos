import * as dicts from './values';

import type { EDictionaryName } from './dictionary-names';

export const dictionaries = dicts as { [P in EDictionaryName]: typeof dicts[P] };

export type { EDictionaryName };
