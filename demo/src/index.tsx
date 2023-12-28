import React from 'react';
import { createRoot, Root } from 'react-dom/client';

window.addEventListener('load', () => {
    const reactContent = document.querySelector('#react-content');

    const div = document.createElement('div');
    div.className = 'demo-frame';
    const root = createRoot(div);
    root.render((
        <h1>Hello</h1>
    ));
    reactContent?.appendChild(div);
});
