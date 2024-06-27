import styled from 'styled-components'

export const ContatoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  margin: 10px auto;
  width: 50%;
  background-color: #c0c0c0;
  border-radius: 8px;
`

export const ContatoItem = styled.div`
  margin: 5px 0;
`

export const ContatoLabel = styled.span`
  font-weight: bold;
`

export const ContatoInput = styled.input`
  padding: 8px;
  margin: 2px;
`

export const BotaoAdicionar = styled.button`
  margin-left: 5px;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: #09b1bd;
  color: #fff;
  border-radius: 6px;
  border: none;
`
export const BotaoEditar = styled.button`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: #e3630e;
  color: #fff;
  border-radius: 6px;
  border: none;
`

export const BotaoDeletar = styled.button`
  margin-left: 5px;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: #bd0c09;
  color: #fff;
  border-radius: 6px;
  border: none;
`

export const BotaoSalvarEdicao = styled.button`
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: #1bd127;
  color: #fff;
  border-radius: 6px;
  border: none;
`
