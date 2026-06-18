import { EDictionaryName } from './dictionary-names';
import * as dicts from './values';

export const dictionaries = dicts as { [P in EDictionaryName]: typeof dicts[P] };

export { EDictionaryName };
