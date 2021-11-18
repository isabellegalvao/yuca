import { SContent, SCard,SLink } from "./style";
import Template from "../Template";
import { Link } from "react-router-dom";

export default function Home({ data }) {
  return (
    <Template>
      {data.user ? (
        <SContent>
          <h1 className="content__title">Bem vindo, {data.user.firstName}</h1>
          <p className="content__subtitle">Atualmente você está morando em:</p>

          <SCard>
            <picture className="card__img">
              <img src={data.apartment.image} />
            </picture>
            <div className="card__wrapper">
              <p className="card__title">
                {data.apartment.name} {data.apartment.number}
              </p>
              <p className="card__room">Quarto {data.apartment.room}</p>
              <p className="card__subway">
                {data.apartment.subwayStation.name}{" "}
                <span className="card__subway-distance">{data.apartment.subwayStation.distance}</span>
              </p>
              <p className="card__price">R$ {data.apartment.price}</p>
            </div>
          </SCard>
          <SLink><Link to="/services">Contratar mais serviços</Link></SLink>
        </SContent>
      ) : (
        <p>Carrregando</p>
      )}
    </Template>
  );
}
