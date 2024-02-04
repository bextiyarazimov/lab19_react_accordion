import Accordion from "./components/Accordion/Accordion";

function App() {

  const data = [
    {
      id: 0,
      label: "what a cool and unique label",
      renderContent: () => (
        <p>
Lorem, ipsum dolor sit amet consectetur
 adipisicing elit. Debitis dolorum tempore
  aut numquam, laudantium repudiandae pariatur quaerat nam doloribus error vitae corrupti
 ipsum ad maxime veniam incidunt ex quasi assumenda?
        </p>
      ),
    },

    {
      id: 1,
      label:  "super unique  label",
      renderContent: () => (
        <ol>
          <li>list item 1</li>
          <li>list item 2</li>
          <li>list item 3</li>
          <li>list item 4</li>
        </ol>
      ),

    },

    {
      id: 2,
      label: "Boring not-at-all-cool label",
      renderContent:() => <button>hello im a button</button>,

    },

  ];
   

  return <div className="App">

    <main>
<Accordion items={data} keepOthersOpen={true} />
    </main>
    
    
    
     </div>;
  
}

export default App;
