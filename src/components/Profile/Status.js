import React, {Component} from 'react'

class Status extends Component{
    state = {
        status: this.props.status,
        active: false
    }
    onChangeHandler = (event) => {
        this.setState({status:event.target.value})
    }
    activeToggle = () => {
        this.setState({
            active: !this.state.active
        })
    }
    putStatus = () => {
        this.activeToggle()
        if (this.state.active) {
            this.props.putStatus(this.state.status)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.active ?
                    <div onDoubleClick={this.activeToggle}>{this.props.status || 'default bio'}</div>
                    : <div>
                        <input type="text"
                               value={this.state.status}
                               autoFocus={true}
                               onBlur={this.putStatus}
                               onChange={this.onChangeHandler}
                        />
                    </div>}
            </div>
        )
    }
}
export default Status