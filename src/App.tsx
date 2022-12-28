import { FormEvent } from 'react';
import {useState} from 'react'
import Player from './components/Player';
import {nanoid} from 'nanoid'

const playerList = [
  {id:nanoid(), name:"Rok", score:20},
  {id:nanoid(), name:"Gunnar", score:30}
]
function App() {
  const [players, setPlayers] = useState(playerList)
  function reduceScore<T>(id:T){
    setPlayers(players.map(player => player.id ===id?{...player,score:player.score - 1}:player))
  }
  function increaseScore<T>(id:T){
    setPlayers(players.map(player => player.id ===id?{...player,score:player.score + 1}:player))
  }
  function handleSubmit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const target = event.target as HTMLFormElement
    setPlayers(players=>[...players,{id:nanoid(),name:target.elements['player'].value,score:0}])
    target.reset()
  }

  function resetScores(){
    setPlayers(players.map(player => {return {...player, score:0}}))
  }

  function resetAll(){
    setPlayers([])
  }
  return (
    <div>
    <div className="grid grid-cols-4 grid-flow-row gap-y-1 my-2 place-items-center">
      {players.map(player => <Player key={player.id} name={player.name} score={player.score} inscreaseScore={()=>increaseScore(player.id)} reduceScore={()=>reduceScore(player.id)}></Player>)}
   </div>
   <div className="mx-auto my-2 w-28 h-20 grid grid-rows-2 gap-y-1">
    <button className="border-solid border-2 rounded-lg" onClick={resetScores}>Reset scores</button>
    <button className="border-solid border-2 rounded-lg" onClick={resetAll}>Reset all</button>
    </div>
    <form className="flex flex-col gap-y-1 p-4" onSubmit={handleSubmit}>
      <label htmlFor='player'>Add player:</label>
      <input id="player" name="player" type="text" placeholder='Player name' className="border-solid border-2 p-2"/>
    </form>
   </div>
  );
}
export default App;

