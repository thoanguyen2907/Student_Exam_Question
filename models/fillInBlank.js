class FillInBlank extends Question{
    constructor(type, id, content, answers){
        super(type, id, content, answers); 
    }

    render(i){
        return `
        <div>
        <p class="lead font-italic" style="font-size: 30px;">
          Câu ${i}: ${this.content}
        </p>
        <input type="text" id = "answer-${this.id}" class="form-control w-50"/>
      </div>
      `;      
    }
    checkExact(){
        let content = document.getElementById(`answer-${this.id}`).value; 
        content = content.toLowerCase().trim(); 
        if(content === this.answers[0].content.toLowerCase().trim()){
            return true; 
        }
        return false; 
    }
}