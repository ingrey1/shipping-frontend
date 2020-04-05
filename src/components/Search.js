import React from 'react'


const containerStyles = {
    width: 800,
    height: 400
}

const areaStyle = {
    width: 800,
    height: 400
}

function Search({query, onChange, onSubmit}) {

    return <div style={containerStyles}>
        <textarea style={areaStyle} value={query} onChange={onChange} />
        <button onClick={onSubmit}>Submit Query</button>
    </div>

}

export default Search