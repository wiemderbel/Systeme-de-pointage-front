import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard.jsx'))



//departement
const Departement = React.lazy(() => import('./views/departement/Adddepartement.jsx'))
const DepartementAdmin = React.lazy(() => import('./views/departement/DepartementAdmin.jsx'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },



  { path: '/departement', name: 'Departement', element: Departement, exact: true },
  { path: '/departement/adddepartement', name: 'Departement', element: Departement },
  { path: '/departement/allDepartement', name: 'Departement', element: DepartementAdmin },


]

export default routes
