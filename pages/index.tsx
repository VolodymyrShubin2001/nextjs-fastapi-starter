import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import Addiere from './addiere';

export default function Index() {
    const [tab, setTab] = useState('tab1');

    return (<>
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" onClick={() => setTab('tab3')}>
                    Koordinatentransformation
                </Button>
            </Toolbar>
        </AppBar>

        {tab === 'tab3' && (<><h1><Addiere /></h1></>)}

    </>)
}