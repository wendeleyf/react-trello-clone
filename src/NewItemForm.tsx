import { useState } from 'react';
import { NewItemFormContainer, NewItemButton, NewItemInput } from './styles';

type NewItemFormProps ={
	onAdd(text: string) : void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
	const [text, setText] = useState("");

	return (
		<NewItemFormContainer>
			<NewItemInput
			value={text}
			onChange={event => setText(event.target.value)}
			/>
			<NewItemButton onClick={() => onAdd(text)}>
				Criar
			</NewItemButton>
		</NewItemFormContainer>
	)
}