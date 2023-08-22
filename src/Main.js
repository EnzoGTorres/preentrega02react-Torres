import React from 'react'
import {Route, Routes} from "from react-router-dom"

function Main() {
    return (
        <Routes>
            <Route path="/" element={<p>Home</p>}/>
            <Route path="/prod:id" element={<p>Productos</p>}/>
            <Route path="/carritos" element={<p>Carrito</p>}/>
        </Routes>
    )

}

export default Main