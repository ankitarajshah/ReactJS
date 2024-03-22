export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>Winner {winner} won </p>}
      {!winner && <p>Its a Draw</p>}
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
}
