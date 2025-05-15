import {atom} from 'recoil';
import { IEvento } from '../interfaces/IEvento';
import { IFiltroDeEventos } from '../interfaces/IFiltroDeEventos';

export const listaDeEventosState = atom<IEvento[]>({
    key: 'listaDeEventosState',
    default: [{
            "descricao": "Estudar React",
            "inicio": new Date("2025-05-09T01:49"),
            "fim": new Date("2025-05-09T05:49"),
            "completo": false,
            "id": 1642342747
        },
        {
            "descricao": "Estudar Recoil",
            "inicio": new Date("2025-05-08T03:16"),
            "fim": new Date("2025-05-08T06:16"),
            "completo": false,
            "id": 1642342959
        }
    ]
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
    key: 'filtroDeEventos',
    default: {}
})