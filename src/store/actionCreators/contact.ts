import {ContactAction, ContactActionTypes} from "../../types/contact";
import {Dispatch} from "@reduxjs/toolkit";
import axios from "axios";
import {url} from "./url";

export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({type: ContactActionTypes.FETCH_CONTACTS});
      const response = await axios.get(`${url}/contacts`);
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_ERROR,
        payload: 'Error occurred while contacts fetching',
      });
    }
  }
}

export const addContact = (surname: string, name: string) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({type: ContactActionTypes.ADD_CONTACT});
      const response = await axios.post(`${url}/contacts`, {
        params: {_surname: surname, _name: name},
      });
      dispatch({
        type: ContactActionTypes.ADD_CONTACT_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: ContactActionTypes.ADD_CONTACT_ERROR,
        payload: 'Error occurred while contact adding',
      });
    }
  }
}

export const editContact = (id: number, surname: string, name: string) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({type: ContactActionTypes.EDIT_CONTACT});
      const response = await axios.put(`${url}/contacts`, {
        params: {_id: id, _surname: surname, _name: name},
      });
      dispatch({
        type: ContactActionTypes.EDIT_CONTACT_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: ContactActionTypes.EDIT_CONTACT_ERROR,
        payload: 'Error occurred while contact editing',
      });
    }
  }
}

export const deleteContact = (id: number) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({type: ContactActionTypes.DELETE_CONTACT});
      const response = await axios.delete(`${url}/contacts`, {
        params: {_id: id},
      });
      dispatch({
        type: ContactActionTypes.DELETE_CONTACT_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      dispatch({
        type: ContactActionTypes.DELETE_CONTACT_ERROR,
        payload: 'Error occurred while contact deleting',
      });
    }
  }
}
