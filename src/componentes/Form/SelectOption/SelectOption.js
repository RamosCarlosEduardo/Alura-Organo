import Label from '../Label/Label'
import style from './SelectOption.module.css'

export default function SelectOption(props) {
    
    return (
        <div className={style.container}>
            <Label for="select-time" text={props.label} />
            <select
                required={!!props.required}
                name="select-time"
                id="select-time"
                className={style.select}
                value={props.selectValue}
                onChange={props.onChangeHandle}
            >
                {
                    Object.keys(props.itens).map(item => {
                        return (
                            <option
                                key={item}
                                value={item}
                            >
                                {props.itens[item].name}
                            </option>        
                        )
                    })
                }
            </select>
        </div>
    )
}