import { combineReducers } from 'redux'

import SideBar from "./SideBar";
import CurrentPage from "./CurrentPage"

const reducer = combineReducers({
    sidebar_reducer: SideBar,
    current_page_reducer: CurrentPage,
})

export default reducer;
