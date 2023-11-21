export const Table = ({ tableData, type }) => {
    return (
        <table className="table" key={type}>

            <tr key={type}>
                <th>Measure</th>
                {tableData.mean.map((item, i) => {
                    return (
                        <>
                            <th key={item+i}>Class {i + 1}</th>
                        </>
                    )
                })
                }
            </tr>
            <tr key={type}>
                <td className="heading">{type} Mean</td>
                {tableData.mean.map((item, i) => {
                    return (
                        <>
                            <td key={item + i}>
                                {item}
                            </td>
                        </>
                    )
                })
                }
            </tr>
            <tr key={type}>
                <td className="heading">{type} Median</td>
                {tableData.median.map((item, i) => {
                    return (
                        <>
                            <td key={item + i}>
                                {item}
                            </td>
                        </>
                    )
                })
                }
            </tr>
            <tr key={type}>
                <td className="heading">{type} Mode</td>
                {tableData.mode.map((item, i) => {
                    return (
                        <>
                            <td key={item + i}>
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