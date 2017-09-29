import * as React from 'react';

import { map } from 'pura/array';
import { snakeCase } from 'pura/string';

import './Input.scss';

interface TextInput {
  (props: {
    label: string,
    value: string,
    onChange: (value: string) => void,
    type?: 'text' | 'password',
    placeholder?: string,
    className?: string,
  }): JSX.Element
}

export const TextInput: TextInput = ({ label, value, onChange, placeholder, className = '', type = 'text' }) => (
  <div className={`fieldset text ${className}`}>
    <label>{label}</label>
    <input
      required={true}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      placeholder={placeholder}
      type={type}
    />
  </div>
);

export const TextAreaInput: TextInput = ({ label, value, onChange, placeholder = '', className = '' }) => (
  <div className={`fieldset textarea ${className}`}>
    <label>{label}</label>
    <textarea
      required={true}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      placeholder={placeholder}
    />
  </div>
);

interface SearchInput {
  (props: {
    label: string,
    value: string,
    onChange: (value: string) => void,
    options: string[],
    placeholder?: string,
    className?: string,
  }): JSX.Element
}

export const SearchInput: SearchInput = ({ label, value, onChange, placeholder, className = '', options }) => (
  <div className={`fieldset text ${className}`}>
    <label>{label}</label>
    <input
      required={true}
      value={value}
      onChange={({ target: { value } }) => onChange(value)}
      list={snakeCase(label)}
      placeholder={placeholder}
      type="Search"
      size={Math.max(...map(options, option => option.length))}
    />
    <datalist id={snakeCase(label)}>{
      map(options, option => <option key={option} >{option}</option>)
    }</datalist>
  </div>
);

interface NumberInput {
  (props: {
    label: string,
    value: number,
    onChange: (value: number) => void,
    min?: number,
    max?: number,
    placeholder?: string,
    className?: string,
  }): JSX.Element
}

export const NumberInput: NumberInput = ({ label, value, onChange, min, max, placeholder, className }) => (
  <div className={`fieldset number ${className}`}>
    <label>{label}</label>
    <input
      required={true}
      value={value}
      min={min}
      max={max}
      onChange={({ target: { value } }) => onChange(Number(value))}
      placeholder={placeholder}
      type="number"
    />
  </div>
);

type DropDownProps<data> = {
  label: string;
  value: data | null;
  onChange: (value: data) => void;
  toString: (value: data) => string;
  options: data[];
  className?: string;
  reselectNone?: boolean;
}

type DropDownState<data> = {
  interaction: Map<string, data>
}

export class DropDown<data> extends React.PureComponent<DropDownProps<data>, DropDownState<data>> {

  state = {
    interaction: new Map(),
  };

  constructor(props: DropDownProps<data>) {
    super(props);
    const { options, toString } = this.props;
    this.setState({
      interaction: new Map(map<data, [string, data]>(options, data => [toString(data), data])),
    });
  }

  componentWillReceiveProps(newProps: DropDownProps<data>) {
    const { options, toString } = newProps;
    if (options !== this.props.options) {
      this.setState({
        interaction: new Map(map<data, [string, data]>(options, data => [toString(data), data])),
      });
    }
  }

  render() {
    const { label, value, onChange, toString, className, reselectNone } = this.props;
    const { interaction } = this.state;
    return (
      <div className={`fieldset dropdown ${className}`}>
        <label>{label}</label>
        <select
          value={value
            ? toString(value)
            : '----'
          }
          onChange={e => {
            const selection = interaction.get(e.target.value);
            if (selection) {
              onChange(selection);
            }
          }}
        >
          <option disabled={!reselectNone} value="none" >----</option>
          {map(
            [...interaction.keys()],
            name => <option value={name} >{name}</option>
          )}
        </select>
      </div>
    );
  }
}

interface Button {
  (props: {
    label: string,
    onClick: () => void,
    disabled?: boolean,
    className?: string,
  }): JSX.Element
}

export const Button: Button = ({ label, disabled, className = '', onClick }) => (
  <button
    className={className}
    onClick={() => onClick()}
    disabled={disabled}
  >{label}</button>
);

interface CheckBox {
  (props: {
    label: string,
    onChange: (value: boolean) => void,
    checked: boolean,
    className?: string,
  }): JSX.Element
}

export const CheckBox: CheckBox = ({ label, checked, className = '', onChange }) => (
  <div className={`fieldset checkbox ${className}`}>
    <label htmlFor={snakeCase(label)} >{label}</label>
    <input
      id={snakeCase(label)}
      name={label}
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
    />
  </div>
);

interface FileInput {
  (props: {
    label: string;
    onUpload: (file: FileList) => void;
  }): JSX.Element
}

export const FileInput: FileInput = ({ label, onUpload }) => (
  <div className="fieldset file">
    <label htmlFor={snakeCase(label)} >{label}</label>
    <input
      type="file"
      id={snakeCase(label)}
      multiple
      accept="image/*"
      onChange={evt => evt.target.files && onUpload(evt.target.files)}
    />
  </div>
);
