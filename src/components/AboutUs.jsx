import React, { useEffect } from 'react'

const AboutUs = () => {

    useEffect(() => {
        const clickear = () => {
            console.log("Click");
        }
    
        window.addEventListener("click", clickear)

        return () => {
          window.removeEventListener("click", clickear)
        }
    
      }, [])
    
      return (
        <div className="container">
            <h1 className="main-title">Nosotros</h1>
            <div className="about-us-cont">
            <h2>¿Quiénes Somos?</h2>
            <p>Super Mercados Génesis es más que un supermercado. Somos un centro integrar para compras, especializados en nuestro servicio y caracterizados por tener el mejor equipo humano en cada una de nuestras sucursales.</p>
            <p>Nuestro compromiso con los clientes es la satisfacción de sus necesidades, contando con una amplia gama de productos de la mejor calidad, a precios accesibles, y oferta promociones, en conjunto de la mejor atención, en el tiempo justo y que se adapta a las necesidades de cada uno de nuestros clientes. </p>
            <h3>Misión</h3>
            <p>Aportar de forma planificada, organizada y coordinada; abastecimiento a los hogares de cada zona en la que operamos, poniendo en primer lugar la moral y buenas costumbres, precios justos, servicio y atención de calidad al cliente, totalmente adaptable a sus necesidades, y la innovación a travéas de nuevas tecnologías y servicios; persiguiendo una rentabilidad dentro de los parametros legales y éticos.</p>
            <h3>Visión</h3>
            <p>Consolidarnos como referencia nacional en todo lo que se relacione a atención y servicio, innovación y tecnología, a través de procesos integrales en busqueda del desarrollo sustentable, y el crecimiento de la empresa en conjunto y ayudando al crecimiento de las regiones en la que nos encontramos.</p>
            </div>        
        </div>
      )
    }


export default AboutUs