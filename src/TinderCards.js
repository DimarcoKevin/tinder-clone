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