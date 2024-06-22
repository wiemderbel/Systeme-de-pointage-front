
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
  } from '@coreui/react'
  import {useMemo} from 'react'    //useState ,
// import ReactLoading from 'react-loading';
import {useSelector} from "react-redux"
// import Button from 'react-bootstrap/Button';
// import { toast } from 'react-toastify';
// import EditArticle from './EditArticle';
// import {delArticle} from "../../../features/departementSlice"
// import {useDispatch} from "react-redux";
import { MaterialReactTable } from 'material-react-table';
// import { Box } from '@mui/material';


const Listdepartement = () => {
    // const dispatch=useDispatch()
// const [showModal, setShowModal] = useState(false);
const {departements} = useSelector((state)=>state.storedepartements);
// const [selectedItem, setSelectedItem] = useState(null);
// const handleClose= () => {
// setShowModal(false);
// setSelectedItem(null);
// }
// const handleDelete=(id,ref)=>{
// if(window.confirm("supprimer Article O/N")) {
// dispatch(delArticle(id));
// toast(`Article ${ref} Supprimé`, {
// position: "top-right",
// autoClose: 5000,
// hideProgressBar: false,
// closeOnClick: true,
// pauseOnHover: true,
// draggable: true,
// progress: undefined,
// })
// } 
// }

// const handleEdit = (item) => {
// setShowModal(true);
// setSelectedItem(item);
// };
const columns = useMemo(
() => [
{
accessorKey: 'name', //access nested data with dot notation
header: 'name',
size: 100,
},

{
accessorKey: '_id',
header: 'actions',
size: 100,
// Cell: ({ cell, row }) => (
//  <div >
// <Button
// onClick={() => handleEdit(cell.row.original)}
// size="md"
// className="text-warning btn-link edit"
// >
// <i className="fa-solid fa-pen-to-square"></i>
// </Button>
// <Button
// onClick={(e) => {
// handleDelete(cell.row.original._id,cell.row.original.reference);
// }}
// size="md"
// className="text-danger btn-link delete"
// >
// <i className="fa fa-trash" />
// </Button>
// </div> 
// ),
},
],
[departements],
)
  return (
    <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>List</strong> <small>Departement</small>
          </CCardHeader>
          <CCardBody>

          <div>
<MaterialReactTable columns={columns} data={departements} />
</div>
{/* {showModal && (
<EditArticle
show={showModal}
handleClose={handleClose}
art={selectedItem}
/> 
)} */}



          </CCardBody>
        </CCard>
      </CCol>
  )
}

export default Listdepartement
