import Card from './Card/Card'
import style from './Team.module.css'

export default function Team (props) {
    let optionsTeams = props.optionsTeams
    let listIds = Object.keys(optionsTeams)
    let arrayDeIdsExistentes = []
    props.teams.forEach(element => {
        arrayDeIdsExistentes.push(element.time)
    })
    return (
        <>
            {
                listIds.map(id => {
                    if (arrayDeIdsExistentes.includes(id)){
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
                                    <Card teams={props.teams} id={id}/>

                                    </div>
                                </section>
                        )
                    }
                })
            }
        </>
    )
}