
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  addContact,
  updateContact,
  removeContact,
  setEditingId,
} from './store/contactsSlice'
import type { RootState, AppDispatch } from './store'
import {
  GlobalStyle,
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  ContactList,
  ContactItem,
  ContactCard,
  ButtonGroup,
  SmallButton
} from './styles'


type Contact = {
  id: number
  name: string
  email: string
  phone: string
}

const App = () => {
  const dispatch = useDispatch<AppDispatch>()
  const contacts = useSelector((state: RootState) => state.contacts.contacts)
  const editingId = useSelector((state: RootState) => state.contacts.editingId)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  useEffect(() => {
    if (editingId !== null) {
      const contact = contacts.find(c => c.id === editingId)
      if (contact) {
        setName(contact.name)
        setEmail(contact.email)
        setPhone(contact.phone)
      }
    } else {
      // Clear form when not editing
      setName('')
      setEmail('')
      setPhone('')
    }
  }, [editingId, contacts])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name || !email || !phone) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    if (editingId !== null) {
      dispatch(updateContact({ id: editingId, name, email, phone }))
      dispatch(setEditingId(null))
    } else {
      dispatch(addContact({ name, email, phone }))
    }

    setName('')
    setEmail('')
    setPhone('')
  }

  function handleEdit(contactId: number) {
    dispatch(setEditingId(contactId))
  }

  function handleRemove(contactId: number) {
    dispatch(removeContact(contactId))
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Meus Contatinhos</Title>

        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Nome</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </FormGroup>

          <FormGroup>
            <Label>Telefone</Label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
          </FormGroup>

          <Button type="submit">
            {editingId !== null ? 'Salvar Alterações' : 'Adicionar Contato'}
          </Button>
        </form>

        <ContactList>
        {contacts.map(contact => (
          <ContactCard key={contact.id}>
            <p><strong>Nome:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Telefone:</strong> {contact.phone}</p>
            <ButtonGroup>
              <SmallButton onClick={() => handleEdit(contact.id)}>Editar</SmallButton>
              <SmallButton onClick={() => handleRemove(contact.id)}>Remover</SmallButton>
            </ButtonGroup>
          </ContactCard>
        ))}
      </ContactList>
      </Container>
    </>
  )
}

export default App
