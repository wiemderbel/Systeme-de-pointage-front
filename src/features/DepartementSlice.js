import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchDepartements,
  addDepartement,
  deleteDepartement,
  editDepartement,
  fetchDepartementById,
} from "../services/DepartementService";
export const getDepartements = createAsyncThunk(
  "departement/getDepartements",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchDepartements();

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const createDepartement = createAsyncThunk(
  "departement/createDepartement",
  async (departement, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await addDepartement(departement);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const delDepartement = createAsyncThunk(
  "departement/delDepartement",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await deleteDepartement(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updateDepartement = createAsyncThunk(
  "departement/updateDepartement",
  async (departement, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await editDepartement(departement);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const findDepartementByID = createAsyncThunk(
  "departement/findDepartementByID",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetchDepartementById(id);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const departementSlice = createSlice({
  name: "departement",
  initialState: {
    departements: [],
    departement: {},
    isLoading: false,
    success: null,
    error: null,
  },
  extraReducers: (builder) => {
    //get departements
    builder
      .addCase(getDepartements.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getDepartements.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.departements = action.payload;
      })
      .addCase(getDepartements.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("impossible de se connecter au serveur");
      })
      //insertion departement
      .addCase(createDepartement.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(createDepartement.fulfilled, (state, action) => {
        state.departements.push(action.payload);
        state.isLoading = false;
        state.error = null;
        state.success = action.payload;
      })
      .addCase(createDepartement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.success = null;
      })
      //Modification departement
      .addCase(updateDepartement.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
        state.success = null;
      })
      .addCase(updateDepartement.fulfilled, (state, action) => {
        state.departements = state.departements.map((item) =>
          item._id === action.payload._id ? action.payload : item
        );
        state.isLoading = false;
        state.error = null;
        state.success = action.payload;
      })
      //Delete departement
      .addCase(delDepartement.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(delDepartement.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.departements = state.departements.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(delDepartement.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //Fectch departement
      .addCase(findDepartementByID.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(findDepartementByID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.departement = action.payload;
      });
  },
});
export default departementSlice.reducer;
