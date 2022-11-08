import { useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#631976",
        color: "#ccc",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 17,
        color: "#ccc",
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
const TableCoinId = () => {
    const state = useSelector((state) => state.coinState.coins);
    return (
        <>
            <TableContainer component={Paper} >
                <Table sx={{ m: '0' }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>
                                <Typography variant="h6">1h</Typography>
                            </StyledTableCell>

                            <StyledTableCell>
                                <Typography variant="h6">24h</Typography>
                            </StyledTableCell>
                            <StyledTableCell>
                                <Typography variant="h6">7d</Typography>
                            </StyledTableCell>
                            <StyledTableCell></StyledTableCell>

                            <StyledTableCell align="right">
                                <Typography variant="h6">14d</Typography>
                            </StyledTableCell>

                            <StyledTableCell align="right">
                                <Typography variant="h6">30d</Typography>
                            </StyledTableCell>

                            <StyledTableCell align="right">
                                <Typography variant="h6">1yr</Typography>
                            </StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell align="left">
                                {state.market_data
                                    ?.price_change_percentage_1h_in_currency ? (
                                    <Typography variant="h6">
                                        {state.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                                            1,
                                        )}
                                        %
                                    </Typography>
                                ) : null}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                {state.market_data
                                    ?.price_change_percentage_24h_in_currency ? (
                                    <Typography variant="h6">
                                        {state.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                                            1,
                                        )}
                                        %
                                    </Typography>
                                ) : null}
                            </StyledTableCell>

                            <StyledTableCell align="left">
                                {state.market_data
                                    ?.price_change_percentage_24h_in_currency ? (
                                    <Typography variant="h6">
                                        {state.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                                            1,
                                        )}
                                        %
                                    </Typography>
                                ) : null}
                            </StyledTableCell>

                            <StyledTableCell></StyledTableCell>

                            <StyledTableCell align="right">
                                {state.market_data
                                    ?.price_change_percentage_24h_in_currency ? (
                                    <Typography variant="h6">
                                        {state.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                                            1,
                                        )}
                                        %
                                    </Typography>
                                ) : null}
                            </StyledTableCell>

                            <StyledTableCell align="right">
                                {state.market_data
                                    ?.price_change_percentage_24h_in_currency ? (
                                    <Typography variant="h6">
                                        {state.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                                            1,
                                        )}
                                        %
                                    </Typography>
                                ) : null}
                            </StyledTableCell>

                            <StyledTableCell align="right">
                                {state.market_data
                                    ?.price_change_percentage_24h_in_currency ? (
                                    <Typography variant="h6">
                                        {state.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
                                            1,
                                        )}
                                        %
                                    </Typography>
                                ) : null}
                            </StyledTableCell>

                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TableCoinId;