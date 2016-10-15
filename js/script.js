'use strict;'
$(function () {
  var html = $('#test-question').html();

  var questionsAnswers = [
  {
    question: '1. Кто открыл Америку?',
    answer1: 'Христофор Колумб',
    answer2: 'Джеймс Кук',
    answer3: 'Виллем Янц'
  },

  {
  question: '2. В каком году было открытие Америки?',
  answer1: '1945',
  answer2: '1492',
  answer3: '1476'
},

{
  question: '3. По предположениям, кто открыл Америку за 70 лет до ее открытия?',
  answer1: 'Китайцы',
  answer2: 'Немцы',
  answer3: 'Индейцы'
}
];
console.log(questionsAnswers);

  var content = tmpl(html, {
    data: questionsAnswers
  });

  $('body').append(content);

});
