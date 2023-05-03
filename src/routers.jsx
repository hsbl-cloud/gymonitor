import { createBrowserRouter } from 'react-router-dom'
import ClockIn from './pages/ClockIn'

const router = createBrowserRouter([
    {
        path : '/',
        element : <ClockIn />,
        children: [
            {
                path : '/clockin',
                element : <ClockIn />
            }
        ]
    }
])

export default router
