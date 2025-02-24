import UserTable from "../Components/UserTable";
function Users() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">User Management</h2>
      <UserTable />
    </div>
  );
}
export default Users;
