import React, {useState} from 'react';
import "./TinderCards.css";
import TinderCard from 'react-tinder-card';

const TinderCards = () => {

    const [people, setPeople] = useState([]);

    const swiped = (nameToDelete) => {
        console.log("Removing: " + nameToDelete);
    } 

    const outOfFrame = (name) => {
        console.log(name + " has left thescreen");
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                    className = "swipe"
                    key = {person.name}
                    preventSwipe = {["up", "down"]}
                    onSwipe = {(dir) => swiped(dir, person.name)}
                    onCardLeftScreen = {() => outOfFrame(person.name)}
                >
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>    
        </div>
    );
}

export default TinderCards;