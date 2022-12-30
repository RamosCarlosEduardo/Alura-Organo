import InputText from './InputText/InputText';
import style from './Form.module.css'
import Button from './Button/Button';
import SelectOption from './SelectOption/SelectOption';
import Title from './Title/Title';
import { useState } from 'react';

export default function Form(props){
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('1')



    const onSubmitHandle = (event) => {
        event.preventDefault()
        let newColaborador = {
            nome,
            cargo,
            imagem,
            time
        }
        props.onRegister(newColaborador)
    }

    return (
        <section>
            <form className={style.create__card} onSubmit={onSubmitHandle}>
                <Title
                    className='form__title'
                    text='Preencha os dados para criar o card do colaborador.'
                />
                <InputText
                    required="true" 
                    id="name"
                    label="Nome"
                    placeholder="Insira seu nome"
                    inputValue={nome}
                    onChangeHandle={(event) => setNome(event.target.value)}
                />
                <InputText
                    required="true"
                    id="post"
                    label="Cargo"
                    placeholder="Insira seu cargo"
                    inputValue={cargo}
                    onChangeHandle={(event) => setCargo(event.target.value)}
                />
                <InputText
                    id="image"
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    inputValue={imagem}
                    onChangeHandle={(event) => setImagem(event.target.value)}
                />
                <SelectOption 
                    required="true"
                    label="Time"
                    itens={props.optionsTeams}
                    selectValue={time}
                    onChangeHandle={(event) => setTime(event.target.value)}
                />

                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}