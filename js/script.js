'use strict;'
$(function () {
  var $html = $('#test-question').html();

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

localStorage.setItem('answerQuestion', JSON.stringify(questionsAnswers) );

var $testBlock = localStorage.getItem('answerQuestion');
$testBlock = JSON.parse($testBlock);

  var content = tmpl($html, {
    data: $testBlock
  });

  $('body').append(content);

  var $variant = $('#one-variant');
  var $result = false;

  var $oneTrueBlockQuestion = $('.content-block-1').find('input'),
 $twoTrueBlockQuestion = $('.content-block-2').find('input'),
 $threeTrueBlockQuestion = $('.content-block-3').find('input');


  console.log($oneTrueBlockQuestion[2]);


  $('#button-check').on('click', function () {
    event.preventDefault();
      if ($oneTrueBlockQuestion.prop('checked')) {
        alert('Тест Пройден');
      }
    });

});
