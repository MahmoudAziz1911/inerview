import React from 'react'

const TableUsers = ({ users, setUsers, editingUser, loading, page, handleSave, handleEditClick, handleCancelEdit, handleLoadMoreClick }) => {
    return (
        <>
            <div class="flex flex-col px-6 lg:px-10">
                <div class="overflow-x-auto border-[1px] rounded-2xl">
                    <div class="inline-block min-w-full">
                        <div class="overflow-hidden">
                            <table class="min-w-full text-center text-sm font-light">
                                <thead
                                    class="text-left items-center border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                                    <tr className="capitalize">
                                        <th className="px-6 py-4">name</th>
                                        <th className="px-6 py-4">title</th>
                                        <th className="px-6 py-4">status</th>
                                        <th className="px-6 py-4">role</th>
                                        <th className="px-6 py-4">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.login.uuid}>
                                            {editingUser === user ? (
                                                <>
                                                    <td>
                                                        <div className="flex flex-col">
                                                            <div>
                                                                <input type="text" value={user.name.first} onChange={e => {
                                                                    user.name.first = e.target.value;
                                                                    setUsers([...users]); // Trigger re-render
                                                                }} />
                                                                <input type="text" value={user.name.last} onChange={e => {
                                                                    user.name.last = e.target.value;
                                                                    setUsers([...users]); // Trigger re-render
                                                                }} />
                                                            </div>
                                                            <div>
                                                                <input type="email" value={user.email} onChange={e => {
                                                                    user.email = e.target.value;
                                                                    setUsers([...users]); // Trigger re-render
                                                                }} />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex flex-col text-left">
                                                            <div>
                                                                <input type="number" value={user.location.street.number} onChange={e => {
                                                                    user.location.street.number = e.target.value;
                                                                    setUsers([...users]); // Trigger re-render
                                                                }} />
                                                            </div>
                                                            <div>
                                                                <input type="text" value={user.location.street.name} onChange={e => {
                                                                    user.location.street.name = e.target.value;
                                                                    setUsers([...users]); // Trigger re-render
                                                                }} />
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td className="text-left">
                                                        <input type="tel" value={user.phone} onChange={e => {
                                                            user.phone = e.target.value;
                                                            setUsers([...users]); // Trigger re-render
                                                        }} />
                                                    </td>
                                                    <td className="text-left">
                                                        <input type="number" value={user.dob.age} onChange={e => {
                                                            user.dob.age = e.target.value;
                                                            setUsers([...users]); // Trigger re-render
                                                        }} />
                                                    </td>
                                                    <td>
                                                        <button className="font-semibold tracking-wide px-2 bg-green-300" disabled={user.isSaving} onClick={() => handleSave(user)}>Save</button>
                                                        {' '}
                                                        <button className="font-semibold tracking-wide px-2 bg-red-300" disabled={user.isSaving} onClick={handleCancelEdit}>Cancel</button>
                                                    </td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className=" px-2 py-2 font-medium">
                                                        <div className="flex items-center space-x-3">
                                                            <img src={user.picture.thumbnail} alt="Logo" className="w-14 h-14 rounded-full" />

                                                            <div className="flex flex-col text-left">
                                                                <strong>
                                                                    {`${user.name.first} ${user.name.last}`}
                                                                </strong>
                                                                <span>
                                                                    {user.email}
                                                                </span>

                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class=" whitespace-nowrap px-6 py-4">
                                                        <div className="flex flex-col text-left">
                                                            <h1>{user.location.street.number}</h1>
                                                            <p className="text-gray-400 font-medium">{user.location.street.name}</p>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap  px-6 py-4">
                                                        <div className="text-left">
                                                            <span className="inline-block font-medium capitalize bg-green-200 px-2 rounded-full">
                                                                {user.phone}
                                                            </span>
                                                        </div>
                                                    </td>
                                                    <td className="font-medium text-left capitalize px-6 py-4">{user.dob.age}</td>
                                                    <td className="font-medium text-left capitalize px-6 py-4">
                                                        <button className="font-semibold tracking-wide px-2 text-white bg-cyan-500 rounded-full" onClick={() => handleEditClick(user)}>
                                                            edit
                                                        </button>
                                                    </td>
                                                </>
                                            )}
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <div className="text-center my-10">
                {loading && page > 1 ? <p>Loading more...</p> : <button className="px-3 py-1 bg-red-800 text-red-300" onClick={handleLoadMoreClick}>Load More</button>}

            </div>

        </>
    )
}

export default TableUsers