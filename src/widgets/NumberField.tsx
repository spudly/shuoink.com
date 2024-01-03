import type {FC} from 'react';
import InputField from './InputField';

const NumberField: FC<Omit<JSX.IntrinsicElements['input'], 'type'>> = props => (
  <InputField {...props} type="number" />
);

export default NumberField;
