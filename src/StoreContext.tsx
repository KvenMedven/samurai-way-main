import React from "react";
import {store} from "./redux/redux-store";
import {AppRootStateType} from "./redux/redux-store";
import {StoreType} from "./redux/redux-store";

export const StoreContext = React.createContext({} as StoreType)


export type ProviderType = {
    store:StoreType
    children:React.ReactNode

}

const Provider = (props:ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}