class MultipleChoice extends Question{
    constructor(type, id, content, answers){
        super(type, id, content, answers); 
    }

    render(i){
        let answersHTML = ""; 
        for (let item of this.answers){
            answersHTML += `<div>
            <input value="${item.id}" class="answer-${this.id}" type="radio" name="answer-${this.id}"  />
            <label class="lead">${item.content}</label>
          </div>`;
        }
        return `
        <div> 
        <p class="lead font-italic" style="font-size: 30px;">
          Câu ${i}: ${this.content}
        </p>
        ${answersHTML}
      </div>`; 

    }
    checkExact(){
    let inputList =   document.getElementsByClassName(`answer-${this.id}`); 
    let answerSelect = null; 
      for (let input of inputList){
        if(input.checked){
          answerSelect = input.value; 
        }
      }
      if(!answerSelect || answerSelect == null){
        return false; 
      }
      for (let answer of this.answers){
        if(answer.id === answerSelect){
          return answer.exact; 
        }
      };
      return false;
    }
    
}


