import React, { FormEvent, InputHTMLAttributes, useCallback } from 'react';
import { birthDate, cep, currency, cpf } from './masks';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask?: "cep" | "currency" | "birthDate" | "cpf",
    prefix?: string;
    label?: string;
}

const Input: React.FC<InputProps> = ({ mask, prefix, label, ...props }) => {

    const handleKeyUp = useCallback((event: FormEvent<HTMLInputElement>) => {
        switch (mask) {
            case "cep":
                cep(event);
                break;
            case "currency":
                currency(event);
                break
            case "birthDate":
                birthDate(event);
                break;
            case "cpf":
                cpf(event);
                break;
        }


    }, [mask]);

    return (
        <div className="inputGroup prefix">
            <label className="label"> {label && label} </label>
            {prefix && <span className="prefixSpan">{prefix}</span>}
            <input className="input" {...props} onKeyUp={handleKeyUp} />
        </div>
    );
}

export default Input;