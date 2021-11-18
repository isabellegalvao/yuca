import {SMenu} from './style'
import { Link } from "react-router-dom";

function Header({user}) {
  return (
    <SMenu>
      <div className="menu__container">
        <Link to="/" className="active">Meu Yuca</Link>
        <Link to="/">Minha Conta</Link>
      </div>
    </SMenu>
  );
}

export default Header;
