const baseUrl = "http://localhost:4000";

export const api = {

  createAtividade: async (atividade) => {
    const response = await fetch(`${baseUrl}/atividades`, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(atividade),
    });

    const newAtividade = await response.json();

    return newAtividade;
  } ,

  updateAtividade: async (id, atividade) => {

    const response = await fetch(`${baseUrl}/atividades/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(atividade)
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

    const updatedAtividade = await response.json();

    return updatedAtividade;
  },

  deleteAtividade: async (id) => {

    return await fetch(`${baseUrl}/atividades/${id}`,

      {
        method: 'DELETE',

      }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));

  },

  getAtividadeById: async (id) => {
    const response = await fetch(`${baseUrl}/atividades/${id}`);
    const atividade = response.json();
    return atividade;
  },

  getAllAtividades: async () => {
    const response = await fetch(`${baseUrl}/atividades`)
    const allAtividades = response.json()
    return allAtividades;
  }

}

