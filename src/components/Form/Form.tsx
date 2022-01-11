import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
const FormComponent: React.FC<any> = () => {
    const [colorCode, setcolorCode] = useState("#4666d0");
    const submitForm = (event: any) => {

        // verify that the value is a hex value
        // call the fct from my npm package
        // if the value is hex value update the state
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setcolorCode(event.target.value);
    };
    return (
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
                <TextField id="color-code-input" label="Color Code" variant="outlined" value={colorCode} onChange={handleChange} />
                <Button id="submitBtn" variant="contained"> Generate Color</Button>
                <Button type="submit" id="submitBtn" color="success" variant="contained" onClick={submitForm} > Submit</Button>

            </Box>
        </div>
    )
};

export default FormComponent;