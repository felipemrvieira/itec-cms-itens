
import React, { Component } from 'react';
import './Itens.scss';
import Item from './item/Item';


import infra from "./assets/images/infraestrutura.png"
import sites from "./assets/images/sites.png"
import sistemas from "./assets/images/sistemas.png"
import financeiro from "./assets/images/financeiro.png"
import seguranca from "./assets/images/seguranca.png"
import email from "./assets/images/email.png"
import projetos from "./assets/images/projetos.png"
import documentos from "./assets/images/documentos.png"


class Itens extends Component {
    constructor(props) {
        super(props)
    }

    

    render() {
        const itens = [
            {
                img: infra,
                titulo: "Infraestrutura",
                descricao: "Estrutura Física para o armazenamento de sites e sistemas do Governo.",
                link: "#"
            },
            {
                img: sites,
                titulo: "Sites",
                descricao: "Desenvolvimento de Sites para os Órgãos do Governo.",
                link: "#"
            },
            {
                img: sistemas,
                titulo: "Sistemas",
                descricao: "Desenvolvimento de Sistemas para os Órgãos do Governo.",
                link: "#"
            },
            {
                img: financeiro,
                titulo: "Financeiro",
                descricao: "Controle Financeiro do Estado.",
                link: "#"
            },
            {
                img: seguranca,
                titulo: "Segurança",
                descricao: "Sistema de Segurança para a rede do Governo.",
                link: "#"
            },
            {
                img: email,
                titulo: "E-mail",
                descricao: "E-mail Corporativo do Governo do Estado de Alagoas.",
                link: "#"
            },
            {
                img: projetos,
                titulo: "Assessoria de Projetos",
                descricao: "Criação e Gerenciamento de Projetos em Tecnologia da Informação dos Órgãos do Estado.",
                link: "#"
            },
            {
                img: documentos,
                titulo: "Documentos",
                descricao: "Digitalicação e Gerenciamento dos Documentos Eletrônicos do Governo do Estado.",
                link: "#"
            }
        ]
    
        const renderItens = () => {
            return itens.map(item => (
                <Item 
                    src={item.img}
                    title={item.titulo}
                    description={item.descricao}
                    link={item.link}
                    />
            ))
        }

        return (
            <section className="container">
            <div className="row">
              <div className="col-lg-12">
                <div id="itens-modulo">
                    <div className="titulo-modulo">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div className="itens-wrapper">
                        {renderItens()}
                    </div>
      
                </div>
              </div>
            </div>
          </section>
       
        );
    }
}

export default Itens;


