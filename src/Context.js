import React from 'react'
const StoreContext = React.createContext(null)
export const Provider = (props) => (
    <StoreContext.Provider value={props.value}>
        {props.children}
    </StoreContext.Provider>
)

export default StoreContext