import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2121',
    height: '100vh',
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainScreen: {
    width: '70%',
    backgroundColor: '#fff',
    borderRadius: 8,
    minHeight: '200px',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 15,
  },
  gameTitle: {
    fontSize: 20,
    fontWeight: 700,
    color: 'red',
    textAlign: 'center',
  },
  buttonsWrapper: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
  },
  about: {
    fontSize: 8,
    color: '#220606'
  },
  gameScreen: {
    height: '80vh',
    width: '90vw',
  },
  linkButton: {
    flex: 1,
    width: '100%',
    padding: 7,
    borderRadius: 2,
    alignItems: 'center',
    backgroundColor: '#be2323',  
  },
  backLink: {
    width: 50,
  },
  linkText: {
    texTransform: 'uppercase',
    color: '#fff',
    fontSize: 15,
    fontWeight: 600
  },
  gameScreenHeader: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-end'
  },
  difficulty: {
    flexDirection: 'column',
    fontSize: 19,
  },
  difficultyButtons: {
    gap: 5,
    flexDirection: 'row'
  },
  gameContentScreen: {
    position: 'relative',
    height: 520
  },
  cup: {
    position: 'absolute',
    top: 100,
    left: '50%',
    width: 150, 
    height: 0, 
    borderBottomWidth: 100, 
    borderBottomColor: '#2121', 
    borderLeftWidth: 30, 
    borderLeftColor: 'transparent', 
    borderRightWidth: 30, 
    borderRightColor: 'transparent', 
    borderStyle: 'solid',
    transition: 'all .5s ease-out',
    zIndex: 1000,
  },
  circleWrapper: {
    zIndex: 999,
    position: 'absolute',
    top: 110,
    left: '50%',
    height: 100,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    height: 70,
    width: 70,
    backgroundColor: '#b3cdd1',
    backgroundImage: 'linear-gradient(315deg, #b3cdd1 0%, #9fa4c4 74%)',
    borderRadius: '50%',
  },
  modal: {
    justifyContent: 'center',
    height: '30vh',
    width: '30vw'
  },
  pickCup: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: '#be2323',
    fontWeight: 700
  }
});

export default styles;