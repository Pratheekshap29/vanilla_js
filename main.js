const form=document.getElementById("addForm");
const items=document.getElementById("items");
const filter=document.getElementById("filter");


form.addEventListener('submit',addItem);
items.addEventListener('click',deleteItem);
filter.addEventListener('keyup',filterItem);

function addItem(e)
{
    e.preventDefault();
    
    const item=document.getElementById("additem");

    const li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(item.value));
    
    const btn=document.createElement('button');
    btn.className="btn-close float-end";
    li.appendChild(btn);
    items.appendChild(li);

    item.value="";
}

function deleteItem(e)
{
    if(e.target.classList.contains("btn-close"))
    {
        if(confirm('Are you sure you want to delete?'))
        {
            const deleteList=e.target.parentElement;
            items.removeChild(deleteList);
        }
    }
}

function filterItem(e)
{
    const allItems=items.children;
    //convert HTMLCollection to Array
    Array.from(allItems).forEach((item)=>{
        if(item.textContent.toLowerCase().indexOf(e.target.value.toLowerCase())!=-1)
        {
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    });

}