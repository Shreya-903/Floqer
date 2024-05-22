// App.tsx
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MainTable from './component/MainTable'; // Assuming MainTable is in a separate file

// Create a theme instance
const theme = createTheme();

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <MainTable />
        </ThemeProvider>
    );
};

export default App;
