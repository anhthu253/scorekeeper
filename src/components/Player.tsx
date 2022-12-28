import {FC} from 'react'

interface IPlayer{
    name:string,
    score:number,
    reduceScore:() => void
    inscreaseScore:() => void
}
const Player:FC<IPlayer>=({name, score, reduceScore, inscreaseScore})=>{
    return (
        <> 
            <span>{name}</span>
            <button className="border-solid border-2 rounded-lg w-10 h-10" onClick={reduceScore}>-</button>
            <span>{score}</span>
            <button className="border-solid border-2 rounded-lg w-10 h-10" onClick={inscreaseScore}>+</button>
        </>
    )
}
export default Player;