import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
const FormComponent: React.FC<any> = () => (
    <div>
        <Box
            data-testid="form-component"
            className={`form-component-container`}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography>Color Code Visualizer</Typography>
            <TextField id="color-code-input" label="Color Code" variant="outlined" />
            <Button type="submit" id="submitBtn" variant="contained"> Generate Color</Button>
            <Button type="submit" id="submitBtn" color="success" variant="contained"> Submit</Button>

        </Box>
    </div>
);

export default FormComponent;