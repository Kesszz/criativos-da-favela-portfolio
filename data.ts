export interface IEmployee {
    nome: string,
    areaAtuacao: string[],
    link: string,
    habilidades: string[],
    foto: string
}

const employees: IEmployee[] = [
    {
        "nome": "Gabriel Araújo",
        "areaAtuacao": ["XXX", "YYY"],
        "link": "https://gabrielaraujomkt.my.canva.site",
        "habilidades": ["tag1", "tag2"],
        "foto": "/assets/exterminadorDoFuturo.jpg"
    },
    {
        "nome": "Luz Barbosa",
        "areaAtuacao": ["XXX"],
        "link": "https://drive.google.com/drive/folders/1-MH6nE3rVOdOFT7-f9-Ydi6cPsHLr3WM",
        "habilidades": ["tag1"],
        "foto": "/assets/eu.jpg"
    }
]


export {employees}