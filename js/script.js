var generationDom = {

questions : [ "1.Вопрос №1", "2.Вопрос №2", "3.Вопрос №3" ],
answers : [ "Вариант ответа №1", "Вариант ответа №2", "Вариант ответа №3" ],

  addHeader : function (name) {
    var headText;

    headText = document.createElement( 'h3' );
    headText.innerHTML = name;
    document.body.appendChild( headText );
  },

  addNumberBlock : function () {
    var form, h2, label, input, span, inputButton ;

    form = document.createElement( 'form' );
    document.body.appendChild(form);

    for (var i = 0; i < this.questions.length; i++) {
      h2 = document.createElement( 'h2' );
      h2.innerHTML = this.questions[i];
      form.appendChild( h2 );

      for (var j = 0; j < this.answers.length; j++) {
        label = document.createElement( 'label' );
        form.appendChild( label );
        input =  document.createElement( 'input' );
        input.type = 'checkbox';
        label.appendChild( input );
        span =  document.createElement( 'span' );
        span.innerHTML = this.answers[j];
        label.appendChild( span );
      }
    }
    inputButton =  document.createElement( 'input' );
    inputButton.type = 'submit';
    inputButton.value = 'Проверить мои результаты';
    form.appendChild( inputButton );
  }
}

generationDom.addHeader('Тест по программированию');
generationDom.addNumberBlock();
