import "./icons.css";

const PokeTypes = ({ types, nav, namedIcons = false }) => {
  const simpleIcon = types.map((el) => {
    return (
      <div>
        <div onClick={nav.bind(null, el.type.url)} className={`icon ${el.type.name}`}>
          <img src={`icons/${el.type.name}.svg`} alt={el.type.name} />
        </div>
        <p>{namedIcons && el.type.name}</p>
      </div>
    );
  });

  return simpleIcon;
};
export default PokeTypes;
