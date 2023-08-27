import Keydata from "../keydata"

const KeyDataContainer = ({ datas }) => {
  return (
    <section className="keyDataContainer grid-item grid-item-8">
      <Keydata datas={datas} type="calories" />
      <Keydata datas={datas} type="proteines" />
      <Keydata datas={datas} type="glucides" />
      <Keydata datas={datas} type="lipides" />
    </section>
  )
}

export default KeyDataContainer
