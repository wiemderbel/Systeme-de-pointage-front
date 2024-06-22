import  { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormFeedback,
  CFormLabel,

} from '@coreui/react'

const Adddepartement = () => {
    const [validated, setValidated] = useState(false)
const handleSubmit = (event) => {
  const form = event.currentTarget
  if (form.checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  }
  setValidated(true)
}
  return (
    <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Ajouter</strong> <small>Departement</small>
          </CCardHeader>
          <CCardBody>

            <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <CCol md={8} className="position-relative">
        <CFormLabel htmlFor="validationTooltip01">Name</CFormLabel>
        <CFormInput type="text" id="validationTooltip01" defaultValue="Mark" required />
        <CFormFeedback tooltip valid>
          Looks good!
        </CFormFeedback>
      </CCol>
    
     
      <CCol md={8} className="position-relative">
        <CFormLabel htmlFor="validationTooltip03">City</CFormLabel>
        <CFormInput type="text" id="validationTooltip03" required />
        <CFormFeedback tooltip invalid>
          Please provide a valid city.
        </CFormFeedback>
      </CCol>
    
      
      <CCol xs={12} className="position-relative">
        <CButton className='me-2' color="primary" type="submit">
          Ajouter
        </CButton>
        <CButton color="secondary" >
          Annuler
        </CButton>
      </CCol>
    </CForm>
          </CCardBody>
        </CCard>
      </CCol>
  )
}

export default Adddepartement
