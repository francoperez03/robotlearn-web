import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import SliderButton from './slider';
import axios from 'axios';
import Card from '@mui/material/Card';
import { Box, Typography } from '@mui/material';

export default function Step({stepNumber} : any) {
    const handleChange = (event: Event, newValue: number | number[]) => {
        axios.post('http://192.168.1.16:4000/robot', {
            axisPosition: newValue as number
        });
    };
  return (
    <Card sx={{ margin: 3 }}>
      <Box padding={1}>
        <Typography color="text.secondary" >
          Paso {stepNumber}
        </Typography>
      </Box>
      <Stack direction="row" spacing={2} padding={2}>
          <SliderButton name = "Base"/>
          <SliderButton name = "Eje Y"/>
          <SliderButton name = "Eje Z"/>
          <SliderButton name = "Gripper"/>
      </Stack>
    </Card>
  );
}