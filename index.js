document.querySelector("#push").onclick=function() 
{
    if(document.querySelector("#task input").value.length==0){
        alert("please enter a task")
}else{
    document.querySelector("#task1").innerHTML+=`
    <div class="task">
        <span id="taskname">${
            document.querySelector("#task input").value
        }
        </span>
        <button class="delete">
        Delete
        </button>
        </div>
        `;
        var current_tasks=document.querySelectorAll(".delete");
        for( var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        var tasks=document.querySelectorAll(".task");
        for(var i=0; i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.classList.toggle("completed");
            }
        }
        document.querySelector("#task input").value=""

} }
