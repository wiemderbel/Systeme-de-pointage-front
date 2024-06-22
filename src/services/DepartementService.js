import Api from "../axios/Api";
const DEPARTEMENT_API = "departements";
export const fetchDepartements = async () => {
  return await Api.get(DEPARTEMENT_API);
};
export const fetchDepartementById = async (departementId) => {
  return await Api.get(DEPARTEMENT_API + "/" + departementId);
};
export const deleteDepartement = async (departementId) => {
  return await Api.delete(DEPARTEMENT_API + "/" + departementId);
};
export const addDepartement = async (departement) => {
  return await Api.post(DEPARTEMENT_API, departement);
};
export const editDepartement = (departement) => {
  return Api.put(DEPARTEMENT_API + "/" + departement._id, departement);
};
