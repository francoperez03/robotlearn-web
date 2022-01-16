import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import SliderButton from './slider';
import axios from 'axios';
import Card from '@mui/material/Card';
import { Box, Button, Typography } from '@mui/material';

export default function NewStep({stepNumber} : any) {
  return (
    <Card sx={{ margin: 3, border: '1px dashed grey'}}>
      <Box padding={1}>
        <Typography color="text.secondary" >
          Nuevo paso
        </Typography>
      </Box>
      <Stack direction="row" spacing={2} padding={2}>
          <SliderButton name = "Base"/>
          <SliderButton name = "Eje Y"/>
          <SliderButton name = "Eje Z"/>
          <SliderButton name = "Gripper"/>
      </Stack>
      <Box textAlign='right' padding={2}>
        <Button variant='contained'>
         Confirmar
        </Button>
      </Box>
    </Card>
  );
}