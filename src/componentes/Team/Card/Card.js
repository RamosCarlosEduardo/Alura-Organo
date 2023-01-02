import style from './Card.module.css'

export default function Card (props){
    
    return(
        props.teams.filter(element => element.time === props.id).map(element => {
            return (
                <div className={style.card} key={element.nome}>
                    <img src={element.imagem} alt="Foto do colaborador" className={style.imagem} />
                    <div className={style.personName}>
                        {element.nome}
                    </div>
                    <div className={style.cargo}>
                        {element.cargo}
                    </div>
                </div>
            )
        })
    )
}