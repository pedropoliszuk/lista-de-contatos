import { ContatoContainer, ContatoItem, ContatoLabel } from './styles'

interface ContatoProps {
  id: number
  nome: string
  telefone: string
  email: string
  onEdit: (id: number) => void
  onDelete: (id: number) => void
}

const Contato: React.FC<ContatoProps> = ({
  id,
  nome,
  telefone,
  email,
  onEdit,
  onDelete
}) => {
  return (
    <ContatoContainer>
      <ContatoItem>
        <ContatoLabel>Nome:</ContatoLabel>
        {nome}
      </ContatoItem>
      <ContatoItem>
        <ContatoLabel>Telefone:</ContatoLabel>
        {telefone}
      </ContatoItem>
      <ContatoItem>
        <ContatoLabel>E-mail:</ContatoLabel>
        {email}
      </ContatoItem>
    </ContatoContainer>
  )
}

export default Contato
