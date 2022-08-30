import { Route, Routes } from 'react-router-dom'
import { App } from '../pages/home/App'
import { History } from '../pages/History'
import { DefaultLayout } from '../components/layout/DefaultLayout'
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
