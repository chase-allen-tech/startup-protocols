import { useEffect } from "react";
import { useAsterController } from "./context";
import { actionAdminDashboardGet } from "./context/action";

const App = () => {

  const [controller, dispatch] = useAsterController();
  const { loadedDashboardGet } = controller;

  useEffect(() => {
    actionAdminDashboardGet(dispatch);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{loadedDashboardGet ? "TRUE" : "False"}</h1>
      </header>
    </div>
  );
};

export default App;
