import Container  from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import { IconDeviceLaptop } from '@tabler/icons-react';
import { IconDeviceMobile } from '@tabler/icons-react';
import { IconLock } from '@tabler/icons-react';

const Features = ({ }) => {

    return (
        <div style={{ width:'100%', background: 'white' }}>
            <Container 
                sx={{
                    height: '100%',
                    my: '55px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                    <Typography variant="h3" gutterBottom fontWeight={800} sx={{fontFamily: 'Poppins, sans-serif', textAlign: 'center', marginBottom: '25px'}}>
                    Un crédito único para que tu<br/>negocio siga creciendo.
                    </Typography>
                    <Button 
                        variant="contained" 
                        sx={{ 
                            margin: '0 auto',
                            marginBottom: '25px',
                            width: '25%',
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
                            Solicitar ahora
                            </Typography>
                    </Button>
                    <Grid container spacing={4} sx={{height: '100%'}}>
                        <Grid item xs={12} md={4}>
                            <Card 
                                sx={{
                                    padding: '15px', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent:'center', 
                                    alignItems: 'center', 
                                    borderRadius: '15px',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                                    height: '100%'
                                }}>
                                <IconDeviceLaptop size={64}/>
                                <Typography 
                                    fontSize={18} 
                                    fontWeight={800} 
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', 
                                        textAlign: 'center',
                                        marginBottom: '15px'
                                    }}>
                                    Solicitud en línea
                                </Typography>
                                <Typography 
                                    fontSize={16} 
                                    fontWeight={500} 
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', 
                                        textAlign: 'center'
                                    }}>
                                    Con nuestro CRM la solicitud de tu crédito PyME es 100% en línea y en tiempo real.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card 
                                sx={{
                                    padding: '15px', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent:'center', 
                                    alignItems: 'center', 
                                    borderRadius: '15px',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)' ,
                                    height: '100%'
                                }}>
                                <IconDeviceMobile size={64}/>
                                <Typography 
                                    fontSize={18} 
                                    fontWeight={800} 
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', 
                                        textAlign: 'center',
                                        marginBottom: '15px'
                                    }}>
                                    Atención personalizada
                                </Typography>
                                <Typography 
                                    fontSize={16} 
                                    fontWeight={500} 
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', 
                                        textAlign: 'center'
                                    }}>
                                    Obtén asesoría durante el proceso del trámite de tu crédito.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Card 
                                sx={{
                                    padding: '15px', 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    justifyContent:'center', 
                                    alignItems: 'center', 
                                    borderRadius: '15px',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
                                    height: '100%' 
                                }}>
                                <IconLock size={64}/>
                                <Typography 
                                    fontSize={18} 
                                    fontWeight={800} 
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', 
                                        textAlign: 'center',
                                        marginBottom: '15px'
                                    }}>
                                    Datos Asegurados
                                </Typography>
                                <Typography 
                                    fontSize={16} 
                                    fontWeight={500} 
                                    sx={{
                                        fontFamily: 'Poppins, sans-serif', 
                                        textAlign: 'center'
                                    }}>
                                    Tu información se mantiene segura y es 100% confidencial con nosotros.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
            </Container>

        </div>
      
    );
  };
  
  

export default Features;
