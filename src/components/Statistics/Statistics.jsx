import css from './Statistics.module.css'

export function Statistics( {title, data} ) {
  console.log(data);
    return (
         data.map( (element) => {
            <li className="item">
            <span className="label">{element.label}</span>
            <span className="percentage">{element.percentage}%</span>
          </li>
          } )
        // <section className="statistics">
        // <h2 className="title">{title}</h2>

      //   <ul className="stat-list">
      //     <li className="item">
      //       <span className="label">{data.label}</span>
      //       <span className="percentage">{data.percentage}%</span>
      //     </li>
      //     <li className="item">
      //       <span className="label">{data.label}</span>
      //       <span className="percentage">{data.percentage}%</span>
      //     </li>
      //     <li className="item">
      //       <span className="label">{data.label}</span>
      //       <span className="percentage">{data.percentage}%</span>
      //     </li>
      //     <li className="item">
      //       <span className="label">{data.label}</span>
      //       <span className="percentage">{data.percentage}%</span>
      //     </li>
      //   </ul>
      // </section>
      )
}