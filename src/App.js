import React, {useState} from 'react';
import Search from './components/Search'
import Result from './components/Result'

function App(props) {

  const [query, setQuery] = useState("")
  const [tableData, setTableData] = useState([])


  const onSubmit = () => {

    const url = `http://localhost:3000/sql?query=${query}`
    setTableData([])
    fetch(url).then(res => res.json()).then(data => {
      console.log(data)  
      setTableData(data)
    
    })

  }

  const onChange = (e) => {

    const newValue = e.target.value
    setQuery(newValue)

  }



  return (
    <div className="App">
       <Search query={query} onSubmit={onSubmit} onChange={onChange} />
       <Result data={tableData} />
    </div>
  );
}

export default App;
