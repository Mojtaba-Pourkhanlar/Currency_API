import { AppBar, Container, Typography, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ p: '10px', bgcolor: '#121519' }}>
        <Container maxWidth='xl' >
          <Toolbar>
            <Link to="/coin" style={{ textDecoration: 'none' }}>
              <Typography variant='h4' color="#448c74">
                Currency
              </Typography>
            </Link>
          </Toolbar>
        </Container>

      </AppBar>
    </>
  )
}

export default Navbar