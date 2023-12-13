import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import axios from 'axios';

const FruchtListe = () => {
    const [fruechte, setFruechte] = useState([]);

    useEffect(() => {
        const herunterladen = async () => {
            try {
                const response = await axios.get("api/list");
                setFruechte(response.data.liste)
            }
            catch (error) {
                console.log("FEHLER!! Kann API nicht aufrufen!!!");
            }
        }

        herunterladen();

    }, [])


    return (
        <>
            <h1>Frucht Liste</h1>
            <List>
                {fruechte.map((frucht, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={frucht} />
                    </ListItem>
                ))}
            </List>
        </>
    )

}

export default FruchtListe;
