import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Table Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
              <th>Header 3</th>
              <th>Header 4</th>
              <th>Header 5</th>
              <th>Header 6</th>
              <th>Header 7</th>
              <th>Header 8</th>
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