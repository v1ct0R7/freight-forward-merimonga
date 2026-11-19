import { Route, Routes } from "react-router-dom"
import { AdminDashboard, Company, Customers, Drivers, WorkerPanel, Workers } from "./pages"
import Sidebar from "./components/Sidebar"
import Add from "./components/Company/Add"

export const backendUrl = import.meta.env.ADMIN_BACKEND_URL

const App = () => {
  return (
    <div>

      <Sidebar />

      <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">

        <Routes>

          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/worker-dashboard" element={<WorkerPanel />} />
          <Route path="/companies" element={<Company />} />
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/add-companies" element={<Add />} />


        </Routes>
      </div>

    </div>
  )
}

export default App
