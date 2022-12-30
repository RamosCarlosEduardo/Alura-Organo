import style from './Team.module.css'

export default function Team (props) {
    let optionsTeams = props.optionsTeams
    let listIds = Object.keys(optionsTeams)
    
    return (
        <>
        {
        listIds.map(id => {
            return (
                    <section 
                        className={style.container}
                        key={optionsTeams[id].name}
                        style={{
                            "--bg-color": optionsTeams[id].bgcolor,
                            "--bg-cardbanner": optionsTeams[id].cardcolor
                            }}
                        
                    >
                    <h2 className={style.team__title}>{optionsTeams[id].name}</h2>
                    <div className={style.cardscontainer}>
                    {
                        props.teams.filter(element => element.time === id).map(element => {
                            return (
                                <div className={style.card}>
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
                    }
                    </div>
                </section>
            )
        })
        }


        </>
    )
}