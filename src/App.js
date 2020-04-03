import React, {useState} from 'react';
import Search from './components/Search'
import Result from './components/Result'

function App(props) {

  const [query, setQuery] = useState("")
  const [tableData, setTableData] = useState([])


  const onSubmit = () => {

    const url = `http://localhost:3000/sql?query=${query}`
    setTableData([])
    fetch(url).then(res => res.json()).then(data => setTableData(data))

  }

  const onChange = () => {

  }



  return (
    <div className="App">
       <Search onSubmit={onSubmit} onChange={onChange} />
       <Result tableData={tableData} />
    </div>
  );
}

export default App;
