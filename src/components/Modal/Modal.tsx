import React from 'react'
import './Modal.css'
import Title from '../Title/Title'
export default function Modal(props: {isOpen: boolean, children: React.ReactNode}) {
    if(props.isOpen){
        return (
            <div className="modal">
                <div className="modal-content">
                    <Title>Cadastrar Filme</Title>
                    {props.children}
                </div>
            </div>
        )
    }
    else{
        return null
    }
}
