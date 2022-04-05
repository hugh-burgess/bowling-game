import './App.css';

function App() {

    const arrayOfRounds = [];

    for (let i = 1; i <= 10; i++) {
        arrayOfRounds.push(i);
    }
    console.log(arrayOfRounds);


    const gameRound =
        <table>
            <th>
                {arrayOfRounds.map((item,index)=>{
                    return (
                        <th key={index}>{item} | {item}</th>
                    )
                })}
            </th>
        </table>;


    return (
        <div>
            {gameRound}
        </div>
    );
}

export default App;
