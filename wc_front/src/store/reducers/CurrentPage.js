import Actions from "../actions";

import pages from "components/Pages";


function getDefaultState() {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].endpoint === window.location.pathname) {
            return {
                page: pages[i]
            }
        }
    }
}


export function setCurrentPage(page) {
    return {
        type: Actions.SET_CURRENT_PAGE,
        page: page
    };
}


export default function CurrentPage(state = getDefaultState(), action) {
    switch (action.type) {
        case Actions.SET_CURRENT_PAGE:
            return {...state, page: action.page};
        default:
            return state;
    }
}
