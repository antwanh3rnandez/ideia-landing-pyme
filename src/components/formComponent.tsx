import Container  from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

import image2 from '../assets/image2.jpg';

const Form = ({ }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        // 
      };

    return (
        <div style={{  paddingTop: '50px', paddingBottom: '15px', background: 'white', width: '100%' }}>
            <Container 
                maxWidth="xl" 
                sx={{ 
                    width: '100%', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>              
                <Grid 
                    container 
                    sx={{
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        marginBottom: '15px'
                    }}>
                    <Grid item xs={12} md={5}>
                        <Box 
                            display="flex" 
                            justifyContent="center" 
                            alignItems="center" 
                            height="100%"
                        >
                            <Box width="80%">
                                <img 
                                    src={image2} 
                                    style={{ 
                                        width: '100%', 
                                        height: 'auto', 
                                        borderRadius: '25px' 
                                        }} 
                                    alt="Text" 
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography 
                            variant="h4" 
                            gutterBottom 
                            fontWeight={800} 
                            sx={{
                                fontFamily: 'Poppins, sans-serif', 
                                textAlign: 'start', 
                                my: '25px'}}
                            >
                        Consultoría de empresas
                        </Typography>
                        <Typography variant="h5" gutterBottom fontWeight={500} sx={{fontFamily: 'Poppins, sans-serif', textAlign: 'start', marginBottom: '25px'}}>
                        Si lo que necesitas es mejorar las condiciones financieras de tu empresa para obtener mayores oportunidades de crédito.
                        </Typography>
                        <Typography variant="h5" gutterBottom fontWeight={500} sx={{fontFamily: 'Poppins, sans-serif', textAlign: 'start', marginBottom: '25px'}}>
                        ¡Déjanos tu información!
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container 
                maxWidth="lg" 
                sx={{
                    background: 'var(--gray)', 
                    padding: '15px', 
                    borderRadius: '15px', my: '30px'
                }}>
                <Box mt={5} mb={2}>
                    <Typography 
                        variant="h4" 
                        gutterBottom 
                        fontWeight={900} 
                        align="center" 
                        sx={{
                            fontFamily: 'Poppins, sans-serif', 
                            textAlign: 'start', 
                            marginBottom: '25px'
                        }}>
                    Queremos ayudarte
                    </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Grid 
                        container 
                        spacing={2} 
                        sx={{ 
                            textAlign: 'start', 
                            marginBottom: '25px'
                        }}>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Tu nombre completo"
                            name="fullName"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '25px',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Nombre de tu empresa"
                            name="companyName"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '25px',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Dirección de tu empresa"
                            name="companyAddress"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '25px',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Correo electrónico"
                            name="companyEmail"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '25px',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Teléfono"
                            name="companyPhone"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '25px',
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            fullWidth
                            label="Cuéntanos un poco más sobre tu empresa"
                            name="companyDescription"
                            multiline
                            rows={4}
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: '25px',
                                '& .MuiOutlinedInput-root': {
                                borderRadius: '25px',
                                },
                            }}
                        />
                    </Grid>
                    </Grid>
                    <Box 
                        mt={3} 
                        display="flex" 
                        justifyContent="center"
                    >
                        <Button 
                            variant="contained" 
                            type='submit'
                            sx={{ 
                                margin: '0 auto',
                                marginTop: '20px',
                                marginBottom: '20px',
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
                                Empezar Ahora
                                </Typography>
                        </Button>
                    </Box>
                </form>
            </Container>
            
        </div>
    );
};

export default Form;
