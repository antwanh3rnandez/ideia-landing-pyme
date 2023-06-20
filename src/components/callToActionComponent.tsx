import Container  from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { IconCheck  } from '@tabler/icons-react';

import image1 from '../assets/image1.jpg';

const CallToAction = ({ }) => {

    return (
        <div style={{  paddingTop: '50px', paddingBottom: '15px', background: 'var(--gray)', width: '100%' }}>
            <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>              
                <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item xs={12} md={8} sx={{marginBottom: '20px'}}>
                        <Typography variant="h4" gutterBottom fontWeight={800} sx={{fontFamily: 'Poppins, sans-serif', textAlign: 'start', marginBottom: '25px'}}>
                        Estás a solo un clic de<br/>obtener el crédito<br/>que mereces
                        </Typography>
                        <List sx={{marginLeft: '20px'}}>
                            <ListItem>
                                <span style={{ backgroundColor: 'black', borderRadius: '50%', padding: '4px', display: 'inline-block', width: '18px', height: '18px' }}>
                                    <IconCheck size={18} stroke-width='4.0' style={{ color: 'var(--secondary)' }} />
                                </span>
                                <ListItemText sx={{marginLeft: '5px'}}>
                                    <Typography fontSize={18} gutterBottom fontWeight={500} sx={{fontFamily: 'Poppins, sans-serif'}}>
                                    Olvídate de los papeleos y las vueltas, crédito fácil y rápido.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <span style={{ backgroundColor: 'black', borderRadius: '50%', padding: '4px', display: 'inline-block', width: '18px', height: '18px' }}>
                                    <IconCheck size={18} stroke-width='4.0' style={{ color: 'var(--secondary)' }} />
                                </span>
                                <ListItemText sx={{marginLeft: '5px'}}>
                                    <Typography fontSize={18} gutterBottom fontWeight={500} sx={{fontFamily: 'Poppins, sans-serif'}}>
                                    Accede en todo momento a nuestro CRM en línea y en tiempo real.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <span style={{ backgroundColor: 'black', borderRadius: '50%', padding: '4px', display: 'inline-block', width: '18px', height: '18px' }}>
                                    <IconCheck size={18} stroke-width='4.0' style={{ color: 'var(--secondary)' }} />
                                </span>
                                <ListItemText sx={{marginLeft: '5px'}}>
                                    <Typography fontSize={18} gutterBottom fontWeight={500} sx={{fontFamily: 'Poppins, sans-serif'}}>
                                    Realiza el proceso de forma completamente segura.
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{marginBottom: '0'}}>
                        <Box display="flex" justifyContent="center" alignItems="start" height="100%">
                            <Box width="80%">
                                <img src={image1} style={{ width: '100%', height: 'auto', borderRadius: '25px' }} alt="Hero" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                            <Button 
                                variant="contained" 
                                sx={{ 
                                    position: 'relative',
                                    top: '-50px',
                                    margin: '0 auto',
                                    marginTop: '20px',
                                    marginBottom: '20px',
                                    width: '20%',
                                    borderRadius: '20px',
                                    background: 'var(--secondary)',
                                    paddingLeft: '30px',    
                                    paddingRight: '30px',      
                                    boxShadow: '2px 6px 4px rgba(0, 0, 0, 0.25)',                    
                                    color: '#000',
                                    '&:hover': {
                                        background: 'var(--dark-blue)',
                                        color: '#FFF'
                                    } 
                                }}>
                                    <Typography variant="h6" fontWeight={500} 
                                        sx={{
                                            fontFamily: 'Poppins, sans-serif', 
                                            textAlign: 'center'
                                        }}>
                                    Empezar Ahora
                                    </Typography>
                            </Button>
                        </div>
                    </Grid>
                </Grid>

            </Container>
            
        </div>
    );
};

export default CallToAction;
