import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { RootState } from '@/store/store';
import { setSelectedUser } from '@/store/users';
import { useDispatch, useSelector } from 'react-redux';

export const UserDetails = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector(
    (state: RootState) => state.users.selectedUser
  );

  return (
    <Dialog
      open={!!selectedUser}
      onOpenChange={() => dispatch(setSelectedUser(null))}
    >
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-semibold text-lg">
            User Details
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[80vh]">
          {selectedUser && (
            <div className="space-y-4">
              <div>
                <div className="mt-2 space-y-2">
                  <p>
                    <span className="text-muted-foreground text-sm">
                      First Name:
                    </span>{' '}
                    {selectedUser.firstName}
                  </p>
                  <p>
                    <span className="text-muted-foreground text-sm">
                      Last Name:
                    </span>{' '}
                    {selectedUser.lastName}
                  </p>
                  <p>
                    <span className="text-muted-foreground text-sm">
                      Email:
                    </span>{' '}
                    {selectedUser.email}
                  </p>
                  <p>
                    <span className="text-muted-foreground text-sm">
                      Phone:
                    </span>{' '}
                    {selectedUser.phone}
                  </p>

                  <p>
                    <span className="text-muted-foreground text-sm">
                      Company:
                    </span>{' '}
                    {selectedUser.company.name}
                  </p>
                  <p>
                    <span className="text-muted-foreground text-sm">
                      Department:
                    </span>{' '}
                    {selectedUser.company.department}
                  </p>
                  <p>
                    <span className="text-muted-foreground text-sm">
                      Title:
                    </span>{' '}
                    {selectedUser.company.title}
                  </p>
                  <p>
                    <span className="text-muted-foreground text-sm">
                      Address:
                    </span>{' '}
                    {selectedUser.company.address.address},{' '}
                    {selectedUser.company.address.city},{' '}
                    {selectedUser.company.address.state}{' '}
                    {selectedUser.company.address.postalCode}
                  </p>
                </div>
              </div>
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
