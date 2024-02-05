import { NativeBaseProvider, StatusBar } from "native-base";
import Rotas from "./src/Rotas";
import { TEMAS } from "./src/estilos/temas";

export default function App() {
  return (
    <NativeBaseProvider isSSR={false} theme={TEMAS}>
      <StatusBar backgroundColor={TEMAS.colors.blue[800]} />
      <Rotas />
    </NativeBaseProvider>
  );
}
