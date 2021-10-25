import React, { useState, Fragment, useEffect} from 'react';
import { Text, View, Button, ProgressBarAndroidBase, ActivityIndicator, Modal } from 'react-native';
import { AndroidBackButton, Link } from 'react-router-native';
import styles from '../styles/styles';
const colors = ['red', 'green', 'blue'];
const difficulties = [
  {
    name: 'Easy',
    delay: 1500,
    minSteps: 3,
  },
  {
    name: 'Medium',
    delay: 600,
    minSteps: 5,
  },
  {
    name: 'Hard',
    delay: 100,
    minSteps: 10,
  }
];

const delay = (amount = 50) => {
  return new Promise((res) => {
        setTimeout(res, amount);
      }
  );
};

const GameScreen = () => {
  const [selected, setSelected] = useState('');
  const [update, setUpdate] = useState(false);
  const [cups, setCups] = useState([
    {id: 0, empty: true, order: 0}, 
    {id: 1, empty: false, order: 1}, 
    {id: 2, empty: false, order: 2}
  ]);
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [isMoving, setMoving] = useState(false);
  const [isBallHidden, setBallHidden] = useState(false);
  const [isFinished, setFinished] = useState(true);
  const [result, setResult] = useState('');

  const updateCups = () => {
    setCups(prevState => [...prevState]);
  }

  const handleOpen = async(cup) => {
    if (isMoving) { 
      return;
    }
   
    if( !isFinished ) {
      setFinished(true);
      setSelected(cup.id === selected ? '' : cup.id);
      await delay(1000)
      alert(cup.empty ? 'You Win': 'You dead');

      if ( !cup.empty ) {
        show();
      }
      
      return;
    }
    setSelected(cup.id === selected ? '' : cup.id);
  }
  
  const show = async() => {
    const winCup = cups.find(e => e.empty);

    setSelected(winCup.id);
    await delay(1000);
    setSelected('');
    await delay(1000);
    return;
  }

  const shuffle = async() => {
    if (isMoving) { 
      return;
    }

    const cupsCopy = [...cups];
    let steps = Math.floor(Math.random() * 10) + difficulty.minSteps;

    setMoving(true);
    setFinished(false);
    await show();
    setBallHidden(true);
    
    while (steps) {
      for (let i = cupsCopy.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          let temp = cupsCopy[i].order;
          cupsCopy[i].order = cupsCopy[j].order;
          cupsCopy[j].order = temp;
      }
  
      updateCups(cupsCopy);
      await delay(difficulty.delay);
      steps -- ;
    }
    await delay(1000);
    
    setMoving(false);
    setBallHidden(false);
  }

  return(
    <View style = {styles.gameScreen}>
      <View style = {styles.gameScreenHeader}>
        <Link
          style={[styles.linkButton, styles.backLink]}
          to='/'
        >
          <Text
            style={styles.linkText}
          >
            Back
          </Text>
        </Link>
        <View style={styles.difficulty}>
          <Text>{`Difficulty: ${difficulty.name}`}</Text>
          <View style={styles.difficultyButtons}>
            <Button
              title='Easy'
              onPress={() => setDifficulty(difficulties[0])}
            />
            <Button
              title='Medium'
              onPress={() => setDifficulty(difficulties[1])}
            />
            <Button
              title='Hard'
              onPress={() => setDifficulty(difficulties[2])}
            />
          </View>
        </View>
      </View>
      <View style = {styles.gameContentScreen}>
        {
          cups.map((e, i) => {
            return (
              <Fragment key={e.id}>
                { !isBallHidden  && e.empty && 
                  <View style={[styles.circleWrapper, {
                    transform: `translate(-50%, ${e.order * 150}%`
                  }]}>
                     <View 
                        style={[styles.circle]}
                      />
                  </View>
                }
                <View
                  style = {[styles.cup, 
                    {
                      // borderBottomColor: colors[e.id], 
                      borderBottomColor: '#a9a9a9', 
                      transform: `translate(-50%, ${e.order * 150}%) rotate(${e.id === selected ? 50 : 0}deg)`,
                      transformOrigin: 'bottom right'
                    }]}
                  onTouchStart={() => {handleOpen(e)}}
                >
                </View>
              </Fragment>
            );
          })
        }
      </View>
      <View>
        {!isMoving && isFinished
        ?<Button
            title='Start'
            color='#be2323'
            onPress={shuffle}
          />
          : !isFinished && isMoving
            ? <ActivityIndicator 
              size='large'
            />
            : <Text 
                style={styles.pickCup}
              >
              Pick your cup.
            </Text>
        }
        </View>
    </View>
  );
}

export default GameScreen;