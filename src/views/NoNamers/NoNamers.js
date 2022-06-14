import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";
import parse from "html-react-parser";
import { Context } from "../../context/Context";

import "./NoNamers.styles.scss";

const NoNamers = () => {
  const { noNamers, noNamersText } = useContext(Context);

  const sortedNoNamers = noNamers.sort((a, b) =>
    a.nombre > b.nombre ? 1 : a.nombre < b.nombre ? -1 : 0
  );

  const history = useHistory();

  return (
    <div className={"nonamers__container"}>
      <section className={"nonamers"}>
        <p className={"nonamers__body"}>
          {parse(
            `
            ${noNamersText?.titulo}
            `
          )}
        </p>
        <p className={"nonamers__body"}>
          {parse(
            `
            ${noNamersText?.parrafo}
            `
          )}
        </p>
      </section>
      <section className={"profile-nonamers"}>
        {(sortedNoNamers || []).map((item) => {
          const { id, carrusel, nombre } = { ...item };

          const handleClick = () => {
            if (document.documentElement.scrollTop > 0) {
              scroll.scrollToTop();
              setTimeout(() => history.push(`/nonamers/${id}`), 1000);
            } else {
              history.push(`/nonamers/${id}`);
            }
          };

          return (
            <div key={id} onClick={handleClick}>
              <img src={carrusel?.[0]} alt={`foto ${nombre}`} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default NoNamers;
