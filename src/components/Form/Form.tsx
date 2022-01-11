import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FormComponent: React.FC<any> = () => {
    const [colorCode, setcolorCode] = useState("#4666d0");
    const submitForm = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

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

                <TextField data-testid="color-code-input" id="color-code-input" label="Color Code" variant="outlined" value={colorCode} onChange={handleChange} />
                <Button data-testid="generate-color-btn" id="generate-color-btn" variant="contained"> Generate Color</Button>
                <Button data-testid="submit-btn"type="submit" id="submit-btn" color="success" variant="contained" onClick={submitForm} > Submit</Button>

            </Box>
        </div>
    )
};

export default FormComponent;