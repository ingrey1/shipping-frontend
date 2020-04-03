import React from 'react'


const containerStyles = {
    width: 400,
    height: 400
}

function Search({query, onChange, onSubmit}) {

    return <div style={containerStyles}>
        <textarea value={query} onChange={onChange} />
        <button onClick={onSubmit}>Submit Query</button>
    </div>

}

export default Search