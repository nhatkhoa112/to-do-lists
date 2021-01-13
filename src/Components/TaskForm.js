import React from 'react';


class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name : '',
            status : false,
        }
    }

    componentWillMount(){
        if(this.props.task) {
            this.setState({
                id : this.props.task.id,
                name : this.props.task.name,
                status : this.props.task.status,

            })
        }
        
    }

    // chua sua duoc//


   componentWillReceiveProps(nextProps){
      
       if( nextProps !== null &&   nextProps.task !== null ){
           this.setState({
               id : nextProps.task.id,
               name : nextProps.task.name,
               status : nextProps.task.status,
           })
       }else if(!nextProps.task){
           this.setState({
            id : '',
            name : '',
            status : false,
           })
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

    var {id} = this.state;

    return ( 
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    {id !== '' ? "Update action" : "Add action"}  
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