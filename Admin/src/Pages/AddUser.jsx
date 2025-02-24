import AddUserForm from "../Components/AddUserForm.jsx";

function AddUser() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Add New User</h2>
      <AddUserForm />
    </div>
  );
}

export default AddUser;