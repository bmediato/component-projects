import React from "react";
import './style/About.css'
import technologies from "./technologies";

function About() {
  return(
    <div className="about">
      <h1>Sobre mim</h1>
      <div className="about-header">
      <h1>Sobre mim</h1>
      <h1>Tecnologias</h1>
      </div>
      <div className="about-container">
        <section className="about-me">
      <p>
        <strong>Desenvolvedor Web Full-Stack</strong> em formação pela Trybe,
        apaixonado por tecnologia e em busca de minha primeira oportunidade no mercado.<br />
        <strong>Tenho me especializado em tecnologias como JavaScript, React, Redux, CSS e HTML,
        além de ter experiência em Jest e RTL para testes.</strong><br /> Ao longo dos meus estudos,
        tenho buscado aprimorar minhas habilidades nessas áreas.<br />
        <strong>Estou animado para colaborar em projetos desafiadores e
        continuar aprendendo</strong> com profissionais experientes,
        visando meu crescimento profissional no campo do desenvolvimento web.
      </p>
        </section>
        <div className="technologies">
        {
          technologies.map(({technology, image}) => (
            <div>
              <img src={image} alt={technology} width='65px' />
              <p>{technology}</p>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default About