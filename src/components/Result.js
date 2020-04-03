import React from 'react'

const styles = {
    marginLeft: '25px'
}

function Result({data}) {

    return <div style={styles}> 

      {(data && data.length > 0) && <table>
         <tr>
        
           {Object.keys(data[0]).map(colName => {
               return <th key={Math.random()}>{colName}</th> 
           })}
    

        </tr>

        {data.map(row => {
            return <tr>
               {Object.values(row).map(col => {
                  return <td>{col}</td>
               })} 
            </tr>
        })}

    </table>}


    </div>

}

export default Result