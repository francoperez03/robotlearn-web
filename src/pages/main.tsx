import SliderButton from "../components/slider";
import Toolbar from '@mui/material/Toolbar';
import Step from "../components/step";
import { Typography } from "@mui/material";
import NewStep from "../components/newStep";
export default function MainPage(){

    return (
        <>
            <Typography variant="h6"  sx={{ padding: 1.5 }}>
                Creá una secuencia de movimiento
            </Typography>
            <Step stepNumber={1}/>
            <Step stepNumber={2}/>
            <NewStep stepNumber={4}/>
        </>
    )
}

