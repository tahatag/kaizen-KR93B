import { Input } from '@/components/ui/input';
import type { RootState } from '@/store/store';
import { setSearchQuery } from '@/store/users';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const { searchQuery, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  const [value, setValue] = useState(searchQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearchQuery(value));
    }, 500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Input
      type="text"
      placeholder="Search users by name..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="max-w-md"
      disabled={loading || !!error}
    />
  );
};
