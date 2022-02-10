import React from 'react';
import { Nav2 } from '../../components';

const About = () => {
  return (
    <div>
        <h1 className='glow'>ABOUT</h1>
        <h3>Welcome to N-Quiz!
          <br />
          N-Quiz is a game application that will test your knowledge in many topics such arts, sciences, cinematography and more!
          You can play by yourself or with friends.
          <br />
          To setup a game go to NEW GAME. There you can set the settings for your quiz such as its category or difficulty.
          Here you can also set a room number for your friends to join and set your username. Once that is all set, press Next to be redirected to the Waiting Room area.
          When all the players have joined, click START to start the game.
          <br />
          If you want to join a friends' game instead click on JOIN GAME on the menu page. There you can put the room number of the game you want to join and also set your username.
          <br />
          At the end of each game you will see your score and your friends's score once they finish. Your score will then be saved and next time you play, your score will be added to you rprevious score.
          Then press MENU to go back to the main menu.
          <br />
          If you want to check who are the most knowledgable players, click on the LEADERBOARD link on the main menu.
          Here only the top 10 players with the highest aggregated scores will appear. So if you want to appear here, better start grinding! 
        </h3>
        <Nav2 link={'/menu'} />
    </div>);
};

export default About;
