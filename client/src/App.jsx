import { Route, Routes } from "react-router-dom"
import { AdminDashboard, Company, Customers, Drivers, WorkerPanel, Workers } from "./pages"
import Sidebar from "./components/Sidebar"

export const backendUrl = import.meta.env.ADMIN_BACKEND_URL

const App = () => {
  return (
    <div>

      <Sidebar />

      <Routes>

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/worker-dashboard" element={<WorkerPanel />} />
        <Route path="/companies" element={<Company />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/customers" element={<Customers />} />

      </Routes>

    </div>
  )
}

export default App
