import { FC, useState, ChangeEvent } from 'react';

import {useAppDispatch} from "../../../store/store";
import {editCard} from "../../../store/cards/cardSlice";

import {Input} from "../Input/Input";

import {TextContainer} from "./styled";



interface TextProps {
    id: string
    initialText: string
    children: string | number
}

export const EditableText: FC<TextProps> = ({ id, initialText }) => {
    const dispatch = useAppDispatch()

    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(initialText);

    const handleDoubleClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }
    const handleBlur = () => {
        setIsEditing(false);
        dispatch(editCard({id, changes: {text}}))
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
           handleBlur()
        }
    }

    return (
        <div onDoubleClick={handleDoubleClick}>
            {isEditing ? (
                <Input
                    type="text"
                    value={text}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <TextContainer>{text}</TextContainer>
            )}
        </div>
    );
};
