import React from "react";


export default function Welcome(){
    return(
        <div className="min-h-screen w-full flex flex-col items-center justify-center text-center bg-gray-500 space-y-10">
            <h1 className="m-10 text-6xl font-bold">Bem vindo <span className="text-blue-300">Inventory</span> </h1>
            <p className="text-2xl">Este é um Website de inventário com login obrigatório permite que os usuários acessem e gerenciem inventários de forma segura e organizada.
            Caso não tenha cadatro vai em "Registrar".</p>
            <div className="space-y-7 flex flex-col">
                <button className="bg-gray-400 rounded-lg w-96 h-14 text-white font-bold hover:opacity-75">Login ➡️</button>
                <button className="bg-gray-400 rounded-lg w-96 h-14 text-white font-bold hover:opacity-75">Registra ➕</button>
            </div>
        </div>
        
    )
}