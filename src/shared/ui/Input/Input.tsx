import React, { InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>
interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string | number;
    onChange?: (v: string) => void,
    autofocus?: boolean,
    readOnly ?: boolean,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder = '',
        autofocus,
        readOnly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [cls.readOnly]: readOnly,
    };

    return (
        <div className={classNames(cls.Input, mods, [className])}>
            <input
                type={type}
                value={value}
                onChange={onChangeHandler}
                placeholder={placeholder}
                readOnly={readOnly}
            />
        </div>
    );
});
