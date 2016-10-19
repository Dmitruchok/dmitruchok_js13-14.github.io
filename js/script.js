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
  var $right = ['Христофор Колумб', '1492', 'Китайцы'];
  var $returnRight = [];
  var $mass = [];
  console.log($mass);
  for (var i = 0; i < $right.length; i++) {
    for (var j = 0; j < $returnRight.length; j++) {
      console.log(i);
      if ($right[i] == returnRight[j]) {
          $mass.push($right[i]);
      }
    }
  }

  var $oneTrueBlockQuestion = $('.content-block-1').find('input'),
 $twoTrueBlockQuestion = $('.content-block-2').find('input'),
 $threeTrueBlockQuestion = $('.content-block-3').find('input');


  $('#button-check').on('click', function () {
    event.preventDefault();
    for (var i = 0; i < $oneTrueBlockQuestion.length; i++) {
      if ($($oneTrueBlockQuestion[i]).prop('checked')) {
        $returnRight.push($($oneTrueBlockQuestion[i]).context.value);
      }
    }
  });

});
