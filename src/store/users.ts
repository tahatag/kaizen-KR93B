import type { User, UsersResponse } from '@/types/user';
import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

interface UsersState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  currentPage: number;
  pageSize: number;
  total: number;
}

const initialState: UsersState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
  searchQuery: '',
  currentPage: 1,
  pageSize: 10,
  total: 0,
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (
    { page, search }: { page: number; search: string },
    { rejectWithValue }
  ) => {
    try {
      const skip = (page - 1) * 10;
      const searchParam = search ? `&q=${search}` : '';
      const response = await fetch(
        `https://dummyjson.com/users/search?limit=10&skip=${skip}${searchParam}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data: UsersResponse = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSelectedUser: (state, action: PayloadAction<User | null>) => {
      state.selectedUser = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Reset to first page on search
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.total = action.payload.total;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export const { setSelectedUser, setSearchQuery, setCurrentPage } =
  usersSlice.actions;
export default usersSlice.reducer;
