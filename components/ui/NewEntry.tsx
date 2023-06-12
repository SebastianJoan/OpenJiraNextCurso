import { useContext,ChangeEvent, useState }  from 'react'
import { Button, Box, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

export const NewEntry = () => {
  
  const [inputValue, setinputValue] = useState('')
  const [touched, settouched] = useState(false)
  
  const { addNewEntry } = useContext(EntriesContext)
  const { isAddingEntry, setisAddingEntry } = useContext(UIContext)

  const onTextFieldChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
    setinputValue(event.target.value)
  }

  const onSave = () => {
    if(inputValue.length === 0 ) return;
    addNewEntry(inputValue)
    setisAddingEntry(false);
    settouched(false);
    setinputValue('');
  }

  const onCancel = () => {
    setisAddingEntry(false);
    settouched(false);
    setinputValue('');
  }

  return (
    <Box sx={{ marginBottom:2, paddingX:2 }}>  
      {
        isAddingEntry ? (
          <>
            <TextField 
              fullWidth
              sx={{ marginTop: 2, marginBottom:1  }}
              placeholder='Nueva entrada'
              autoFocus
              multiline
              label='Nueva Entrada'
              helperText={ inputValue.length <= 0 && touched && 'Ingresa un valor' }
              error={ inputValue.length <= 0 && touched }
              value={inputValue}
              onChange={onTextFieldChanged}
              onBlur={() => settouched(true)} 
            />
            <Box display = 'flex' justifyContent={'space-between'} >
              <Button
                  variant='outlined'
                  color='error'
                  endIcon={ <CancelOutlinedIcon/> }
                  onClick={ onCancel }
              >
                  Cancelar
              </Button>
              <Button
                  variant='outlined'
                  color='secondary'
                  endIcon={ <SaveOutlinedIcon/> }
                  onClick={ () => onSave()}
              >
                  Guardar
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Button
                variant='outlined'
                fullWidth
                color='secondary'
                endIcon={ <AddCircleOutlinedIcon/> }
                onClick={ () => setisAddingEntry(true) }
            >
              Agregar Tarea
            </Button>
          </>
        )
      }

      
    </Box>
  ) 
}
