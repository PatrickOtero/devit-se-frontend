import { Label } from './label';
import { ContainerInput , Field } from './style'
import React, { useState } from 'react'

interface InputFormProps {
    id: string;
    name: string;
    type?: string;
    placeholder?: string;
    label: string
    width: string
    height?: string
    as?: string
    options?: Array<string>
}

export default function InputForm({
    id,
    name,
    type,
    placeholder,
    label,
    width,
    height,
    as,
    options,
} : InputFormProps) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event: any) => {
        setSelectedValue(event.target.value);
        console.log(event.target.value);
    };

    return (
        <ContainerInput>
            <Label 
                htmlFor={id} 
                name={label} 
            />
            {as === 'select' ? 
                <Field 
                    id={id}
                    name={name}
                    width={width}
                    height={height}
                    as={as}
                    onChange={handleSelectChange}
                    value={selectedValue}
                >
                        {options?.map((op, index) => (
                            <option key={index} value={index > 0 ? op : ""}>
                                {op}
                            </option>
                        ))}
                </Field>
            : 
                <Field
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    width={width}
                    height={height}
                />
            }
        </ContainerInput>
    );
}