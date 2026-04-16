const tasks = document.getElementById("tasks")

async function getAll() {
    const res = await fetch("http://localhost:3000/tasks")
    const data = await res.json()
    return data
}

async function showLists() {
    const listTasks = await getAll()
    listTasks.forEach((task) => {
        const pName = document.createElement("p")
        pName.appendChild(document.createTextNode(`שם: ${task.name}`))
        const pAgent = document.createElement("p")
        pAgent.appendChild(document.createTextNode(`סוכן: ${task.agent}`))
        const pArea = document.createElement("p")
        pArea.appendChild(document.createTextNode(`אזור: ${task.area}`))
        const pDetails = document.createElement("p")
        pDetails.appendChild(document.createTextNode(`פרטים: ${task.details}`))
        const setTasks = document.createElement("div")
        const comUnc = document.createTextNode("הושלם/לא הושלם")
        const icon = document.createTextNode("✅")
        const pIcon = document.createElement("p")
        pIcon.appendChild(icon)
        const oneTask = document.createElement("div")
        pIcon.addEventListener("click", async () => {
            if (!task.setTask) {
                oneTask.classList = "oneMission yes"
                task.setTask = true
            } else {
                oneTask.classList = "oneMission"
                task.setTask = false
            }
            await fetch(`http://localhost:3000/tasks/${task._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task)
            })
        })
        setTasks.appendChild(comUnc)
        setTasks.appendChild(pIcon)
        const deleteTasks = document.createElement("div")
        const pDel = document.createElement("p")
        deleteTasks.appendChild(document.createTextNode("מחק"))
        pDel.appendChild(document.createTextNode("❌"))
        pDel.addEventListener("click", async () => {
            await fetch(`http://localhost:3000/tasks/${task._id}`, {
                method: "DELETE"
            })
            tasks.innerHTML = ""
            showLists()
        })

        deleteTasks.appendChild(pDel)
        pName.classList = "p"
        pAgent.classList = "p"
        pArea.classList = "p"
        pDetails.classList = "p"
        pDel.classList = "p"
        setTasks.classList = "set"
        deleteTasks.classList = "set"
        console.log(task.setTask);
        if (!task.setTask) {
            oneTask.classList = "oneMission"
        } else {
            oneTask.classList = "oneMission yes"
        }
        const headDiv = document.createElement("div")
        const setDel = document.createElement("div")
        const utils = document.createElement("div")
        const foterTask = document.createElement("div")
        headDiv.appendChild(pName)
        headDiv.appendChild(pAgent)
        headDiv.appendChild(pArea)
        oneTask.appendChild(headDiv)
        oneTask.appendChild(pDetails)
        foterTask.appendChild(setDel)
        foterTask.appendChild(deleteTasks)
        utils.appendChild(foterTask)
        oneTask.appendChild(utils)
        setDel.appendChild(setTasks)
        foterTask.classList = "fotMis"
        utils.classList = "foter"
        headDiv.classList = "headDiv"
        tasks.appendChild(oneTask)
    })
}


function submitList() {
    const submit = document.getElementById("submit");
    submit.addEventListener("click", async (e) => {
        e.preventDefault();
        const nameVal = document.getElementById("name").value;
        const agentVal = document.getElementById("agent").value;
        const areaVal = document.getElementById("area").value;
        const detailsVal = document.getElementById("details").value;
        const newTask = {
            name: nameVal,
            agent: agentVal,
            area: areaVal,
            details: detailsVal,
            setTask: false
        };
        await fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTask)
        });
        tasks.innerHTML = "";
        await showLists();
    });
}


function hideList() {
    const hide = document.getElementById("hide")
    hide.addEventListener("click", () => {
        tasks.className = "none"
    })
}

function viewTasks() {
    const hide = document.getElementById("view")
    hide.addEventListener("click", () => {
        tasks.className = "block"
    })
}

function delAll() {
    const del = document.getElementById("delAll")
    del.addEventListener("click", async () => {
        await fetch(`http://localhost:3000/tasks`, {
            method: "DELETE"
        })
        tasks.innerHTML = ""
    })

}

submitList()
hideList()
viewTasks()
delAll()
showLists()


