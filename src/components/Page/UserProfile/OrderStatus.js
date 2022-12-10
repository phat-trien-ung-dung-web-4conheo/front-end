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
  function createData(billID, date, status, total) {
    return { billID, date, status, total };
  }
  const rows = [
    orders?.map((item) => {
      // console.log(item.status);
      return createData(
        item?._id,
        item?.updatedAt,
        item?.status,
        item?.totalPrice
      );
    }),
  ];
  console.log("orders: ", orders);
  console.log("orders: ", rows[0]);
  const currentUser = useSelector((state) => state.user.login.currentUser);
  const [render, setRender] = useState(false);
  const getOrder = async () => {
    try {
      const res = await publicRequest.get("/orders/find/" + currentUser._id, {
        headers: {
          token: "Bearer " + currentUser.accessToken,
        },
      });
      console.log("res.data", res.data);
      await setOrders(res.data);
      setRender(!render);
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
              {rows[0]
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, idx) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                      {columns?.map((column) => {
                        const value = row[column?.id];
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
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows[0]?.length}
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
