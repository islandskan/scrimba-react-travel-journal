import { Header } from './components/Header';
import { Card } from './components/Card';
import data from './data.js';

function App() {
    const cards = data.map((item) => {
        if (item.id < data.length) {
            return (
                <>
                    <Card key={item.id} item={item} />
                    <hr className='card__line' />
                </>
            );
        } else {
            return <Card key={item.id} item={item} />;
        }
    });

    return (
        <>
            <Header />
            <div className='container'>{cards}</div>
        </>
    );
}

export default App;
