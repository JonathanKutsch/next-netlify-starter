// import Head from 'next/head'

// export default function Home() {
//   return (
//     <div className="container">
//       <Head>
//         <title>Transfer Portal</title>
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>

//       <main>
//         <h1>Transfer Portal</h1>

//         <style jsx>{`
//           table.excelTable {
//             width: 100%;
//             border-collapse: collapse;
//           }

//           table.excelTable th {
//             background-color: #3498db;
//             color: #ffffff;
//             font-weight: bold;
//             padding: 8px;
//             text-align: center;
//           }

//           table.excelTable td {
//             padding: 8px;
//             text-align: center;
//           }

//           table.excelTable tbody tr:nth-child(odd) {
//             background-color: #f2f2f2;
//           }
//         `}</style>

//         <table className="excelTable">
//           <thead>
//             <tr>
//             <th>Year</th>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Date</th>
//               <th>Updated</th>
//               <th>D</th>
//               <th>Institution</th>
//               <th>Sport</th>
//               <th>Sport Conference</th>
//               <th>Student Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>22-23</td>
//               <td>2008905525</td>
//               <td>John</td>
//               <td>Doe</td>
//               <td>7/19/2023</td>
//               <td>7/21/2023</td>
//               <td>I</td>
//               <td>Baylor University</td>
//               <td>Baseball</td>
//               <td>Big 12 Conference</td>
//               <td>Active</td>
//             </tr>
//             <tr>
//               <td>22-23</td>
//               <td>190247201</td>
//               <td>James</td>
//               <td>Smith</td>
//               <td>8/06/2023</td>
//               <td>8/18/2023</td>
//               <td>I</td>
//               <td>Boston College</td>
//               <td>Baseball</td>
//               <td>Atlantic Coast Conference</td>
//               <td>Active</td>
//             </tr>
//             <tr>
//               <td>22-23</td>
//               <td>2101334625</td>
//               <td>Alex</td>
//               <td>Longoria</td>
//               <td>9/23/2023</td>
//               <td>9/29/2023</td>
//               <td>I</td>
//               <td>Louisiana State University</td>
//               <td>Baseball</td>
//               <td>Southeastern Conference</td>
//               <td>Active</td>
//             </tr>
//           </tbody>
//         </table>
//       </main>
//     </div>
//   )
// }


// import Head from 'next/head'
// import { useState } from 'react';

// export default function Home() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [verificationCode, setVerificationCode] = useState('');
//   const [verificationStatus, setVerificationStatus] = useState('');

//   const handleLogin = () => {
//     if (username === 'jon' && password === 'test') {
//       setLoggedIn(true);
//       setVerificationStatus('');
//     } else {
//       setLoggedIn(false);
//     }
//   };

//   const handleVerify = () => {
//     if (verificationCode === 'pass') {
//       setVerificationStatus('Access Granted');
//     } else {
//       setVerificationStatus('Access Denied');
//     }
//   };

//   return (
//     <div className="container">
//       <Head>
//         <title>Transfer Portal</title>
//         {/* <link rel="icon" href="/favicon.ico" /> */}
//       </Head>

//       <main>
//         <h1>Transfer Portal</h1>

//         {loggedIn ? (
//           <div>
//             <p>Welcome, {username}!</p>
//             <p>Enter verification code:</p>
//             <input
//               type="text"
//               value={verificationCode}
//               onChange={(e) => setVerificationCode(e.target.value)}
//             />
//             <button onClick={handleVerify}>Verify</button>
//             <p>{verificationStatus}</p>
//           </div>
//         ) : (
//           <div>
//             <p>Login to access the portal:</p>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleLogin}>Login</button>
//           </div>
//         )}

//         <style jsx>{`
//           table.excelTable {
//             width: 100%;
//             border-collapse: collapse;
//           }

//           table.excelTable th {
//             background-color: #3498db;
//             color: #ffffff;
//             font-weight: bold;
//             padding: 8px;
//             text-align: center;
//           }

//           table.excelTable td {
//             padding: 8px;
//             text-align: center;
//           }

//           table.excelTable tbody tr:nth-child(odd) {
//             background-color: #f2f2f2;
//           }
//         `}</style>

//         <table className="excelTable">
//         <thead>
//             <tr>
//             <th>Year</th>
//               <th>ID</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Date</th>
//               <th>Updated</th>
//               <th>D</th>
//               <th>Institution</th>
//               <th>Sport</th>
//               <th>Sport Conference</th>
//               <th>Student Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>22-23</td>
//               <td>2008905525</td>
//               <td>John</td>
//               <td>Doe</td>
//               <td>7/19/2023</td>
//               <td>7/21/2023</td>
//               <td>I</td>
//               <td>Baylor University</td>
//               <td>Baseball</td>
//               <td>Big 12 Conference</td>
//               <td>Active</td>
//             </tr>
//             <tr>
//               <td>22-23</td>
//               <td>190247201</td>
//               <td>James</td>
//               <td>Smith</td>
//               <td>8/06/2023</td>
//               <td>8/18/2023</td>
//               <td>I</td>
//               <td>Boston College</td>
//               <td>Baseball</td>
//               <td>Atlantic Coast Conference</td>
//               <td>Active</td>
//             </tr>
//             <tr>
//               <td>22-23</td>
//               <td>2101334625</td>
//               <td>Alex</td>
//               <td>Longoria</td>
//               <td>9/23/2023</td>
//               <td>9/29/2023</td>
//               <td>I</td>
//               <td>Louisiana State University</td>
//               <td>Baseball</td>
//               <td>Southeastern Conference</td>
//               <td>Active</td>
//             </tr>
//           </tbody>
//         </table>
//       </main>
//     </div>
//   );
// }

import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleLogin = () => {
    if (username === 'jon' && password === 'test') {
      setLoggedIn(true);
      setVerificationStatus('');
    } else {
      setLoggedIn(false);
    }
  };

  const handleVerify = () => {
    if (verificationCode === 'pass') {
      setVerificationStatus('Access Granted');
    } else {
      setVerificationStatus('Access Denied');
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Transfer Portal</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1>Transfer Portal</h1>

        {!loggedIn ? (
          <div>
            <p>Login to access the portal:</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        ) : (
          <div>
            <p>Welcome, {username}!</p>
            <p>Enter verification code:</p>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button onClick={handleVerify}>Verify</button>
            <p>{verificationStatus}</p>
            
            {/* Render the portal content here */}
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
              <td>Baseball</td>
              <td>Big 12 Conference</td>
              <td>Active</td>
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
              <td>Baseball</td>
              <td>Atlantic Coast Conference</td>
              <td>Active</td>
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
              <td>Baseball</td>
              <td>Southeastern Conference</td>
              <td>Active</td>
            </tr>
          </tbody>
            </table>
          </div>
        )}

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
      </main>
    </div>
  );
}

