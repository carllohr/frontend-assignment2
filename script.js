const addBtn = document.querySelector('#addBtn');
const removeBtn = document.getElementById("removeBtn");

const element = document.getElementById('datePicker');
element.valueAsNumber = Date.now()-(new Date()).getTimezoneOffset()*60000;

function filterActivity(){
    let inputFilter = document.getElementById("inputFilter");   
}

function addActivity()
{
    
    let inputActivity = document.getElementById("inputActivity").value;
    let inputCategory = document.getElementById("inputCategory").value;
    let activityListEl = document.getElementById("a-content");

    

    let activityListItem = document.createElement("div");
    activityListItem.classList.add("activity-list-item");
    activityListEl.appendChild(activityListItem);

    let removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";    
    removeBtn.addEventListener("click", function(){
        this.parentNode.remove();
    });


    let activityListItemName = document.createElement("span");
    activityListItemName.innerText = inputActivity;
    let activityListItemDate = document.createElement("span");
    activityListItemDate.innerText = element.value;
    let activityListItemCategory = document.createElement("span");
    activityListItemCategory.innerText = inputCategory;

    activityListItem.appendChild(activityListItemName);
    activityListItem.appendChild(activityListItemDate);
    activityListItem.appendChild(activityListItemCategory);
    activityListItem.appendChild(removeBtn);
   
    

}

removeBtn.addEventListener("click", function(){
    this.parentNode.remove();
});



