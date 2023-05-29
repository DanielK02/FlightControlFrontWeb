import React, { useState, useEffect } from "react";
import "./TerminalsTable.css";

const Brand = {
    0 : "ElAl",
    1 : "Lufthansa",
    2 : "EasyJet",
    3 : "RyanAir",
    4 : "JapanAirlines",
    5 : "Emirates",
    6 : "EtihadAirways"
}

export const TerminalsTable = () => {
    const [terminals, setTerminals] = useState([]);



    useEffect(() => {
        const interval = setInterval(() => {
            fetch('http://localhost:5127/api/Terminals').then((resp) => {
                resp.json().then((data) => {
                    // console.log(data)
                    if (data) {
                        setTerminals(data)
                    }
                })
            })
        }, 5000);
        return () => clearInterval(interval);
    }, [setTerminals])



    const renderList = () => {
        return terminals.map((terminal) => (<tr key={terminal.id}>
                    <td>Terminal {terminal.number}</td>
                    <td>{terminal.flight == null ? "Free" : terminal.flight.flightName}</td>
                    <td>{terminal.flight == null ? "" : terminal.flight.isDeparted ? "True" : "False"}</td>
                    <td>{terminal.flight == null ? "" : Brand[terminal.flight.brand]}</td>
                    </tr>
                ))         
    }


    return (

        <div>
            <h1>Terminals</h1>
            <table>
                <tr>
                    <th>Terminal Number</th>
                    <th>Flight Name</th>
                    <th>Departure flag</th>
                    <th>Brand</th>
                </tr>
                {renderList()}
            </table>
        </div >

    )

}

