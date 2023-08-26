import "../../styles/style.css"

const Banner = ({ datas }) => {
  const firstName = datas[0].userInfos.firstName
  return (
    <section className="banner">
      <h1 className="banner--title">
        Bonjour <span className="banner--firstname">{firstName}</span>
      </h1>
      <p className="banner--message">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </section>
  )
}

export default Banner
