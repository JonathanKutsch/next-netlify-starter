import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Transfer Portal</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        {/* <h1>My Excel-Like Table</h1> */}

        <style jsx>{`
          table.excelTable {
            width: 100%;
            border-collapse: collapse;
          }

          table.excelTable th {
            background-color: #3498db;
            color: #ffffff;
            font-weight: bold;
            padding: 8px;
            text-align: center;
          }

          table.excelTable td {
            padding: 8px;
            text-align: center;
          }

          table.excelTable tbody tr:nth-child(odd) {
            background-color: #f2f2f2;
          }
        `}</style>

        <table className="excelTable">
          <thead>
            <tr>
            <th>Year</th>
              <th>NCAA ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Initiated Date</th>
              <th>Last Updated</th>
              <th>D</th>
              <th>Institution</th>
              <th>Sport</th>
              <th>Sport Conference</th>
              <th>Student Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1 Data 1</td>
              <td>Row 1 Data 2</td>
              <td>Row 1 Data 3</td>
              <td>Row 1 Data 4</td>
              <td>Row 1 Data 5</td>
              <td>Row 1 Data 6</td>
              <td>Row 1 Data 7</td>
              <td>Row 1 Data 8</td>
            </tr>
            <tr>
              <td>Row 2 Data 1</td>
              <td>Row 2 Data 2</td>
              <td>Row 2 Data 3</td>
              <td>Row 2 Data 4</td>
              <td>Row 2 Data 5</td>
              <td>Row 2 Data 6</td>
              <td>Row 2 Data 7</td>
              <td>Row 2 Data 8</td>
            </tr>
            <tr>
              <td>Row 3 Data 1</td>
              <td>Row 3 Data 2</td>
              <td>Row 3 Data 3</td>
              <td>Row 3 Data 4</td>
              <td>Row 3 Data 5</td>
              <td>Row 3 Data 6</td>
              <td>Row 3 Data 7</td>
              <td>Row 3 Data 8</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
