import React from 'react'

const UserInfo = ({ label, value }) => (
    <div className="px-4 md:px-6 py-2 md:py-3">
        <h1 className="text-zinc-600">{label}</h1>
        <p>{value}</p>
    </div>
);

export default UserInfo