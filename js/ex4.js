const t_element = document.createElement("Table");
for (i=1;i<=12;i++) {
    const tr_element = document.createElement("tr");
    const td_element = document.createElement("td");
    td_element.innerText = i;
    if(i%4==0) {
        td_element.style.backgroundColor = "lightblue";
    }
    tr_element.appendChild(td_element);
    t_element.appendChild(tr_element);
};
const divElement = document.getElementById("output");
divElement.appendChild(t_element);