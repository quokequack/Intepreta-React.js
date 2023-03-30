import PersonList from "./componentes/PersonList";

import PersonAdd from "./componentes/PersonAdd";
import PersonRemove from "./componentes/PersonRemove";

export default function Tela() {
  return (
    <div ClassName="Tela">
      <PersonAdd />
      <PersonList />
      <PersonRemove />
    </div>
  );
}
