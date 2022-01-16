import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderButton({handleChange, name}: any) {
    return (
        <Box width={100}>
            <p>{name}</p>
            <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                onChangeCommitted={handleChange}
                max={170}
                min={20}
                />
        </Box>
    );
}