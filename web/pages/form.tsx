import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import MainFrame from '../../assets/playground-mainframe.webp'
import Logo from '../../assets/playground-logo.png'

const Form: React.FC = () => {
    return (
        <div>
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={12} sm={6}>
                    <img
                        src="https://cdn.dribbble.com/users/345970/screenshots/14741336/media/0d7f0ffe406091da256fa30df972e439.png"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Grid>
                <Grid container item xs={12} sm={6} alignItems="center" direction="column" style={{ padding: 10 }}>
                    <div />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: 400,
                            maxHeight: 300,
                        }}
                    >
                        <Grid container justify="center">
                            <img
                                src="https://cdn.dribbble.com/users/975591/screenshots/13301438/media/6ca5557f9199e9061f194a89a280da69.png"
                                width={200}
                                alt=""
                            />
                        </Grid>

                        <TextField label="Title" margin="normal" />
                        <TextField label="Descp" margin="normal" />
                        <Button color="primary" variant="contained">
                            Submit
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Form
