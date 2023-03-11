export class CommonQuestion {
    constructor () {
        this._commonQuestionList = document.querySelectorAll('.common__question-title');

        this._commonQuestionEventListener();
    }

    _commonQuestionEventListener () {
        this._commonQuestionList.forEach( commonQuestion => {
            commonQuestion.addEventListener('click', (event) => {
                this._toggleAnswer(event.target.nextElementSibling);
            });
        });
    }

    _toggleAnswer(containerAnswer) {
        if (containerAnswer.clientHeight > 0) {
            containerAnswer.style.height = "0";
            return
        }

        containerAnswer.style.height = "auto"; 
    }
}
