import React, { useState, useEffect } from "react";

export const LogsList = () => {
    const [logs, setLogs] = useState([]);

    
    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:5127/api/Log').then((resp) => {
                resp.json().then((data) => {
                    // console.log(data)
                    if (data) {
                        setLogs(data)
                    }
                })
            })
        }, 5000);
        return () => clearInterval(interval);
    }, [setLogs])

    const renderList = () => {
        return logs.slice(0).reverse().map((log) => (<tr key={log.id}>
            
                    <td>{log.flight.flightName}</td>
                    <td>Terminal {log.terminal.number}</td>
                    <td>{log.inbound == null ? "" : log.inbound}</td>
                    <td>{log.outbound == null ? "" : log.outbound}</td>
                    <td>{log.flight.isDeparted === true && log.terminal.number === 4 ? "Yes" : ""}</td>
                    </tr>
                ))         
    }
    return (

        <div>
            <h1>Logs</h1>
            <h5>First is recent log</h5>
            <table>
                <tr>                    
                    <th>Flight</th>
                    <th>Terminal</th>
                    <th>Inbound Time</th>
                    <th>Outbound Time</th>
                    <th>Departure</th>
                </tr>
                {renderList()}
            </table>
        </div >

    )

}