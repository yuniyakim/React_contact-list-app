import {ContactAction, ContactActionTypes, ContactState} from "../../types/contact";
import contacts from "../../components/Contacts";

const initialState: ContactState = {
  contacts: [],
  filteredContacts: [],
  loading: false,
  error: null,
}

export const contactReducer = (state = initialState, action: ContactAction): ContactState => {
  switch (action.type) {
    case ContactActionTypes.FETCH_CONTACTS: {
      return {...state, loading: true, error: null};
    }
    case ContactActionTypes.FETCH_CONTACTS_SUCCESS: {
      return {...state, loading: false, contacts: action.payload, filteredContacts: action.payload};
    }
    case ContactActionTypes.FETCH_CONTACTS_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    case ContactActionTypes.ADD_CONTACT: {
      return {...state, loading: true, error: null};
    }
    case ContactActionTypes.ADD_CONTACT_SUCCESS: {
      return {...state, loading: false, contacts: [...state.contacts, action.payload]};
    }
    case ContactActionTypes.ADD_CONTACT_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    case ContactActionTypes.EDIT_CONTACT: {
      return {...state, loading: true, error: null};
    }
    case ContactActionTypes.EDIT_CONTACT_SUCCESS: {
      return {...state, loading: false, contacts: state.contacts.map(contact => contact.id === action.payload.id ? action.payload : contact)};
    }
    case ContactActionTypes.EDIT_CONTACT_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    case ContactActionTypes.DELETE_CONTACT: {
      return {...state, loading: true, error: null};
    }
    case ContactActionTypes.DELETE_CONTACT_SUCCESS: {
      return {...state, loading: false, contacts: state.contacts.filter(contact => contact.id !== action.payload)};
    }
    case ContactActionTypes.DELETE_CONTACT_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    case ContactActionTypes.SEARCH_CONTACT: {
      return {...state, loading: true, error: null};
    }
    case ContactActionTypes.SEARCH_CONTACT_SUCCESS: {
      if (action.payload === '') {
        return {...state, loading: false, filteredContacts: state.contacts};
      }
      return {...state, loading: false, filteredContacts: state.contacts.filter(contact =>
          contact.surname.toLowerCase().includes(action.payload.toLowerCase()) || contact.name.toLowerCase().includes(action.payload.toLowerCase()))};
    }
    case ContactActionTypes.SEARCH_CONTACT_ERROR: {
      return {...state, loading: false, error: action.payload};
    }
    default: {
      return state;
    }
  }
}
