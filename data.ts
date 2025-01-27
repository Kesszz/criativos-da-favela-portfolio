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


export {employees}