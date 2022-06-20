import { createContext, useContext, useReducer } from "react";

const AsterContext = createContext();
AsterContext.displayName = "AsterContext";

const reducer = (state, action) => {
    switch (action.type) {
        case "ADMIN_DASHBOARD_GET_LOADED":
            return { ...state, loadedDashboardGet: action.value };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

const AsterControllerProvider = ({ children }) => {
    const initialState = {
        loadedDashboardGet: false,
    };

    const [controller, dispatch] = useReducer(reducer, initialState);
    return <AsterContext.Provider value={[controller, dispatch]}>{children}</AsterContext.Provider>;
};

const useAsterController = () => {
    const context = useContext(AsterContext);

    if (!context) {
        throw new Error('[useAsterController should be used inside the AsterControllerProvider.]');
    }

    return context;
};

export { AsterControllerProvider, useAsterController };