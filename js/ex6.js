const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];
  
  const d_element=document.createElement("dl");
  for(const letters of words){
      const t_element=document.createElement("dt");
      const def_element=document.createElement("dd");
      t_element.textContent=letters.term;
      d_element.appendChild(t_element).style.fontWeight="bold";
      def_element.textContent=letters.definition;
      d_element.appendChild(def_element);  
  }
document.getElementById("content").appendChild(d_element);