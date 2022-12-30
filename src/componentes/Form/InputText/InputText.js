import Label from '../Label/Label'
import style from './InputText.module.css'

export default function InputText (props){
    
    return (
        <div className={style.container}>
            <Label for={props.id} text={props.label} />
            <input
                value={props.inputValue}
                onChange={props.onChangeHandle}
                required={!!props.required}
                type="text"
                className={style.input}
                id={props.id}
                placeholder={props.placeholder}
            />
        </div>
    )
}