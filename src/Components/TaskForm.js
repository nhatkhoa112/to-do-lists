import React from 'react';


class TaskForm extends React.Component {
  state = {  }
  render() { 
    return ( 
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">Add action</h3>
            </div>
            <div className="panel-body">
                <form>
                    <div className="form-group">
                        <label>Name :</label>
                        <input type="text" className="form-control" />
                    </div>
                    <label>status :</label>
                    <select className="form-control" required="required">
                        <option value="1">Active</option>
                        <option value="0">Hide</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">Add</button>&nbsp;
                        <button type="submit" className="btn btn-danger">Cancle</button>
                    </div>
                </form>
            </div>
        </div>

     );
  }
}
 
export default TaskForm;