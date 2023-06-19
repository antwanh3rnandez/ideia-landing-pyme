import Container  from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

import { IconCertificate } from '@tabler/icons-react';
import { IconId } from '@tabler/icons-react';
import { IconFileInvoice } from '@tabler/icons-react';
import { IconCertificate2 } from '@tabler/icons-react';

import image1 from '../assets/image1.jpg';

const Process = ({ }) => {

    return (
        <div style={{  paddingTop: '50px', paddingBottom: '15px', background: 'var(--primary)', color: 'white', width: '100%' }}>
            <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>              
                <Grid container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h3" gutterBottom fontWeight={800} sx={{fontFamily: 'Poppins, sans-serif', marginBottom: '25px', color: 'var(--secondary)'}}>
                        Proceso de solicitud muy sencillo
                        </Typography>
                        <Typography variant='h5' gutterBottom fontWeight={500} sx={{fontFamily: 'Poppins, sans-serif', marginBottom: '25px'}}>
                        Al momento de solicitar un crédito PyME necesitarás contar con tu<br/><b>Registro Federal de Contribuyentes (RFC)</b> y tu <b>contraseña SAT (CIEC)</b>.
                        </Typography>
                        <Typography variant='h5' gutterBottom fontWeight={500} sx={{fontFamily: 'Poppins, sans-serif', marginBottom: '25px'}}>
                        Además, será necesario tener los siguientes documentos:
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '70px' }}>   
                <Typography variant="h3" gutterBottom fontWeight={800} sx={{fontFamily: 'Poppins, sans-serif', marginBottom: '25px', color: 'var(--secondary)', textAlign: 'end', marginRight: '30px'}}>
                    Persona Física
                </Typography>
                <Grid container spacing={6} sx={{height: '100%'}}>
                    <Grid item xs={12} md={3}>
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
                            <IconCertificate size={64}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={800} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                CIEC
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
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
                            <IconId size={64}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={800} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                INE
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
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
                            <IconFileInvoice size={64}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={800} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                Comprobante de domicilio
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="xl" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '80px' }}>   
                <Typography variant="h3" gutterBottom fontWeight={800} sx={{fontFamily: 'Poppins, sans-serif', marginBottom: '25px', color: 'var(--secondary)', textAlign: 'end', marginRight: '30px'}}>
                    Persona Moral
                </Typography>
                <Grid container spacing={5} sx={{height: '100%'}}>
                    <Grid item xs={12} md={3}>
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
                            <IconCertificate size={64}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={800} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                CIEC
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
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
                            <IconId size={64}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={800} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                INE de los representantes legales
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
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
                            <IconFileInvoice size={64}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={800} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                Comprobante de domicilio del representante y de la persona moral
                            </Typography>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={3}>
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
                            <IconCertificate2 size={64}/>
                            <Typography 
                                fontSize={24} 
                                fontWeight={800} 
                                sx={{
                                    fontFamily: 'Poppins, sans-serif', 
                                    textAlign: 'center',
                                    marginTop: '15px',
                                    marginBottom: '15px'
                                }}>
                                Acta constitutiva con inscripción al RPPC
                            </Typography>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Process;
