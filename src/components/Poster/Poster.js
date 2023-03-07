import './styles/poster.css'

export function Poster ({title, description, style, children}) {

  return (
     <section className={'poster'} style={style.poster}>
        <div className="img-holder background">
           <div className="background">
              Poster
           </div>
        </div>
        <div className="container">
           <div className="posterContent" style={style.content}>
              <h1 className={'title'}>{title}</h1>
              <span className={'description'}>{description}</span>
              <div className="child">
                 {children || null}
              </div>
           </div>
        </div>
     </section>
  )
}