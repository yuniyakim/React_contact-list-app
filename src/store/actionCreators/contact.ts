import {Contact, ContactAction, ContactActionTypes} from "../../types/contact";
import {Dispatch} from "@reduxjs/toolkit";
import axios, {AxiosError} from "axios";
import {url} from "./url";

export const fetchContacts = (userId: number | null, token: string | null) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({type: ContactActionTypes.FETCH_CONTACTS});
      const response = await axios.get(`${url}/user/${userId}/contacts`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_SUCCESS,
        payload: (response.data as Contact[]),
      });
    } catch (e) {
      dispatch({
        type: ContactActionTypes.FETCH_CONTACTS_ERROR,
        payload: (e as AxiosError).response!.data as string,
      });
    }
  }
}

export const addContact = (surname: string, name: string, userId: number) => {
  return async (dispatch: Dispatch<ContactAction>) => {
    try {
      dispatch({type: ContactActionTypes.ADD_CONTACT});
      const response = await axios.post(`${url}/contacts`, JSON.stringify({surname, name, userId}), {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      dispatch({
        type: ContactActionTypes.ADD_CONTACT_SUCCESS,
        payload: response.data as Contact,
      })
    } catch (e) {
      dispatch({
        type: ContactActionTypes.ADD_CONTACT_ERROR,
        payload: (e as AxiosError).response!.data as string,
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
        payload: (e as AxiosError).response!.data as string,
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
        payload: (e as AxiosError).response!.data as string,
      });
    }
  }
}
