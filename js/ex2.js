const displayText400 = () => {
    const existingElements = document.getElementsByClassName("400level");
        for (const text of existingElements) {
            console.log(text.textContent);
        }   
    }
    displayText400();
    