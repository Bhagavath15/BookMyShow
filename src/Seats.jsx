import { useState } from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


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
    const button = Array(100).fill(<CheckBoxOutlineBlankIcon />)
    return (
        <div className="seatlist">
            {button.map((btn, i) => <AvalSeat key={i} button={btn} />)}
        </div>
    )
}

function AvalSeat({ button }) {
    const [active, setActive] = useState(true)
    const [count, setCount] = useState(0)
    const handleClick = () => {
        setCount(count + 1)
        setActive(!active)
        console.log("clicked")
    }
    return (
        <div className="seats">
            <Button color={active ? "success" : "inherit"} onClick={handleClick}>{button}{count}</Button>
        </div>
    )
}