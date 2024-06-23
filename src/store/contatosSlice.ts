import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface ContatoType {
  id: number;
  nome: string;
  telefone: string;
  email: string;
}

interface ContatosState {
  listaContatos: ContatoType[];
  contatoSelecionado: ContatoType | null;
}

const initialState: ContatosState = {
  listaContatos: [],
  contatoSelecionado: null,
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    adicionarContato: (state, action: PayloadAction<ContatoType>) => {
      state.listaContatos.push(action.payload);
    },
    deletarContato: (state, action: PayloadAction<number>) => {
      state.listaContatos = state.listaContatos.filter(cont => cont.id !== action.payload)
    },
    editarContato: (state, action: PayloadAction<ContatoType>) => {
      const index = state.listaContatos.findIndex(cont => cont.id === action.payload.id)
      if (index !== -1) {
        state.listaContatos[index] = action.payload;
      }
    },
    selecionarContato: (state, action: PayloadAction<ContatoType | null>) => {
      state.contatoSelecionado = action.payload;
    }
  }
})

export const { adicionarContato, deletarContato, editarContato, selecionarContato } = contatosSlice.actions
export default contatosSlice.reducer
