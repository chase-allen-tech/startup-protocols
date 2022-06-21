
export const actionAdminDashboardGet = (dispatch) => {
    dispatch({ type: "ADMIN_DASHBOARD_GET_LOADED", value: false });
    setTimeout(() => {
        dispatch({ type: "ADMIN_DASHBOARD_GET_LOADED", value: true });
    }, 5000);
};