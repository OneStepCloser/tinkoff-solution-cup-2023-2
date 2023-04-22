import React, {FC, useCallback, useState} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {ColorPicker, ColorPickerChangeEvent} from 'primereact/colorpicker';


import './category-form.css';

export interface CategoryFormProps {
    onAdd: (name: string, color: string) => void;
}

export const CategoryForm: FC<CategoryFormProps> = (props) => {
    const {
        onAdd,
    } = props;

    const [name, setName] = useState('');
    const [color, setColor] = useState<string>('#5dd5c7');

    const handlePickColor = useCallback((e: ColorPickerChangeEvent) => {
        // @ts-ignore
        setColor(e.value);
    }, [setColor]);


    return (
        <div className="category-form">
            <h3>Добавить новую категорию</h3>
            <div className="category-form__-fields">
                <InputText
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Название"
                    className="expense__form-name"
                />
                <ColorPicker value={color} onChange={handlePickColor} format="hex" />
                <Button
                    label="Добавить"
                    onClick={() => onAdd(name,  color)}
                />
            </div>
        </div>
    );
};