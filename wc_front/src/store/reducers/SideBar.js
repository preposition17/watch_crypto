import Actions from "../actions";


function getDefaultState() {
    const open = JSON.parse(sessionStorage.getItem('sidebar_open'));
    if (open !== null) {
        return {
            open: open
        };
    }
    else {
        return {
            open: true
        };
    }
}


function setDefaultState(open) {
    sessionStorage.setItem("sidebar_open", JSON.stringify(open));
}


export function setSideBarOpen(open = true) {
    setDefaultState(open);
    return {
        type: Actions.SET_SIDEBAR_OPEN,
        open: open
    };
}


export default function SideBar(state = getDefaultState(), action) {
    switch (action.type) {
        case Actions.SET_SIDEBAR_OPEN:
            return {...state, open: action.open};
        default:
            return state;
    }
}
