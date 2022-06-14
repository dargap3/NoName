import React from "react";
import "./WannaBePartner.styles.scss";

const WannaBePartner = () => {
  return (
    <>
      <section className={"wanna-be-partner"}>
        <h2 className={"wanna-be-partner__body"}>
          <strong>NO CREEMOS EN SIGLAS, CREEMOS EN LAS EMPRESAS</strong>
        </h2>
        <p className={"wanna-be-partner__body"}>
          Si llegaste hasta aquí es porque estás cansado de escuchar buenas
          ideas que nunca se ejecutan. Si te ha pasado, hablemos.
        </p>
        <section className={"form__container"}>
          <div className={`send-message`}>
            <p>
              <a
                href="mailto:linavieira@noname.com.co"
                style={{ fontWeight: "800", textDecoration: "underline" }}
              >
                linavieira@noname.com.co
              </a>
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default WannaBePartner;
