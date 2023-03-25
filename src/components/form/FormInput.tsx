import { useCallback, useState } from "react";

export const FormInput = (inputData: any) => {
    const { title, callback, placeholder, type, required } = inputData;
    const [value, setValue] = useState();

    const onChange = useCallback((event) => {
        setValue(event.target.value);
        callback(event.target.value);
    }, [callback]);
    return (
        <input
            className = "form__input"
            placeholder={placeholder}
            value = { value }
            onChange={ onChange }
            type = { type }
        ></input>
    )
}