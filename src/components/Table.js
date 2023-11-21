export const Table = ({tableData}) =>{

    return(
        <table className="table">

          <tr>
            <th>Measure</th>
            {tableData.mean.map((item, i)=>{
              return(
                <>
               <th>Class {i+1}</th>
                </>
              )
            })
            }
          </tr>
          <tr>
            <td>Flavanoids Mean</td>
            {tableData.mean.map((item, i)=>{
              return(
                <>
                <td >
                  {item}
                </td>
                </>
              )
            })
            }
          </tr>
          <tr>
              <td>Flavanoids Median</td>
              {tableData.median.map((item, i)=>{
              return(
                <>
                <td >
                  {item}
                </td>
                </>
              )
            })
            }
          </tr>
          <tr>
              <td>Flavanoids Mode</td>
              {tableData.mode.map((item, i)=>{
              return(
                <>
                <td>
                  {item}
                </td>
                </>
              )
            })
            }
          </tr>
        

          </table>
    )
} 