namespace task{

    let frmTask = document.querySelector('#frmTask') as HTMLFormElement;
    let ulTasks = document.querySelector('#ulTasks') as HTMLUListElement;
    let txtTask = document.querySelector('#txtTask') as HTMLInputElement;

    frmTask.onsubmit = () => {
        let task = txtTask.value;
        
        let liTask = document.createElement('li');
        liTask.innerHTML = task;

        ulTasks.appendChild(liTask);

        txtTask.value = "";
        txtTask.focus();
        
        return false;
    };
}