const addBtn = document.querySelector('#addBtn');
const removeBtn = document.getElementsByClassName('removeBtn');
const radioA = document.getElementById("radioAll");
const radioB = document.getElementById("radioHouse");
const radioC = document.getElementById("radioYard");
const radioD = document.getElementById("radioJob");


radioA.checked = true;

const element = document.getElementById('datePicker');
element.valueAsNumber = Date.now()-(new Date()).getTimezoneOffset()*60000;

let todaysDate = new Date().toLocaleDateString();

function filterActivity(filterValue){
    console.log(filterValue);
    let listItems = document.querySelectorAll(".activity-list-item");
    
    listItems.forEach((listItem) => 
    {
        let itemName = listItem.querySelector(".activity-item").innerText;
        if(itemName.indexOf(filterValue) < 0)
        {
            listItem.classList.add("hide");
        }
        else
        {
            listItem.classList.remove("hide");
        }
         
    })

    
    
}

function addActivity()
{
    
    let inputActivity = document.getElementById("inputActivity").value;
    let inputCategory = document.getElementById("inputCategory").value;
    let inputDate = document.getElementById("datePicker").value;
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
    activityListItemName.classList.add("activity-item");
    activityListItemName.innerText = inputActivity;
    let activityListItemDate = document.createElement("span");
    activityListItemDate.classList.add("date-item");
    activityListItemDate.innerText = inputDate;
    if(inputDate < todaysDate){
        activityListItemDate.style.color = "red";
        activityListItemDate.innerText = inputDate + "!";
    }
    let activityListItemCategory = document.createElement("span");
    activityListItemCategory.classList.add("category-item");
    activityListItemCategory.innerText = inputCategory;

    activityListItem.appendChild(activityListItemName);
    activityListItem.appendChild(activityListItemDate);
    activityListItem.appendChild(activityListItemCategory);
    activityListItem.appendChild(removeBtn);
   
    

}


let i = 0;
for (const item of removeBtn) {
removeBtn[i].addEventListener('click', function(){
    this.parentNode.remove();
  });
  i++;
}

const activityDates = document.getElementsByClassName("date-item");
for (let i = 0; i < activityDates.length; i++){
    if(activityDates[i].innerText < todaysDate){
        activityDates[i].style.color = "red";
        activityDates[i].innerText += "!";
    }
}

function radioFilter()
{
    if(radioB.checked == true){
        const categories = document.getElementsByClassName("category-item");
        for(let i = 0; i < categories.length; i++)
        {
            console.log(categories[i]);
        }
        }
   
}
