import { Link } from "react-router-dom"
import { SHeader, SNavBar } from "./styles"
import Logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { GrLogout } from "react-icons/gr";
export function Header() {
  const { user, signOut } = useContext(AuthContext)
  async function logout() {
    await signOut()
  }
  return (
    <SHeader>
      <picture>
        <img src={Logo} alt="Logo do site" />
      </picture>
      <SNavBar>
        <input id="menu-toggle" type="checkbox" />
        <label htmlFor="menu-toggle">
          <div className="menu-hamburger">
            <span className="hamburger" />
          </div>
        </label>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/comentario">Comentário</Link>
          </li>
        </ul>
        {
          user ? (
            <ul>
              <li>
                <Link to="/adm">Administrativa</Link>
              </li>
              <li>
                <button onClick={logout}>{user.nome} <GrLogout /></button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/cadastrar">Cadastrar</Link>
              </li>
            </ul>
          )
        }
      </SNavBar>
    </SHeader>
  )
}