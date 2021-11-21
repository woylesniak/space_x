import React, { FC, useState } from 'react';
import clsx from 'clsx';

export type RefInput =
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type InputMode =
  | 'none'
  | 'text'
  | 'decimal'
  | 'numeric'
  | 'tel'
  | 'search'
  | 'email'
  | 'url';

export interface InputBaseProps {
  id?: string;
  type?: string;
  name?: string;
  staticPlaceholder?: boolean;
  placeholder?: string;
  error?: string;
  value?: string | number;
  disabled?: boolean;
  readOnly?: boolean;
  cy?: string;
  customClass?: string;
  register?: RefInput;
  inputMode?: InputMode;
  maxLength?: number;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onInputBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const InputBase: FC<InputBaseProps> = ({
  id,
  name,
  type = 'text',
  staticPlaceholder = false,
  placeholder,
  error,
  value,
  disabled = false,
  readOnly = false,
  cy,
  customClass,
  register,
  inputMode = 'text',
  maxLength,
  onChangeInput,
  onInputFocus,
  onInputBlur,
  onKeyPress,
}) => {
  let ref = register ? register : null;
  const inputId = id;
  const [inputType, setInputType] = useState<string>(type);

  const inputClasses = clsx([
    'input',
    !staticPlaceholder && 'input--dynamic',
    error && 'input--error',
    (disabled || readOnly) && 'input--disabled',
    customClass,
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    onChangeInput && onChangeInput(e);
  };

  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.persist();
    onInputFocus && onInputFocus(e);
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    e.persist();
    onInputBlur && onInputBlur(e);
  };

  const advancedPlaceholder = !staticPlaceholder && (
    <label className='input__label' htmlFor={inputId}>
      {placeholder}
    </label>
  );
  const errorLabel = error && (
    <span className='input__label--error indicator'>{error}</span>
  );

  return (
    <div className={inputClasses}>
      <input
        id={inputId}
        name={name}
        type={inputType}
        value={value}
        placeholder={staticPlaceholder ? placeholder : ' '}
        data-cy={cy}
        disabled={disabled}
        readOnly={readOnly}
        //trick to disable autofill for Chrome
        autoComplete='new-password'
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onKeyPress={onKeyPress}
        ref={ref}
        inputMode={inputMode}
        maxLength={maxLength}
      />
      {advancedPlaceholder}
      {errorLabel}
    </div>
  );
};
