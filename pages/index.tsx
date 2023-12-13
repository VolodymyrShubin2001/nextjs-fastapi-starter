import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';

export default function Index() {
    const [tab, setTab] = useState('tab1');

    return (<>
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" onClick={() => setTab('tab1')}>
                    Tab 1
                </Button>
                <Button color="inherit" onClick={() => setTab('tab2')}>
                    Tab 2
                </Button>
            </Toolbar>

        </AppBar>

        {tab === 'tab1' && (<><h1>Inhalt Tab 1</h1></>)}
        {tab === 'tab2' && (<><h1>Inhalt Tab 2</h1></>)}
    </>)
}