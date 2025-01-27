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
        "areaAtuacao": [2, 5, 6, 4], 
        "link": "https://gabrielaraujomkt.my.canva.site", 
        "habilidades": ["Roteirista", "Editor", "Pesquisador de mercado", "Planejamento estratégico", "Criação de conteúdos mobile"], 
        "foto": "/assets/pictures/GABRIEL_ARAUJO.JPG"
    },
    {
        "nome": "Luz Barbosa", 
        "areaAtuacao": [1, 2, 5], 
        "link": "https://drive.google.com/drive/folders/1-MH6nE3rVOdOFT7-f9-Ydi6cPsHLr3WM", 
        "habilidades": ["Produtora", "Diretora de arte", "Social media", "Fotógrafa"], 
        "foto": "/assets/pictures/LUZ_BARBOSA.jpg"
    },
    {
        "nome": "Pedro Sampaio", 
        "areaAtuacao": [1, 2], 
        "link": "https://drive.google.com/file/d/1zAkrSQUdBRVMzTbMBf2Lvvp_EUgZyb0t/view?usp=drive_link", 
        "habilidades": ["Fotógrafo", "Editor de fotos e vídeos", "Diretor de arte"], 
        "foto": "/assets/pictures/PEDRO_SAMPAIO.jpg"
    },
    {
        "nome": "Ivan Pereira", 
        "areaAtuacao": [1, 2, 5, 6], 
        "link": "https://www.canva.com/design/DAGcH6IB-Gk/9xXM9f-SUEfCwg6RATNksA/edit", 
        "habilidades": ["Gaffer", "Produtor", "Filmmaker", "Operador de câmera"], 
        "foto": "/assets/pictures/exterminadorDoFuturo.jpg"
    },
    {
        "nome": "Ray Santos", 
        "areaAtuacao": [1, 5, 6], 
        "link": "https://www.behance.net/rayanesantos47", 
        "habilidades": ["Social media", "Fotógrafo", "Editor"], 
        "foto": "/assets/pictures/RAY_SOUZA.jpg"
    },
    {
        "nome": "Dornelles", 
        "areaAtuacao": [1, 2, 5], 
        "link": "https://www.canva.com/design/DAGc-ZI-LJY/lzp9p5i2vZutKiDAlLtDDg/edit", 
        "habilidades": ["Filmmaker", "Social Media", "Direção"], 
        "foto": "/assets/pictures/Dorneles.JPG"
    },
    {
        "nome": "Andy Black", 
        "areaAtuacao": [1, 2, 5], 
        "link": "https://www.behance.net/theandyblack", 
        "habilidades": ["Videomaker", "Editora", "Pilota de drone"], 
        "foto": "/assets/pictures/ANDY_BLACK.jpg"
    },
    {
        "nome": "DHARA ANDRADE", 
        "areaAtuacao": [2, 5], 
        "link": "https://drive.google.com/file/d/1Pz6pOjFpM0zW59kngFPWYv-i6vWVNjkE/view?usp=drive_link", 
        "habilidades": ["Produtora", "Social Media"], 
        "foto": "/assets/pictures/exterminadorDoFuturo.jpg"
    },
    {
        "nome": "VITOR ALMEIDA", 
        "areaAtuacao": [1, 6], 
        "link": "https://drive.google.com/file/d/1-8vU6U9A4fis37Ci6ZqaI25Vst1vJXTO/view?usp=drive_link", 
        "habilidades": ["Fotógrafo", "Filmmaker", "Editor de vídeos"], 
        "foto": "/assets/pictures/exterminadorDoFuturo.jpg"
    },
    {
        "nome": "DEBRITAS", 
        "areaAtuacao": [1, 2, 4], 
        "link": "https://drive.google.com/file/d/1GqwpoLjQy5-qZnwjzqMLiqfXDxGSHQE7/view?usp=sharing", 
        "habilidades": ["Social Media", "Fotógrafa", "Diretora de Arte"], 
        "foto": "/assets/pictures/Debritas.jpg"
    },
    {
        "nome": "MAR ZENIN", 
        "areaAtuacao": [1, 2, 3], 
        "link": "https://marzenin.myportfolio.com/", 
        "habilidades": ["DOP", "Operação de Câmera", "Gaffer", "Colorista"], 
        "foto": "/assets/pictures/Mar_Zenin.JPG"
    },
    {
        "nome": "RARE ODIN", 
        "areaAtuacao": [1, 2, 6], 
        "link": "https://www.behance.net/rareodin", 
        "habilidades": ["Editor de Video", "Op de Camera", "Diretor de Video Clip"], 
        "foto": "/assets/pictures/RARE_ODIN.jpg"
    },
    {
        "nome": "LEANDRA BARROS", 
        "areaAtuacao": [1, 2], 
        "link": "https://drive.google.com/file/d/1dYNn4nQPKQSBVtD20Wq4j62bW2SriOc5/view?usp=drive_link", 
        "habilidades": ["Fotografia", "Roteiro", "Produção"], 
        "foto": "/assets/pictures/exterminadorDoFuturo.jpg"
    },
    {
        "nome": "JULIANA BITENCOURT", 
        "areaAtuacao": [2, 5], 
        "link": "https://www.behance.net/gallery/217488437/Portfolio-Juliana-Bitencourt", 
        "habilidades": ["Produção", "Comunicação"], 
        "foto": "/assets/pictures/exterminadorDoFuturo.jpg"
    },
    {
        "nome": "GUILHERME CALAFATE", 
        "areaAtuacao": [3], 
        "link": "https://drive.google.com/file/d/1MXTPj2_4086pELfUVr4BQE2jTD0NgIzO/view?usp=sharing", 
        "habilidades": ["Produção Musical", "Edição de Áudio", "Sound Effects"], 
        "foto": "/assets/pictures/GUILHERME_CALAFATE.JPG"
    },
    {
        "nome": "ESTEVÃO LIMA", 
        "areaAtuacao": [4, 6], 
        "link": "https://www.canva.com/design/DAGc9-qppH0/Ja_UK1ZWzdg8hBTLD8pleQ/edit?utm_content=DAGc9-qppH0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", 
        "habilidades": ["Ilustrador", "I.A"], 
        "foto": "/assets/pictures/ESTEVAO_LIMA.jpg"
    },
    {
        "nome": "CARLOS HENRIQUE", 
        "areaAtuacao": [1, 6], 
        "link": "https://carloskahique.wixsite.com/audiovisualch", 
        "habilidades": ["Editor de vídeos", "Filmmaker"], 
        "foto": "/assets/pictures/CARLOS_HENRIQUE.jpg"
    },
    {
        "nome": "WINNIE", 
        "areaAtuacao": [5, 2], 
        "link": "https://drive.google.com/file/d/1EpyOs9y58D_C-CoclzfEpiCu2jLsOWul/view?usp=drivesdk", 
        "habilidades": ["Comunicação", "Direção de Arte"], 
        "foto": "/assets/pictures/WINNIE.jpg"
    },
    {
        "nome": "VZ DA GAIA", 
        "areaAtuacao": [1, 2, 6], 
        "link": "https://www.canva.com/design/DAGIrvn5QwA/WHwtHa7yxeOos4vpx7NO6w/edit", 
        "habilidades": ["Fotógrafa", "Filmmaker", "Editora"], 
        "foto": "/assets/pictures/VZ_DA_GAIA.JPG"
    },
    {
        "nome": "GABRIEL PEREIRA", 
        "areaAtuacao": [1, 6], 
        "link": "https://www.behance.net/Gabrielperf7d2", 
        "habilidades": ["Editor", "Fotografia", "Filmmaker"], 
        "foto": "/assets/pictures/GABRIEL_PEREIRA.jpg"
    },
    {
        "nome": "ERICKAO", 
        "areaAtuacao": [1, 6], 
        "link": "https://drive.google.com/file/d/1du4JfBcVcnKXtKIG3rKVecMYOhrmL-Mw/view?usp=drivesdk", 
        "habilidades": ["Fotografia", "Edição"], 
        "foto": "/assets/pictures/ERICKAO.jpg"
    },
    {
        "nome": "JOSEFFER NASCIMENTO", 
        "areaAtuacao": [1, 5, 4], 
        "link": "https://drive.google.com/file/d/1kBz9nRs9awzwuvHvaQNa0tL3HatxO34u/view?usp=drivesdk", 
        "habilidades": ["Ator", "Roteirista", "Fotógrafo"], 
        "foto": "/assets/pictures/JOSEFFER_NASCIMENTOS.jpg"
    },
    {
        "nome": "HELENA BARBOSA", 
        "areaAtuacao": [1, 6, 2], 
        "link": "https://www.canva.com/design/DAGbppKCQsM/JQZPkqOwU5egEKKYbvD16g/edit", 
        "habilidades": ["Filmmaker", "Edição", "Direção de Arte"], 
        "foto": "/assets/pictures/HELENA.jpg"
    },
    {
        "nome": "LEANDRO SERRANO", 
        "areaAtuacao": [1, 6], 
        "link": "https://ftwagencia.com.br/portifolio/", 
        "habilidades": ["Operador de Câmera e Drone", "Filmmaker", "Fotógrafo", "Editor"], 
        "foto": "/assets/pictures/exterminadorDoFuturo.jpg"
    },
    {
        "nome": "Paulo D Souza", 
        "areaAtuacao": [2, 4, 3],
        "link": "https://drive.google.com/file/d/1hev8HTGlLGyR0ZxJJMozyjwimbfYpLxU/view?usp=drivesdk",
        "habilidades": ["Produtor", "Áudio", "Ator"],
        "foto": "/assets/pictures/PAULO_D_SOUZA.JPG"
    },
    {
        "nome": "João Victor", 
        "areaAtuacao": [2, 4],
        "link": "https://www.canva.com/design/DAGc-BDFu9M/rG82Gu639Gbj84itiB8FWA/view?utm_content=DAGc-BDFu9M&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc5d6f00a6e",
        "habilidades": ["Ilustrador", "Roteirista"],
        "foto": "/assets/pictures/exterminadorDoFuturo.jpg"
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