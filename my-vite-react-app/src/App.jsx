import Assessment from "./Components/Assessment"
import {jsQuizz} from "./constants.json"
import "./App.css"
import DataFetchingComponent from "./Components/DataFetchingComponent"
function App() {
    return <DataFetchingComponent/>
    // return <Assessment questions={jsQuizz.questions} />
}

export default App
