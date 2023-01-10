import style from './Title.module.css'

export default function Title(props){
    
    return (
        <h2 className={style.title__name}>{props.text}</h2>
    )
}