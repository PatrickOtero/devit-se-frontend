"use client";

//import { ChangeEvent, useState } from "react";
import "./style.css";


export const Table = ({ data }: any) => {

    console.log(data)

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Vaga</th>
                        <th scope="col">Data de candidatura</th>
                        <th scope="col">Status</th>

                    </tr>
                </thead>
                {data.map((item: any, index: any) => {
                    return (
                        <tbody>
                            <tr key={index}>
                                <td data-label="Cliente">{item.vagas}</td>
                                <td data-label="Assunto">{item.data}</td>
                                <td data-label="Cadastrado">{item.status}</td>
                            </tr>
                        </tbody>
                    )
                })

                }
            </table>
        </div>
    );
};