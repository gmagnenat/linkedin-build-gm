import './Widgets.css';
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className='widgets__articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets__articRight'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
    // <div className='widgets__article'>
    //
    // </div>
  );

  return (
    <div className='widgets'>
      <div className='widgets__header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle('Woob: Web Outside of Browsers', 'Top news - 9989 readers')}
      {newsArticle('From Batch to Real-Time', 'Top news - 9989 readers')}
      {newsArticle(
        'The end of poverty has just begun',
        'Top news - 9989 readers'
      )}
      {newsArticle(
        'Treehouse: A Case for Carbon-Aware Datacenter Software',
        'Top news - 9989 readers'
      )}
      {newsArticle(
        'Netflix increasing prices, standard plan to top $15 a month; stock jumps ',
        'Top news - 9989 readers'
      )}
    </div>
  );
}

export default Widgets;
