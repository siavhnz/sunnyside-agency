const MenuItem = ({ item, style }) => {
    return (
      <li>
        <a href="#" className={style}>
          {item}
        </a>
      </li>
    );
  };
  
  export default MenuItem;
  