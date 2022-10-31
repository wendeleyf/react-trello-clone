
import { AppContainer } from "./styles";
import { Card } from "./Card";
import { Column } from "./Column";
import { AddNewItem } from "./AddNewItem";

export const App = () => {
  return(
    <AppContainer>
      <Column text="To Do">
        <Card text="Gerar scaffold do projeto" />
      </Column>
      <Column text="Doing">
        <Card text="Aprender Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Começar a usar a tipagem estática" />
      </Column>
      <AddNewItem toggleButtonText="+ Adicionar outra lista" onAdd={console.log} dark />
    </AppContainer>
  )
}
