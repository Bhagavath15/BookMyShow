import { useState } from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IconButton from '@mui/material/IconButton';


export function Seats() {

    return (
        <div className="seats">
            <section>
                <label>No.Of.Seats</label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </section>
            <p>3D-EXECUTIVE-RS.160/-</p>
            <Seat />
        </div>
    );
}

function Seat() {
    const [active, setActive] = useState(true)
    const handleClick = () => {
        setActive(!active)
    }
    const [seat, setSeat] = useState(Array(100).fill(<IconButton
        color={active ? "success" : "primary"}
        onClick={handleClick}
    ><CheckBoxOutlineBlankIcon /></IconButton>))
    return (
        <div className="seatlist">

            {seat.map((st, id) => <AvalSeats key={st.id} seatList={st} />)}
        </div>
    )
}
function AvalSeats({ seatList }) {

    return (


        <div>{seatList}</div>

    )
}