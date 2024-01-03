import type {FC} from 'react';

const InputField: FC<JSX.IntrinsicElements['input']> = props => (
  <input {...props} className="border border-black" />
);

export default InputField;
