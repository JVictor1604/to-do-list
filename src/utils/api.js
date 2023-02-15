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
      },

    getAllAtividades: async () => {
        const response = await fetch(`${baseUrl}/atividades`)
        const allAtividades = response.json()
        return allAtividades;
    },

    getAtividadeById: async (id) => {
      const response = await fetch(`${baseUrl}/atividades/${id}`);
      const atividade = response.json();
      return atividade;
    }
    
  

}