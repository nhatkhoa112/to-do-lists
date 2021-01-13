import React from 'react';
import TaskItem from './TaskItem';


class TaskList extends React.Component {

    render() { 
    var {tasks} = this.props;
    var elmTasks = tasks.map((task,index) =>{
        return <TaskItem key={task.id} index={index} task={task} />
    });

    return ( 
        <table className="table table-bordered table-hover mt-15">
        <thead>
            <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Name</th>
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td>
                    <input type="text" className="form-control" />
                </td>
                <td>
                    <select className="form-control">
                        <option value="-1">All</option>
                        <option value="0">Hide</option>
                        <option value="1">Active</option>
                    </select>
                </td>
                <td></td>
            </tr>
          {elmTasks}
           
        </tbody>
    </table>
     );
  }
}
 
export default TaskList;