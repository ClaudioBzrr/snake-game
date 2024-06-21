import { GameBoard } from './Game/GameBoard';

function App() {
  return (
    <main className="w-screen h-screen p-0 m-0 flex flex-col items-center justify-evenly">
      <header className="text-3xl text-center">Snake Game</header>
      <section>
        <GameBoard />
      </section>
    </main>
  );
}

export { App };
