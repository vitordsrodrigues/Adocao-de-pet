import { useState } from "react"
import formStyles from './form.module.css'
import Input from "./Input"
import Select from "./Select"
function PetForm({handleSubmit,petData,btnText}){
    const [pet,setPet] = useState(petData || {})
    const [preview,setPreview] = useState([])
    const colors = ["branco", "preto", "cinza", "marrom", "caramelo"]

    function onFileChange(e){

    }

    function handleChange(e){
    }

    function handleColor(e){
        
    }

    return(
        <form className={formStyles.form_container}>
            <Input 
               text='Imagens do Pet'
               type='file'
               name='images'
               handleOnChange={onFileChange}
               multiple={true}
            />
            <Input
               text='Nome do Pet'
               type='text'
               name='name'
               placeholder="Digite o nome"
               handleOnChange={handleChange}
               value={pet.name || ''}
            />
            <Input
               text='Idade do Pet'
               type='text'
               name='age'
               placeholder="Digite a idade"
               handleOnChange={handleChange}
               value={pet.age || ''}
            />
            <Input
               text='Peso do Pet'
               type='number'
               name='weight'
               placeholder="Digite o peso"
               handleOnChange={handleChange}
               value={pet.weight || ''}
            />
            <Select
               name='color'
               text='Selecione a cor do Pet'
               options = {colors}
               handleOnChange={handleColor}
               value={pet.color || ''}
            />
            <input type="submit" value={btnText}/>
        </form>
    )
}

export default PetForm