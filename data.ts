export interface IEmployee {
    nome: string,
    areaAtuacao: number[],
    link: string,
    habilidades: string[],
    foto: string
}

const employees: IEmployee[] = [
    {
        "nome": "Gabriel Araújo",
        "areaAtuacao": [1, 2],
        "link": "https://gabrielaraujomkt.my.canva.site",
        "habilidades": ["tag1", "tag2"],
        "foto": "/assets/exterminadorDoFuturo.jpg"
    },
    {
        "nome": "Luz Barbosa",
        "areaAtuacao": [3],
        "link": "https://drive.google.com/drive/folders/1-MH6nE3rVOdOFT7-f9-Ydi6cPsHLr3WM",
        "habilidades": ["tag1"],
        "foto": "/assets/eu.jpg"
    }
]

const cards = [
    {
        name: 'FILMAGEM E FOTOGRAFIA',
        img: '/assets/video.png',
        id: 1
    },
    {
        name: 'PRODUÇÃO E DIREÇÃO',
        img: '/assets/cadeira-diretor.png',
        id: 2
    },
    {
        name: 'SOM E ÁUDIO',
        img: '/assets/sound-waves.png',
        id: 3
    },
    {
        name: 'ARTE E DESIGN',
        img: '/assets/design-grafico.png',
        id:4
    },
    {
        name: 'COMUNICAÇÃO E MARKETING',
        img: '/assets/comunicacao.png',
        id: 5
    },
    {
        name: 'EDIÇÃO E PÓS-PRODUÇÃO',
        img: '/assets/ferramenta-de-corte.png',
        id: 6
    },
]

export {employees, cards}