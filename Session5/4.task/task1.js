var task;
(function (task_1) {
    var frmTask = document.querySelector('#frmTask');
    var ulTasks = document.querySelector('#ulTasks');
    var txtTask = document.querySelector('#txtTask');
    frmTask.onsubmit = function () {
        var task = txtTask.value;
        var liTask = document.createElement('li');
        liTask.innerHTML = task;
        ulTasks.appendChild(liTask);
        txtTask.value = "";
        txtTask.focus();
        return false;
    };
})(task || (task = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzazEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0YXNrMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLElBQUksQ0FtQmI7QUFuQkQsV0FBVSxNQUFJO0lBRVYsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQW9CLENBQUM7SUFDcEUsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXFCLENBQUM7SUFDckUsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQXFCLENBQUM7SUFFckUsT0FBTyxDQUFDLFFBQVEsR0FBRztRQUNmLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFekIsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUV4QixPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTVCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVoQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDLENBQUM7QUFDTixDQUFDLEVBbkJTLElBQUksS0FBSixJQUFJLFFBbUJiIn0=