import React from 'react';
import {statusAPI} from "../../../api/api";
import {connect} from "react-redux";
import {AppRootStateType, AppThunkDispatchType} from "../../../redux/redux-store";
import {getStatusTC} from "../../../redux/profile-reducer";



type PropsType = {
    id:number | null

}

 class ProfileStatus extends React.Component<PropsType & mapDispatchToPropsType & mapStateToPropsType > {
    componentDidMount() {
        if(this.props.id)  this.props.setStatus(this.props.id)


    }

    state = {
        editMode: false,
        value: '1'
    }
    activateMode() {
        this.setState({ editMode: true})
    }
    onBlur = () => {
        this.setState({ editMode: false})
    }

    render() {
        console.log(this.props.status)
        return (

            <div>
                {this.state.editMode
                    ? <input
                        onBlur={this.onBlur.bind(this)}
                        value={this.state.value}
                        autoFocus
                        onChange={(event) => this.setState({value: event.currentTarget.value})}
                    />
                    :
                    <span onDoubleClick={this.activateMode.bind(this)}>{this.props.status}</span>}
            </div>
        )
    }


};

const mapStateToProps = (state:AppRootStateType)=>{
    return{
        status:state.profilePage.status
    }
}


const mapDispatchToProps = (dispatch:AppThunkDispatchType)=>{
    return{
        setStatus:(id:number) =>{
            dispatch(getStatusTC(id))
        }
    }
}

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>
type mapStateToPropsType = ReturnType<typeof mapStateToProps>


export default connect(mapStateToProps,mapDispatchToProps)(ProfileStatus)
