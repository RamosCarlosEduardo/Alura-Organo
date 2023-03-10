import style from './Label.module.css'

export default function Label(props) {
    return (
        <label className={style.label} htmlFor={props.for}>{props.text}</label>
    )
}