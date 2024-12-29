import Header from "../src/components/header"
import Entry from "../src/components/entry"
import Joke from "../src/components/joke"
import data from "./data.js"

export default function App() {
  const entries = data.map((entry) => {
    return <Entry 
      key={entry.id}
      entry={entry}
      // img={entry.img}
      // title={entry.title}
      // country={entry.country}
      // googleMapsLink={entry.googleMapsLink}
      // dates={entry.dates}
      // text={entry.text}
    />
  })
  return (
    <>
      <Header />
      <main className="container">
        {entries}
      </main>



      {/* <Joke setup="I got my daughter a fridge for her birthday." punchline="I can't wait to see her face light up when she opens it." />
      <Joke setup="How did the hacker escape the police?" punchline="He just ransomware!" />
      <Joke setup="Why don't pirates travel on mountain roads?" punchline="Scurvy." />
      <Joke setup="Why do bees stay in the hive in the winter?" punchline="Swarm." />
      <Joke setup="What's the best thing about Switzerland?" punchline="I don't know, but the flag is a big plus!" /> */}
    </>
  )
}