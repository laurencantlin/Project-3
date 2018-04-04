function validParentheses(parens){
    while(parens.length!==0){    
      if(parens.includes("()")){ 
          parens.split("()").join("")		
      }
  }
console.log(parens.includes("()"))
console.log (parens)
}
validParentheses("()(()((()))())")