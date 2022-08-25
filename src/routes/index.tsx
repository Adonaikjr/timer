import { Route, Routes } from 'react-router-dom'
import { App } from '../pages/home/App'
import { History } from '../pages/History'
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/history" element={<History />} />
    </Routes>
  )
}
