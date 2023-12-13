import React, {useState} from 'react';
import axios from 'axios';
import {Button, TextField, Typography, Paper} from '@mui/material';

const Addiere = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [resultat, setResultat] = useState(0);

    const addition = async() => {
        try {
            const response = await axios.get(`/api/add?a=${a}&b=${b}`);
            setResultat(response.data.sum);
        }
        catch {
            console.log("Fehler!! API Aufruf!!");
        }
    }

    return (
    <>
        <Paper elevation={5} style={{padding: '15px', margin: '15px', maxWidth: '400px'}}>
            <Typography variant="h5">Addition</Typography>
            <TextField
                label="Zahl A"
                value={a}
                onChange={ (e) => setA(parseInt(e.target.value,10) || 0)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Zahl B"
                value={b}
                onChange={ (e) => setB(parseInt(e.target.value,10) || 0)}
                fullWidth
                margin="normal"
            />
            <Button variant="contained" color="primary" onClick={addition}>
                Addiere
            </Button>

            {resultat !=0 && (
                <Typography variant="h6">
                    Das Resultat ist: {resultat}
                </Typography>

            )}

        </Paper>
        
    </>)
}

export default Addiere;