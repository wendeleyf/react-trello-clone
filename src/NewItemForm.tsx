import { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';
import { useFocus } from './utils/useFocus';

type NewItemFormProps ={
	onAdd(text: string) : void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
	const [text, setText] = useState("");
	const inputRef = useFocus();

	return (
		<NewItemFormContainer>
			<NewItemInput
			ref={inputRef}
			value={text}
			onChange={event => setText(event.target.value)}
			/>
			<NewItemButton onClick={() => onAdd(text)}>
				Criar
			</NewItemButton>
		</NewItemFormContainer>
	)
}