const formatDate = date => date.toISOString().split('T')[0];

const dataHoje = formatDate(new Date());
const dataPlusFive = formatDate(new Date(Date.now() + 4 * 24 * 60 * 60 * 1000));
const databaseDemo = [
  {
    "alunas": 
      {
        "id_aluna": 1,
        "mat_aluna": "123456789012",
        "nome_aluna": "Fox Student",
        "email": "foxstudent@gmail.com",
        "password": "*******"
      },
  },
  {
    "professoras": 
    {
        "id_professora": 1,
        "mat_professora": "0000000",
        "nome_professora": "Professora Fox",
        "email": "proffox@gmail.com",
        "perfil_gestora": "Sim",
        "password": "*******"
    }
  },
  {
    "encontros": [
      {
        "id_encontro": "1",
        "titulo_encontro": "Genética",
        "componente_curricular": "Biologia",
        "descricao_encontro":"Compreender a divisão dos grupos de seres vivos e os seus processos de adaptação.",
        "criterios_avaliacao":"Avaliações",
        "sala":"Bloco B - 206",
        "num_vagas":"20",
        "data_inicio": dataHoje,
        "hora_inicio":"19:00",
        "hora_fim":"21:40",
        "repete":"Não",
        "nome_professora": "Professora Fox",
        "area":""
      },
      {
        "id_encontro": "2",
        "titulo_encontro": "Substância Moleculares",
        "componente_curricular": "Química",
        "descricao_encontro":"Identificar as características das substâncias moleculares e a ligação covalente.",
        "criterios_avaliacao":"Seminários",
        "sala":"Bloco A - 202",
        "num_vagas":"12",
        "data_inicio": dataHoje,
        "hora_inicio":"14:00",
        "hora_fim":"17:40",
        "repete":"Não",
        "nome_professora": "Professora Fox",
        "area":""
      }
    ]
  },
    {
    "encontrosInscrito": [
      {
        "id_inscricao": "3",
        "titulo_encontro": "Genética",
        "componente_curricular": "Biologia",
        "descricao_encontro":"Compreender a divisão dos grupos de seres vivos e os seus processos de adaptação.",
        "criterios_avaliacao":"Avaliações",
        "sala":"Bloco B - 206",
        "num_vagas":"20",
        "data_inicio": dataHoje,
        "hora_inicio":"19:00",
        "hora_fim":"21:40",
        "repete":"Não",
        "nome_professora": "Professora Fox",
        "area":""
      },
      {
        "id_encontro": "4",
        "titulo_encontro": "Substância Moleculares",
        "componente_curricular": "Química",
        "descricao_encontro":"Identificar as características das substâncias moleculares e a ligação covalente.",
        "criterios_avaliacao":"Seminários",
        "sala":"Bloco A - 202",
        "num_vagas":"12",
        "data_inicio": dataPlusFive,
        "hora_inicio":"14:00",
        "hora_fim":"17:40",
        "repete":"Não",
        "nome_professora": "Professora Fox",
        "area":""
      }
    ]
  },
    {
    "encontrosHoje": [
      {
        "id_inscricao": "5",
        "titulo_encontro": "Estequiométria",
        "componente_curricular": "Química",
        "descricao_encontro":"Realizar cálculos estequiométricos.",
        "criterios_avaliacao":"Atividades",
        "sala":"Bloco A - 210",
        "num_vagas":"10",
        "data_inicio": dataHoje,
        "hora_inicio":"19:00",
        "hora_fim":"21:40",
        "repete":"Não",
        "nome_professora": "Professora Fox",
        "area":""
      },

    ]
  },
  
]


export default databaseDemo;
