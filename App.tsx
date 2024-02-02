import { NativeBaseProvider, StatusBar } from "native-base";
import { TEMAS } from "./src/estilos/temas";
import Rotas from "./src/Rotas";

export default function App() {
  return (
    <NativeBaseProvider isSSR={false} theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}
