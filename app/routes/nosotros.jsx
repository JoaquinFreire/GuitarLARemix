import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';


export function meta() {
  return [
    {
      title: 'GuitarLA - Sobre Nosotros',
      description: 'Venta de guitarras, blog de música y más'
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="Imagen sobre nosotros" />
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel commodi vero fugiat dignissimos cupiditate quidem pariatur facilis architecto deleniti! Sequi iste ratione ad sapiente sit! Nobis, culpa laborum? Et, saepe! Vel possimus iusto perspiciatis quibusdam, culpa consectetur beatae harum consequatur, neque eveniet commodi quis dolor deserunt obcaecati accusantium consequuntur minima labore veniam. Voluptates nemo Reprehenderit ab natus ducimus, autem amet inventore!
            Sunt obcaecati earum nostrum, quidem asperiores amet, nemo culpa, placeat beatae voluptatibus harum at atque? In similique eius, at temporibus itaque eveniet voluptatum officiis optio necessitatibus? Mollitia neque consequatur voluptatibus.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros