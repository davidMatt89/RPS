import chalk from 'chalk';
import prompts from 'prompts';

const playGame = async () => {
  const playerChoice = await prompts({
    type: 'select',
    name: 'value',
    message: 'The choice is yours',
    choices: [
      { title: 'Rock', value: 'rock' },
      { title: 'Paper', value: 'paper' },
      { title: 'Scissors', value: 'scissors' }
    ],
    initial: 0
  });

  const puter = getComputerChoice();
  const win = checkWinner(puter, playerChoice.value);
  console.log(`
  computer choice: ${puter}
  player choice: ${playerChoice.value}
  ${win}`);
};

const getComputerChoice = () => {
  const randomOne = Math.floor(Math.random() * 3);

  if (randomOne === 0) {
    return 'rock';
  } else if (randomOne === 1) {
    return 'scissors';
  } else {
    return 'paper';
  }
};

const checkWinner = (puter, player) => {
  const tie = chalk.blue('tie');
  const win = chalk.green('player wins!');
  const loss = chalk.red('LOSER!!?!?!');
  if (puter === 'rock' && player === 'rock') {
    return tie;
  } else if (puter === 'scissors' && player === 'scissors') {
    return tie;
  } else if (puter === 'paper' && player === 'paper') {
    return tie;
  } else if (puter === 'rock' && player === 'paper') {
    return win;
  } else if (puter === 'paper' && player === 'scissors') {
    return win;
  } else if (puter === 'scissors' && player === 'rock') {
    return win;
  } else {
    return loss;
  }
};

playGame();