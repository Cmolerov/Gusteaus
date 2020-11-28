import { set } from "js-cookie";
import React, { useState } from "react";
import { fetch } from "../../store/csrf";

//style
import "./DateReservation.css"

const today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
const currentDate = mm + "-" + dd + "-" + yyyy;

export default function DateReservation(props) {
    const { handleSubmit } = props;
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
        handleSubmit(reservationInfo);
    };

    return (
        <div className="reservation_info">
            <label>date reservation</label>
            <input
                className="date_bar"
                onChange={handleDateChange}
                value={date}
                type="date"
                min={currentDate}
                max="2021-11-27"
            />
            <label className="partySize_container"> Party Size
                <select
                    className="partySize"
                    value={partySize}
                    onChange={handlePartySizeChange}
                >
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                </select>
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    ); // yyyy -mm-dd
}
