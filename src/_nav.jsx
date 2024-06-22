
import CIcon from '@coreui/icons-react'
import {
  cilBuilding,
  cilHouse ,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Accueil',
    to: '/dashboard',
    icon: <CIcon icon={cilHouse } customClassName="nav-icon" />,
    
  },
  {
    component: CNavGroup,
    name: 'Departement',
    to: '/departement',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ajouter departement',
        to: '/departement/addDepartement',
      },
      {
        component: CNavItem,
        name: 'List departements',
        to: '/departement/allDepartement',
      },
      
    ],
  },

]

export default _nav
