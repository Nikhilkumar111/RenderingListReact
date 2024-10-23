/* eslint-disable react/prop-types */
function Recipe({drinkers}){
    return (
        <ol>
            <li>Boil {drinkers} cups of water.</li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
            <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
        </ol>
    )
}



export default function Point(){
    return (
   <section>
   <h1>spiced chai Recipe</h1>
   <h2>for two </h2>
 <Recipe drinkers = {2}/>
<h2>For a gathering</h2>
 <Recipe drinkers={4} />
   </section>     
    )
}