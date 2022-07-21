 var peopleRaw = localStorage.getItem('people')
        if(peopleRaw != null){
            var people = JSON.parse(peopleRaw)
        }else{
            var people = [];
        }
    function drawTable(){
 
        
        console.log(document.querySelectorAll('table.list tbody .dinamic-content'))

        linesNow = [...document.querySelectorAll('table.list tbody .dinamic-content')]
        linesNow.forEach((element) => {
            element.remove();
        });
        for (person in people){
                document.querySelector('table.list tbody').innerHTML += 
                `<tr class="dinamic-content" style="background-color: ${((person % 2 === 0) ? '#FFF' : 'var(--listmiddle-color)' )}">
                            <td>
                                ${ people[person].name }
                            </td>
                            <td>
                                ${ people[person].tel }
                            </td>
                            <td>
                                ${ people[person].xp ? '<strong style="color: green"> Sim </strong>' : '<strong style="color: red"> Não </strong>' }
                            </td>
                            <td>
                            <button onclick="deleteUser(${person})">Delete</button>
                            <a class="change" href="./form.html?person=${person}">Change</a>    
                            </td>
                        </tr>
                `
        }
}
function deleteUser(p) {
    people.splice(p, 1); 
    drawTable();
     localStorage.setItem('people', JSON.stringify(people))
} 
drawTable()