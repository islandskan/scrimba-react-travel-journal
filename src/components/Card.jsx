import { PositionIcon } from './Icons';

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.item.imageUrl} alt={props.item.title} />
            <div className='card__info'>
                <div className='card__info--location'>
                    <span>
                        <PositionIcon />
                        <p>{props.item.location}</p>
                    </span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h3>{props.item.title}</h3>
                <h4>
                    {props.item.startDate} - {props.item.endDate}
                </h4>
                <p className='description'>{props.item.description}</p>
            </div>
        </div>
    );
};

export { Card };
