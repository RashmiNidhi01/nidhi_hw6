function insertlink() {
    const new_link = document.createElement("li");
    new_link.innerHTML="<a href='https://www.csulb.edu/college-of-business'>College of Business</a>"
    const list = document.getElementById("links");
    list.insertBefore(new_link,list.childNodes[2]);
    }
    insertlink();   