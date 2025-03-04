import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm );
    
        const onInputChange = ( { target } ) => {
            const { name, value } = target;
            setFormState({
                    ...formState,
                    [ name ]: value, // [name] es una forma de acceder a la propiedad del objeto y asignarle el valor de value 
    
            });
            
        };
        const onResetForm = () => {
            setFormState( initialForm )
            
        };
        

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

    };
}
