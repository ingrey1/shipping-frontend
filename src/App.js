import React, {useState} from 'react';
import Search from './components/Search'
import Result from './components/Result'

function App(props) {

  const [query, setQuery] = useState("")
  const [tableData, setTableData] = useState([])


  const onSubmit = () => {

  }

  const onChange = () => {

  }



  return (
    <div className="App">
       <Search />
       <Result />
    </div>
  );
}

export default App;
