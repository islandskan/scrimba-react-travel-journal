import { GlobeIcon } from './Icons';

const Header = () => {
    return (
        <header className='header'>
            <div className='header__title'>
                <GlobeIcon />
                <p>my travel journal.</p>
            </div>
        </header>
    );
};

export { Header };
