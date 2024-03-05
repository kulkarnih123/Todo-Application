export function CreateTodo(){
    return<div>
        <input style={{
            padding:10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e){
            const value= e.target.value;
            setTitle(e.target.value)
        }} /><br />
        <input style={{
            padding: 10,
            margin: 10
        }}  type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value)
        }} /><br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={()=>{
            fetch("http://localhost:3000/todos",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: descripton
                }),
                headers: {
                   "content-type": "applicaton/json" 
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("Todo Added")
            })
        }} >Add a todo</button>
    </div>
}