import React from 'react';


class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            status : false,
        }
    }


    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === "true" ? true : false
        }
        this.setState({
            [name] : value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.onClear();
        this.onCloseForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false,
        })
    }

    onCloseForm = () => {
        this.props.onCloseForm();
    }
  render() { 


    return ( 
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Add action
                <span className="fa fa-times-circle text-right"
                        onClick={this.onCloseForm}></span>
                </h3>
            </div>
            <div className="panel-body">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name :</label>
                        <input type="text"
                                name="name" 
                                className="form-control" 
                                value={this.state.name}
                                onChange={this.onChange}/>
                    </div>
                    <label>status :</label>
                    <select className="form-control" 
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}>
                        <option value={true}>Kích hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                        <button type="button" 
                                className="btn btn-danger"
                                onClick={this.onClear}>Cancle</button>
                    </div>
                </form>
            </div>
        </div>

     );
  }
}
 
export default TaskForm;