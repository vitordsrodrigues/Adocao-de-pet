import { useState,useEffect } from 'react'
import api from '../../../utils/api'
import useFlashMessage from '../../../hooks/useFlashMessage'
import formStyles from '../../form/form.module.css'
import styles from './Profile.module.css'
import Input from '../../form/Input'
import RoundedImage from '../../layout/RoundedImage'

function Profile(){
    const [user,setUser] = useState({})
    const [preview,setPreview] = useState()
    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlashMessage} = useFlashMessage()

    // Mostra o link da imagem no console para depuração
    console.log(
      'Link da imagem no React:',
      preview
        ? URL.createObjectURL(preview)
        : `${process.env.REACT_APP_API}/images/users/${user.image}`
    );
    

    useEffect(()=>{
        api.get('/users/checkuser',{
            headers:{
                Authorization:`Bearer ${JSON.parse(token)}`
            }
        }).then((response)=>{
            setUser(response.data)
            console.log(response.data)
        })
    },[token])

    function onFileChange(e){
        setPreview(e.target.files[0])

         setUser({ ...user, [e.target.name]: e.target.files[0] })
    }

    function handleChange(e) {
          setUser({ ...user, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        
        let msgType = 'success'

        const formData = new FormData()

        await Object.keys(user).forEach((key)=>
            formData.append(key,user[key])
        )
       
        const data = await api.patch(`/users/edit/${user._id}`,formData, {
            headers:{
                 Authorization:`Bearer ${JSON.parse(token)}`,'Content-Type':'multipart/form-data'
            }
        }).then((response)=>{
            return response.data

        }).catch((err)=>{
            msgType = 'error'
            return err.response.data
        })

        setFlashMessage(data.message,msgType)
        
    }

    return(
        <section>
            <div className={styles.profile_header}>
                <h1>Perfil</h1>
                {(user.image || preview) && (
                    <RoundedImage src={preview ? URL.createObjectURL(preview):`${process.env.REACT_APP_API}/images/users/${user.image}`} alt={user.name}
                    />
                )}
            </div>
            <form onSubmit={handleSubmit} className={formStyles.form_container}>
                <Input
                    text="Imagem"
                    type="file"
                    name="image"
                    handleOnChange={onFileChange}
                />
                <Input
                    text="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    handleOnChange={handleChange}
                    value={user.email || ''}
                />
                <Input
                    text="Nome"
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    handleOnChange={handleChange}
                    value={user.name || ''}
                />
                <Input
                    text="Telefone"
                    type="text"
                    name="phone"
                    placeholder="Digite seu telefone"
                    handleOnChange={handleChange}
                    value={user.phone || ''}
                />
                <Input
                    text="Senha"
                    type="password"
                    name="password"
                    placeholder="Digite sua senha"
                    handleOnChange={handleChange}
                />
                <Input
                    text="Confirmação de senha"
                    type="password"
                    name="confirmpassword"
                    placeholder="Confirme sua senha"
                    handleOnChange={handleChange}
                />
                <input type='submit' value="Editar"/>
            </form>
        </section>
    )
}

export default Profile