import PropTypes from 'prop-types';

import css from './Statistics.module.css'

export function Statistics( props ) {
  const {title, stats, rendomColor} = props;

  return (
    <section className={css.statistics}>
      {title && <h2 
      className={css.title} 
      data-testid='title'>
        {title}
      </h2>}

      <ul 
      className={css['stat-list']} 
      data-testid='list'>
        { stats.map( (stat) => (
          <li className={css.stat} key={stat.id} style = {{backgroundColor: rendomColor()}}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))
        }
      </ul>
    </section>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
  rendomColor: PropTypes.func.isRequired,
};
