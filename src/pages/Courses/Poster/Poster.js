import './styles/poster.css'

export function Poster ({title, description}) {

  return (
     <section className={'poster'}>
        <div className="img-holder background">
           <div className="background">
              Poster
           </div>
        </div>
        <div className={'titleContainer'}>
           <h1 className={'title'}>{title}</h1>
           <span className={'description'}>{description}</span>
        </div>
     </section>
  )
}