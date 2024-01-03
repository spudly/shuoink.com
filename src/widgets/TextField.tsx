import type {FC} from 'react';
import InputField from './InputField';

const TextField: FC<Omit<JSX.IntrinsicElements['input'], 'type'>> = props => (
  <InputField {...props} type="text" />
);

export default TextField;
