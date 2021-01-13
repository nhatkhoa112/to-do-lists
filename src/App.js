import React from 'react';
import './App.css';
import TaskForm  from './Components/TaskForm';
import Control  from './Components/Control'
import TaskList  from './Components/TaskList'


class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            tasks: [],
            isDisplayForm : false, 
        }
    }

    componentDidMount() {
        if(localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'))
            this.setState({
                tasks : tasks
            })
        }
    }

    onGenerateData = () => {
        var tasks = [
            {
                id : this.generateID() ,
                name: ' Hoc lap trinh',
                status: true,
            },
            {
                id : this.generateID() ,
                name : "di boi", 
                stt : false,
            },
            {
                id : this.generateID() ,
                name : "ngu", 
                stt : true,
            }
        ];
       
       localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    

    s4(){
        return Math.floor((1*Math.random()) * 0x10000).toString(16).substring(1);        
    }

    generateID(){
        return this.s4()+this.s4()+ '-'+this.s4() + '-' +this.s4()+'/'+this.s4()+'--'+this.s4()
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })

    }
    onSubmit = (data) => {
        var { tasks } = this.state
        data.id = this.generateID();
        tasks.push(data);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    onCloseForm = () => {
        this.setState({
            isDisplayForm : false,
        })
    }

    render() { 
    var { tasks , isDisplayForm} = this.state;
    var elmTaskForm = isDisplayForm === true ? <TaskForm onSubmit={this.onSubmit} onCloseForm={this.onCloseForm}/> : '';
    return ( 
      <div className="container">
      <div className="text-center">
          <h1>Action manager</h1>
          <hr/>
      </div>
      <div className="row">
          <div className={isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4": ""}>
              {elmTaskForm}
          </div>
          <div className={isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" 
                        className="btn btn-primary"
                        onClick={this.onToggleForm}>
                  <span className="fa fa-plus mr-5"></span>Add action
              </button>
              <button type="button" 
                        className="btn btn-danger ml-5"
                        onClick={this.onGenerateData()}
                        >
                  Generate data
              </button>
              
              <div className="row mt-15">
                <Control />
              </div>
              <div className="row mt-15">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <TaskList tasks={ tasks } />

                  </div>
              </div>
          </div>
      </div>
  </div>

     );
  }
}
 
export default App;