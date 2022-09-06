export const inicialState = {
    character: [],
    characterFilter:[]
   

}

export const actionType={
    CHARACTERDB: "CHARACTERDB",
    CHARACTERFILTER: "CHARACTERFILTER"
   
    
}

const reducer=(state, action)=>{
   /*  console.log(action) */

     
    switch(action.type){
        case "CHARACTERDB": 
        return{
            ...state,
            character:action.character,
            characterFilter:action.characterFilter
          
        }
       
        case "CHARACTERFILTER":
            const characterFilter = state.character.filter(characterStart=> characterStart.id(action.value))           
        
            return{
                ...state,                
                characterFilter:characterFilter,
                
            } 
       /*  case "CITYCONTINENTE":
            const cityContinente = state.Character.filter(city => city.continents.includes(action.value))            
            return{
                ...state,
                cityContinente:cityContinente,
                filterCity:cityContinente
            }       */
  


        default:return state

    }
    
}

export default reducer;