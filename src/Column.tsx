import { FC, ReactNode }  from 'react';
import { ColumnContainer, ColumnTitle } from './styles';
import { AddNewItem } from './AddNewItem';
type ColumnProps = {
	text: string;
	children?: ReactNode;
}

export const Column: FC<ColumnProps> = ({text, children}) =>{
	return (
		<ColumnContainer>
			<ColumnTitle>{text}</ColumnTitle>
			{children}
			<AddNewItem toggleButtonText="+ Adicionar uma nova tarefa"
			onAdd={console.log}
			dark
			/>
		</ColumnContainer>
	)
}