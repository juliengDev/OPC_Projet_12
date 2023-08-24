import "../../styles/style.css"

const Banner = () => {
  const prenom = "Thomas"
  return (
    <section className="banner">
      <h1 className="banner--title">
        Bonjour <span className="banner--firstname">{prenom}</span>
      </h1>
    </section>
  )
}

export default Banner
