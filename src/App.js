import { useState, useEffect } from "react";
import TableUsers from "./components/table";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://randomuser.me/api/?seed=dexi-interview&page=${page}&results=5`)
      .then(response => response.json())
      .then(data => {
        setUsers(prevState => [...prevState, ...data.results]);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, [page]);

  function handleEditClick(user) {
    setEditingUser(user);
  }

  function handleCancelEdit() {
    setEditingUser(null);
  }

  function handleSave(user) {
    user.isSaving = true;
    setUsers([...users]); // Trigger re-render
    setTimeout(() => {
      // Simulate saving user
      user.isSaving = false;
      setUsers([...users]); // Trigger re-render
      setEditingUser(null);
    }, 2000);
  }

  function handleLoadMoreClick() {
    setPage(prevPage => prevPage + 1);
  }

  if (loading && page === 1) {
    return <p>Loading...</p>;
  }


  return (
    <> 
      <TableUsers
        users={users}
        setUsers={setUsers}
        editingUser={editingUser}
        loading={loading}
        page={page}
        handleEditClick={handleEditClick}
        handleCancelEdit={handleCancelEdit}
        handleSave={handleSave} 
        handleLoadMoreClick={handleLoadMoreClick}
      />
    </>
  )
}

export default App;
