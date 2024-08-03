// src/components/MyForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
    // Estado para controlar los valores del formulario
    const [name, setName] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(""); 

    // Función que maneja el envío del formulario
    const onSubmitHandler = e => {
        // Evita que el formulario se envíe de manera tradicional
        e.preventDefault();

        // Realiza una solicitud POST a la API para enviar los datos del formulario
        axios.post('http://localhost:8000/api/products', {
            name,
            price,
            description
        })
            .then(res => console.log(res)) // Muestra la respuesta en la consola
            .catch(err => console.log(err)); // Muestra el error en la consola si ocurre
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                {/* Campo para ingresar el nombre con su valor controlado */}
                <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Price</label><br/>
                {/* Campo para ingresar el precio con su valor controlado */}
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                {/* Campo para ingresar la descripción con su valor controlado */}
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>
            </p>
            {/* Botón de envío del formulario */}
            <input type="submit"/>
        </form>
    );
}

export default ProductForm;
