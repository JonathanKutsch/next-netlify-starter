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
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date</th>
              <th>Updated</th>
              <th>D</th>
              <th>Institution</th>
              <th>Sport</th>
              <th>Sport Conference</th>
              <th>Student Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>22-23</td>
              <td>2008905525</td>
              <td>John</td>
              <td>Doe</td>
              <td>7/19/2023</td>
              <td>7/21/2023</td>
              <td>I</td>
              <td>Baylor University</td>
            </tr>
            <tr>
              <td>22-23</td>
              <td>190247201</td>
              <td>James</td>
              <td>Smith</td>
              <td>8/06/2023</td>
              <td>8/18/2023</td>
              <td>I</td>
              <td>Boston College</td>
            </tr>
            <tr>
              <td>22-23</td>
              <td>2101334625</td>
              <td>Alex</td>
              <td>Longoria</td>
              <td>9/23/2023</td>
              <td>9/29/2023</td>
              <td>I</td>
              <td>Louisiana State University</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  )
}
