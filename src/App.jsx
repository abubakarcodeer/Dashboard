import { useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { ColorModeContext, useMode } from "./Theme";

// Global components
import Topbar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/SideBar";

// Lazy load pages for optimization
const Dashboard = lazy(() => import("./scenes/dashboard"));
const Team = lazy(() => import("./scenes/team"));
const Invoices = lazy(() => import("./scenes/invoices"));
const Contacts = lazy(() => import("./scenes/contacts"));
const Bar = lazy(() => import("./scenes/bar"));
const Form = lazy(() => import("./scenes/form"));
const Line = lazy(() => import("./scenes/line"));
const Pie = lazy(() => import("./scenes/pie"));
const FAQ = lazy(() => import("./scenes/faq"));
const Geography = lazy(() => import("./scenes/geography"));
const Calendar = lazy(() => import("./scenes/calendar"));

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {/* Suspense shows a fallback while lazy components load */}
            <Suspense
              fallback={
                <div style={{ display: "flex", justifyContent: "center", marginTop: "50px"}}>
                  <CircularProgress color="white" />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
