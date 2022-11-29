import React from 'react';
import Topbar from "../../../scenes/global/Topbar";
import Sidebar from "../../../scenes/global/Sidebar";
import Dashboard from "../../../scenes/dashboard";
import Team from "../../../scenes/team";
import Invoices from "../../../scenes/invoices";
import Contacts from "../../../scenes/contacts";
import Bar from "../../../scenes/bar";
import Form from "../../../scenes/form";
import Line from "../../../scenes/line";
import Pie from "../../../scenes/pie";
import FAQ from "../../../scenes/faq";
import Geography from "../../../scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "../../../theme";
import Calendar from "../../../scenes/calendar/calendar";
import { useState } from "react";
import { Route, Routes } from 'react-router-dom';

const AdminDashboard = () => {
    const [theme, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
    return (
        <div>
            <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <div className="app">
                        <Sidebar isSidebar={isSidebar} />
                        <main className="content">
                            <Topbar setIsSidebar={setIsSidebar} />
                            <Routes>
                                <Route path="/admin/dashboard" element={<Dashboard />}/>
                                <Route path="/admin/team" element={<Team />}/>
                                <Route path="/admin/contacts" element={<Contacts />}/>
                                <Route path="/admin/invoices" element={<Invoices />}/>
                                <Route path="/admin/form" element={<Form />}/>
                                <Route path="/admin/bar" element={<Bar />}/>
                                <Route path="/admin/pie" element={<Pie />}/>
                                <Route path="/admin/line" element={<Line />}/>
                                <Route path="/admin/faq" element={<FAQ />}/>
                                <Route path="/admin/calendar" element={<Calendar />}/>
                                <Route path="/admin/geography" element={<Geography />}/>
                            </Routes>
                        </main>
                    </div>
                </ThemeProvider>
            </ColorModeContext.Provider>
        </div>
    );
};

export default AdminDashboard;