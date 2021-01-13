import React from 'react';
import './App.css';
import TaskForm  from './Components/TaskForm';
import Control  from './Components/Control'
import TaskList  from './Components/TaskList'


class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            tasks: [
                
            ] 
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

    render() { 
    var { tasks } = this.state;
    return ( 
      <div className="container">
      <div className="text-center">
          <h1>Action manager</h1>
          <hr/>
      </div>
      <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <button type="button" className="btn btn-primary">
                  <span className="fa fa-plus mr-5"></span>Add action
              </button>
              <button type="button" 
                        className="btn btn-danger ml-5"
                        onClick={this.onGenerateData(   )}>
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