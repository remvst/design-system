import React from 'react';
import { createRoot, Root } from 'react-dom/client';
import { Gauge } from '@remvst/design-system';

window.addEventListener('load', () => {
    const reactContent = document.querySelector('#react-content');

    const div = document.createElement('div');
    // div.className = 'demo-frame';
    const root = createRoot(div);
    root.render((
        <div>
            <h1>Gauges</h1>

            <div className='demo-frame' style={{padding: '10px'}}>
                <div style={{margin: '10px'}}>
                    <Gauge value={0} label="0%" />
                </div>

                <div style={{margin: '10px'}}>
                    <Gauge value={0.5} label="50%" />
                </div>

                <div style={{margin: '10px'}}>
                    <Gauge value={0.75} label="75%" />
                </div>

                <div style={{margin: '10px'}}>
                    <Gauge value={1} label="100%" />
                </div>

                <div style={{margin: '10px'}}>
                    <Gauge value={2} label="200%" />
                </div>
            </div>
        </div>
    ));
    reactContent?.appendChild(div);
});
