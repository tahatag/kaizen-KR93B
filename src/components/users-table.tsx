import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { AppDispatch, RootState } from '@/store/store';
import { fetchUsers, setCurrentPage, setSelectedUser } from '@/store/users';
import type { User } from '@/types/user';
import { Eye } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from './pagination';
import { Skeleton } from './ui/skeleton';

export const UsersTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading, error, currentPage, pageSize, total, searchQuery } =
    useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, search: searchQuery }));
  }, [dispatch, currentPage, searchQuery]);

  const handleViewUser = (user: User) => {
    dispatch(setSelectedUser(user));
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60px]">#</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="w-16 text-center">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading
            ? Array.from({ length: 10 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <TableRow key={index}>
                  <TableCell>
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  {Array.from({ length: 5 }).map((_, innerIndex) => (
                    <TableCell
                      key={`${index}-${
                        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                        innerIndex
                      }`}
                    >
                      <Skeleton className="h-10 w-full" />
                    </TableCell>
                  ))}
                  <TableCell>
                    <Button size="icon" disabled>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            : users.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {(currentPage - 1) * pageSize + index + 1}
                  </TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.company.name}</TableCell>
                  <TableCell className="text-center">
                    <Button size="icon" onClick={() => handleViewUser(user)}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
