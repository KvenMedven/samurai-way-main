import React, {useState} from 'react';

export class ProfileStatus extends React.Component<any> {
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
                    <span onDoubleClick={this.activateMode.bind(this)}>{this.state.value}</span>}
            </div>
        )
    }


};
