import style from './Button.module.css'

export default function Button (props) {
    return (
        <button className={style.btn}>{props.children}</button>
    )
}