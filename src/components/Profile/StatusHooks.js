import React, {useState} from 'react'

const StatusHooks = (props) => {

    const [status, setStatus] = useState(props.status)
    const [active, toggleActive] = useState(false)

    const onChangeHandler = (event) => {
        setStatus(event.target.value)
    }
    const activeToggle = () => {
        toggleActive(!active)
    }
    const putStatus = () => {
        activeToggle()
        props.putStatus(status)
    }
    return (
        <div>
            {!active ?
                <div onDoubleClick={activeToggle}>{status || 'default bio'}</div>
                : <div>
                    <input type="text"
                           value={status}
                           autoFocus={true}
                           onBlur={putStatus}
                           onChange={onChangeHandler}
                    />
                </div>}
        </div>
    )

}
export default StatusHooks