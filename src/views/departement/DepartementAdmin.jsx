import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDepartements } from "../../features/DepartementSlice";
import Listdepartement from "./Listdepartement";

const DepartementAdmin = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getDepartements());
  },[]);

  return (
    <div>
      <Listdepartement />
    </div>
  )
}

export default DepartementAdmin;
