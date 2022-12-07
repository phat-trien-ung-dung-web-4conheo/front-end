import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { useSelector } from "react-redux";
import { publicRequest } from "../../../data/requestMethod";

const Heading = styled.h3`
  font-size: 48px;
  color: black;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  margin-bottom: 50px;
`;
const columns = [
  { id: "billID", label: "Bill ID" },
  { id: "date", label: "Date" },
  {
    id: "total",
    label: "Total",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
];

const OrderStatus = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const [orders, setOrders] = useState([]);
  function createData(billID, date, total, status) {
    return { billID, date, total, status };
  }
  const rows = [
    orders?.map((item) => {
      console.log(item.status);
      return createData({
        billID: item?._id,
        date: item?.updatedAt,
        total: item?.totalPrice,
        status: item?.status,
      });
    }),
  ];
  console.log(rows);
  const currentUser = useSelector((state) => state.user.login.currentUser);
  const getOrder = async () => {
    try {
      const res = await publicRequest.get("/orders/find/" + currentUser._id, {
        headers: {
          token: "Bearer " + currentUser.accessToken,
        },
      });
      console.log("res.data", res.data);
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getOrder();
  }, []);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Heading>My Orders</Heading>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column?.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row?.code}
                    >
                      {columns?.map((column) => {
                        const value = row[0][column?.id];
                        console.log(value);
                        return (
                          <TableCell key={column?.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })} */}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default OrderStatus;
