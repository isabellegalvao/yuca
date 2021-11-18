import logo from './Logo.svg';
import {SHeader, SInitials, SUserName} from './style'

function Header({user}) {
  return (
    <SHeader>
      <img src={logo} alt="Yuca"/>
      {user && 
      <SUserName>
        <SInitials>{user.firstName.charAt(0)}{user.lastName.charAt(0)}</SInitials>

        {user.firstName}
      </SUserName>
      }
    </SHeader>
  );
}

export default Header;
