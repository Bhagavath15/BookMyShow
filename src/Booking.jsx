import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export function Booking() {
    return (
        <div>
            <TheatreName />
        </div>

    );
}
function TheatreName() {
    const name = [{ "name": "L.A Cinemas Maris Complex RGB Laser:Trichy" }, { "name": "L.A Cinemas Sona Mina RGB Laser:Trichy" }]
    return (
        <div className="theatre">
            {name.map((th, id) => <Theatre theatreName={th} key={th.id} />)}
        </div>
    )
}

function Theatre({ theatreName }) {
    const navigate = useNavigate()
    return (
        <div>
            <Card sx={{ minWidth: 300 }}>
                <CardContent>
                    <Typography sx={{ minWidth: 275 }} color="text.secondary">
                        {theatreName.name}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={() => navigate("/seats")} variant="outlined" color="success"><Typography sx={{ fontSize: 14 }}>10:30AM
                        <Typography sx={{ fontSize: 10 }}>Dolby Atoms</Typography></Typography></Button>
                    <Button onClick={() => navigate("/seats")} variant="outlined" color="success"><Typography sx={{ fontSize: 14 }}>2:30PM
                        <Typography sx={{ fontSize: 10 }}>Dolby Atoms</Typography></Typography></Button>
                    <Button onClick={() => navigate("/seats")} variant="outlined" color="success"><Typography sx={{ fontSize: 14 }}>06:15PM
                        <Typography sx={{ fontSize: 10 }}>Dolby Atoms</Typography></Typography></Button>
                    <Button onClick={() => navigate("/seats")} variant="outlined" color="success"><Typography sx={{ fontSize: 14 }}>10:30PM
                        <Typography sx={{ fontSize: 10 }}>Dolby Atoms</Typography></Typography></Button>
                </CardActions>
            </Card>
        </div>

    )
}