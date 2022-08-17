export interface Contact {
  id: number;
  surname: string;
  name: string;
}

export interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: null | string;
}

export enum ContactActionTypes {
  FETCH_CONTACTS = 'FETCH_CONTACTS',
  FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
  FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
  ADD_CONTACT = 'ADD_CONTACT',
  ADD_CONTACT_SUCCESS = 'ADD_CONTACT_SUCCESS',
  ADD_CONTACT_ERROR = 'ADD_CONTACT_ERROR',
  EDIT_CONTACT = 'EDIT_CONTACT',
  EDIT_CONTACT_SUCCESS = 'EDIT_CONTACT_SUCCESS',
  EDIT_CONTACT_ERROR = 'EDIT_CONTACT_ERROR',
  DELETE_CONTACT = 'DELETE_CONTACT',
  DELETE_CONTACT_SUCCESS = 'DELETE_CONTACT_SUCCESS',
  DELETE_CONTACT_ERROR = 'DELETE_CONTACT_ERROR',
}

interface FetchContactsAction {
  type: ContactActionTypes.FETCH_CONTACTS;
}

interface FetchContactsSuccessAction {
  type: ContactActionTypes.FETCH_CONTACTS_SUCCESS;
  payload: Contact[];
}

interface FetchContactsErrorAction {
  type: ContactActionTypes.FETCH_CONTACTS_ERROR;
  payload: string;
}

interface AddContactAction {
  type: ContactActionTypes.ADD_CONTACT;
}

interface AddContactActionSuccessAction {
  type: ContactActionTypes.ADD_CONTACT_SUCCESS;
  payload: Contact;
}

interface AddContactActionErrorAction {
  type: ContactActionTypes.ADD_CONTACT_ERROR;
  payload: string;
}

interface EditContactAction {
  type: ContactActionTypes.EDIT_CONTACT;
}

interface EditContactActionSuccessAction {
  type: ContactActionTypes.EDIT_CONTACT_SUCCESS;
  payload: Contact;
}

interface EditContactActionErrorAction {
  type: ContactActionTypes.EDIT_CONTACT_ERROR;
  payload: string;
}

interface DeleteContactAction {
  type: ContactActionTypes.DELETE_CONTACT;
}

interface DeleteContactActionSuccessAction {
  type: ContactActionTypes.DELETE_CONTACT_SUCCESS;
  payload: number;
}

interface DeleteContactActionErrorAction {
  type: ContactActionTypes.DELETE_CONTACT_ERROR;
  payload: string;
}

export type ContactAction =
  FetchContactsAction
  | FetchContactsSuccessAction
  | FetchContactsErrorAction
  | AddContactAction
  | AddContactActionSuccessAction
  | AddContactActionErrorAction
  | EditContactAction
  | EditContactActionSuccessAction
  | EditContactActionErrorAction
  | DeleteContactAction
  | DeleteContactActionSuccessAction
  | DeleteContactActionErrorAction;
