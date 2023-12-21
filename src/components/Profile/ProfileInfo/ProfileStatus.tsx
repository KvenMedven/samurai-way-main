import React, {ChangeEvent, createRef, useRef} from 'react';
import {connect} from "react-redux";
import {AppRootStateType, AppThunkDispatchType} from "../../../redux/redux-store";
import {getStatusTC} from "../../../redux/profile-reducer";


type PropsType = {
    status: string
    updateStatus: (status: string) => void

}

class ProfileStatus extends React.Component<PropsType> {
    componentDidMount() {
        // if(this.props.id)  this.props.setStatus(this.props.id)


    }

    state = {
        editMode: false,
        status: this.props.status
    }
    activateMode = () => {
        this.setState({editMode: true})
    }
    onBlur = () => {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status.trim())
    }
    onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({status:e.currentTarget.value})
    }

    render() {
        return (

            <div>
                {this.state.editMode
                    ? <input

                        onBlur={this.onBlur}
                        value={this.state.status}
                        autoFocus
                        onChange={this.onStatusChange}
                    />
                    :
                    <span onDoubleClick={this.activateMode}>{this.props.status || '----'}</span>}
            </div>
        )
    }


};


export default ProfileStatus
