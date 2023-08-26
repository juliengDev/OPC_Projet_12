import Keydata from "../keydata"

const KeyDataContainer = ({ datas }) => {
  return (
    <div className="keyDataContainer">
      <Keydata datas={datas} type="calories" />
      <Keydata datas={datas} type="proteines" />
      <Keydata datas={datas} type="glucides" />
      <Keydata datas={datas} type="lipides" />
    </div>
  )
}

export default KeyDataContainer
