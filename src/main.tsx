import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ZhuyinProvider } from "./providers";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ZhuyinProvider>
            <App />
        </ZhuyinProvider>
    </React.StrictMode>,
);
