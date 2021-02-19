import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-700x467.jpg"
        },
        {
            name: "Jeff Bezos",
            url: "https://specials-images.forbesimg.com/imageserve/5f469ea85cc82fc8d6083f05/960x0.jpg?fit=scale"
        }
    ]);

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard>
                    
                </TinderCard>
            ))}
            </div>    
        </div>
    );
}

export default TinderCards;