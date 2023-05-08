import PropTypes from 'prop-types';

import { Section, TitleStatistics, ListStatistics, ListStatisticsItem} from './Statistics.styled';

export function Statistics( {title, stats } ) {

  return (
    <Section>
      {title && <TitleStatistics
      data-testid='title'>
        {title}
      </TitleStatistics>}

      <ListStatistics
      data-testid='list'>
        { stats.map( (stat) => (
          <ListStatisticsItem key={stat.id}>
            <span >{stat.label}</span>
            <span >{stat.percentage}%</span>
          </ListStatisticsItem>
        ))
        }
      </ListStatistics>
    </Section>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })).isRequired
};
