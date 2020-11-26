import { set } from "js-cookie";
import React, { useState } from "react";
import { fetch } from "../../store/csrf";

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
const currentDate = mm + "-" + dd + "-" + yyyy;

export default function DateReservation(props) {
    console.log(props);
    // const { handleSubmit } = props;
    const [partySize, setPartySize] = useState(2);
    const [date, setDate] = useState(currentDate);

    const handlePartySizeChange = (e) => {
        setPartySize(Number(e.target.value));
    };

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    // searching for available reservations
    //     'GET /api/resaurants'
    // make a reservation for a restaurant
    //     'POST /api/reservations'

    const handleFetch = () => {
        const reservationInfo = { partySize, date };
        // handleSubmit(reservationInfo);
    };

    return (
        <div>
            <label>date reservation</label>
            <select value={partySize} onChange={handlePartySizeChange}>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
            </select>
            <input
                onChange={handleDateChange}
                value={date}
                type="date"
                min={currentDate}
                max="2021-11-27"
            />
            <button onClick={handleFetch}>Submit</button>
        </div>
    ); // yyyy -mm-dd
}
