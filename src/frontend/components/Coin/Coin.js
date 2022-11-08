import { Link } from "react-router-dom";

import { styled } from '@mui/material/styles';
import {
  Table, 
  TableBody, 
  TableContainer, 
  TableHead ,
  TableRow,
  Paper ,
  Typography
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 17,
  },
}));


const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#424242',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#212121',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Coin = ({ searchCoins }) => {

  return (
    <TableContainer component={Paper} >
      <Table sx={{ m: '0'}} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>
              <Typography variant="h6">Coin</Typography>
            </StyledTableCell>

            <StyledTableCell></StyledTableCell>
            <StyledTableCell></StyledTableCell>

            <StyledTableCell align="right">
              <Typography variant="h6">Price</Typography>
            </StyledTableCell>

            <StyledTableCell align="right">
              <Typography variant="h6">24h Change</Typography>
            </StyledTableCell>

            <StyledTableCell align="right">
              <Typography variant="h6">Market Cap</Typography>
            </StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody >
          {
            searchCoins().map((c) => (
              <StyledTableRow key={c.id}>
                <Link to={`/coin/${c.id}`} style={{ textDecoration: 'none', display: 'contents' }}>
                  <StyledTableCell align="left" sx={{ margin:'50px 0' }}>
                    <img style={{ width: '40px',marginBottom:'-10px'}} src={c.image} alt={c.name} />
                  </StyledTableCell>
                  <StyledTableCell align="left">{c.name}</StyledTableCell>
                  <StyledTableCell align="right"></StyledTableCell>
                  <StyledTableCell align="right">{c.current_price.toLocaleString()}</StyledTableCell>
                  <StyledTableCell align="right"
                    sx={{ color: `${c.price_change_percentage_24h > 0 ? '#00cc00' : '#ff2626'}` }}
                  >{c.price_change_percentage_24h.toFixed(2)}</StyledTableCell>
                  <StyledTableCell align="right">{c.market_cap.toLocaleString()}</StyledTableCell>
                </Link>
              </StyledTableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Coin;