import { useEffect, useState } from 'react'


const localChache = {

}

export const useFetch = ( url ) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,

    });

    useEffect(() => {
        getFecth();
       

    }, [url]);

    const setLoadingState = () => {
        setState({
            data:null,
            isLoading: true,
            hasError: false,
            error: null,
        })

    }
    
    const getFecth = async() => {

        if(localChache[url] ){
            console.log('Usando cache');
            setState({
                data: localChache[url],
                isLoading: false,
                hasError: false,
                error:null,
            });
            return;
        }


        setLoadingState();
        const resp = await fetch( url )
        await new Promise( resolve => setTimeout( resolve , 1000 ) );
        if( !resp.ok){
            setState({
                data: null,
                isLoading:false,
                hasError: true,
                error:{
                    code:resp.status,
                    message: resp.status, 
                }
            });
            return;

        }

        const data = await resp.json();
        setState({
            data:data,
            isLoading: false,
            hasError: false,
            error: null,
        })
        localChache[url] = data;
        
    }

    return {
        data:state.data,
        isLoading:state.isLoading,
        hasError:state.hasError,
        
    };
}
