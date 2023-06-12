import { FC, useReducer } from 'react'
import { EntriesContext,  } from './';
import { entriesReducer } from './entriesReducer';
import { Entry } from '@/interfaces';
import { v4 as uuidv4 } from 'uuid'

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description:'Pendiente',
            status:'pending',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description:'EnProgreso',
            status:'in-progress',
            createdAt: Date.now()
        },
        {
            _id: uuidv4(),
            description:'Terminadas',
            status:'finished',
            createdAt: Date.now()
        },
    ],
}

interface Props{
children:JSX.Element;
}

export const EntriesProvider:FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer( entriesReducer , Entries_INITIAL_STATE)

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type:'[Entry] - Add-Entry', payload:newEntry})
    }


   return (
       <EntriesContext.Provider value={{
           ...state,
           addNewEntry,
       }}>
           {children}
       </EntriesContext.Provider>
   )
}