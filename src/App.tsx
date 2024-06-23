import { useState } from "react";
import EstiloGlobal, { AppContainer } from "./styles";
import { BotaoEditar, BotaoDeletar, BotaoAdicionar, BotaoSalvarEdicao, ContatoInput } from "./components/Contato/styles"
import Contato from "./components/Contato";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { adicionarContato, deletarContato, editarContato, selecionarContato } from "./store/contatosSlice";

function App() {
  const dispatch = useDispatch();
  const { listaContatos, contatoSelecionado } = useSelector((state: RootState) => state.contatos)

  const [contato, setContato] = useState({ id: listaContatos.length + 1, nome: '', telefone: '', email: ''})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, estaEditando: boolean) => {
    const { name, value } = e.target;
    if (estaEditando && contatoSelecionado) {
      dispatch(selecionarContato({ ...contatoSelecionado, [name]: value }))
    } else {
      setContato({ ...contato, [name]: value })
    }
  }

  const adicionarContatoHandler = () => {
    if (contato.nome && contato.telefone && contato.email) {
      dispatch(adicionarContato({ ...contato, id: listaContatos.length + 1}))
      setContato({ id: listaContatos.length + 2, nome: '', telefone: '', email: '' })
    } else {
      alert('Por favor, preencha todos os campos do contato.')
    }
  }

  const deletarContatoHandler = (id: number) => {
    dispatch(deletarContato(id))
  }

  const editarContatoHandler = (id: number) => {
    const contatoEditando = listaContatos.find((cont) => cont.id === id);
    if (contatoEditando) {
      dispatch(selecionarContato(contatoEditando))
    } else {
      alert('Contato não encontrado.')
    }
  }

  const salvarEdicaoHandler = () => {
    if (contatoSelecionado) {
      dispatch(editarContato(contatoSelecionado))
      dispatch(selecionarContato(null))
    }
  }

  return (
    <>
    <EstiloGlobal />
    <AppContainer>
      <h1>Lista de contatos</h1>
      <div>
        <ContatoInput type="text" name="nome" placeholder="Nome completo" value={contato.nome} onChange={(e) => handleInputChange(e, false)} />
        <ContatoInput type="text" name="telefone" placeholder="Telefone" value={contato.telefone} onChange={(e) => handleInputChange(e, false)} />
        <ContatoInput type="email" name="email" placeholder="Email" value={contato.email} onChange={(e) => handleInputChange(e, false)} />
        <BotaoAdicionar onClick={adicionarContatoHandler}>Adicionar contato</BotaoAdicionar>
      </div>
      <div>
        {listaContatos.map((cont) => (
          <div key={cont.id}>
            <Contato id={cont.id} nome={cont.nome} telefone={cont.telefone} email={cont.email} onDelete={deletarContatoHandler} onEdit={editarContatoHandler} />
            <BotaoEditar onClick={() => editarContatoHandler(cont.id)}>Editar</BotaoEditar>
            <BotaoDeletar onClick={() => deletarContatoHandler(cont.id)}>Deletar</BotaoDeletar>
          </div>
        ))}
      </div>
      {contatoSelecionado && (
        <div>
          <h2>Editar Contato</h2>
          <ContatoInput type="text" name="nome" placeholder="Nome completo" value={contatoSelecionado.nome} onChange={(e) => handleInputChange(e, true)} />
          <ContatoInput type="text" name="telefone" placeholder="Telefone" value={contatoSelecionado.telefone} onChange={(e) => handleInputChange(e, true)} />
          <ContatoInput type="email" name="email" placeholder="Email" value={contatoSelecionado.email} onChange={(e) => handleInputChange(e, true)} />
          <BotaoSalvarEdicao onClick={salvarEdicaoHandler}>Salvar Edição</BotaoSalvarEdicao>
          <BotaoDeletar onClick={() => dispatch(selecionarContato(null))}>Cancelar</BotaoDeletar>
        </div>
      )}
    </AppContainer>
    </>
  );
}

export default App;
