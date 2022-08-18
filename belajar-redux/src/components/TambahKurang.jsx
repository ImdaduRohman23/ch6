import React, { useState } from 'react'

const TambahKurang = () => {
    const[tambah, setTambah] = useState('');

    const handleTambah = () => {
        setTambah('Tambah')
    }

    const handleKurang = () => {
        setTambah('Kurang')
    }

    return (
        <div>
            <h1>Cek</h1>
            <button onClick={handleTambah}>Tambah</button>
            <button onClick={handleKurang}>Kurang</button>
            <h2>{tambah}</h2>
        </div>
    )
}

export default TambahKurang
