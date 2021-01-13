import React from 'react';
import Search from './Search'
import Sort from './Sort'


class App extends React.Component {
  state = {  }
  render() { 
    return ( 
<div>
    <Search onSearch={this.props.onSearch}/>
    <Sort />
</div>


     );
  }
}
 
export default App;