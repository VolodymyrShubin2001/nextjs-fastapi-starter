import React, { useState } from 'react';
import { Button, TextField, Typography, Paper } from '@mui/material';

interface Coordinates {
    x: number;
    y: number;
}

function LV95ToWGS84(coords: Coordinates) {
    const { x, y } = coords;
    const Y = (x - 2000000) / 1000000;
    const X = (y - 1000000) / 1000000;

    const lambda0 = 2.6779094 + 4.728982 * X + 0.791484 * X * Y + 0.1306 * X * Y * Y - 0.0436 * X * X * X;
    const phi0 = 16.9023892 + 3.238272 * Y - 0.270978 * X * X - 0.002528 * Y * Y - 0.0447 * X * X * Y - 0.0140 * Y * Y * Y;

    const lambda = lambda0 * 100 / 36;
    const phi = phi0 * 100 / 36;

    return { latitude: phi, longitude: lambda };
}

const Addiere = () => {
    const [xLV95, setXLV95] = useState(0);
    const [yLV95, setYLV95] = useState(0);
    const [resultat, setResultat] = useState('');

    const addition = () => {
        const wgs84Coords = LV95ToWGS84({ x: xLV95, y: yLV95 });
        setResultat(`WGS84 Koordinaten: ${wgs84Coords.latitude.toFixed(6)}, ${wgs84Coords.longitude.toFixed(6)}`);
    };

    return (
        <>
            <Paper elevation={5} style={{ padding: '15px', margin: '15px', maxWidth: '400px' }}>
                <Typography variant="h5">Transformation</Typography>
                <TextField
                    label="X (LV95)"
                    value={xLV95}
                    onChange={(e) => setXLV95(parseInt(e.target.value, 10) || 0)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Y (LV95)"
                    value={yLV95}
                    onChange={(e) => setYLV95(parseInt(e.target.value, 10) || 0)}
                    fullWidth
                    margin="normal"
                />
                <Button variant="contained" color="primary" onClick={addition}>
                    Transform in WGS84
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