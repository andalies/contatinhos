import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Contact = {
  id: number
  name: string
  email: string
  phone: string
}

type ContactsState = {
  contacts: Contact[]
  editingId: number | null
}

const initialState: ContactsState = {
  contacts: [],
  editingId: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action: PayloadAction<Omit<Contact, 'id'>>) {
      const newContact = { ...action.payload, id: Date.now() }
      state.contacts.push(newContact)
    },
    updateContact(state, action: PayloadAction<Contact>) {
      const index = state.contacts.findIndex(c => c.id === action.payload.id)
      if (index !== -1) {
        state.contacts[index] = action.payload
      }
    },
    removeContact(state, action: PayloadAction<number>) {
      state.contacts = state.contacts.filter(c => c.id !== action.payload)
    },
    setEditingId(state, action: PayloadAction<number | null>) {
      state.editingId = action.payload
    },
  }
})

export const { addContact, updateContact, removeContact, setEditingId } = contactsSlice.actions

export default contactsSlice.reducer
