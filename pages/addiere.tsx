import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';
import geolib from 'geolib';

const LV95ToWGS84 = (x, y) => {
    const wgs84Coords = geolib.lv95ToWgs84({ easting: x, northing: y });
    return wgs84Coords;
};

const Addiere = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [resultat, setResultat] = useState('');

    const addition = () => {
        const wgs84Coords = LV95ToWGS84(a, b);
        setResultat(`WGS84 Koordinaten: ${wgs84Coords.latitude}, ${wgs84Coords.longitude}`);
    };

    return (
        <>
            <Paper elevation={5} style={{ padding: '15px', margin: '15px', maxWidth: '400px' }}>
                <Typography variant="h5">Transformation</Typography>
                <TextField
                    label="X (LV95)"
                    value={a}
                    onChange={(e) => setA(parseInt(e.target.value, 10) || 0)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Y (LV95)"
                    value={b}
                    onChange={(e) => setB(parseInt(e.target.value, 10) || 0)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={addition}>
                    Преобразовать в WGS84
                </Button>

                {resultat !== '' && (
                    <Typography variant="h6">
                        {resultat}
                    </Typography>
                )}
            </Paper>
        </>
    );
};

export default Addiere;