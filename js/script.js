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

  var $right = ['Христофор Колумб', '1492', 'Китайцы'];
  var $returnRight = [];
  console.log($returnRight);

/*var checkbox1 = $('.content-block-1').find('input'),
checkbox2 = $('.content-block-2').find('input'),
checkbox3 = $('.content-block-3').find('input');
checkbox1.click(function checked() {
  for (var i = 0; i < checkbox1.length; i++) {
    console.log(checkbox1[i]);
    if ($('#1-variant').prop('checked')) {
      $('#2-variant').attr("disabled", true);
    }
  }
})*/

  var $TrueBlockQuestion = $('input');


 $('#button-check').on('click', function () {
   event.preventDefault();
   for (var i = 0; i < $TrueBlockQuestion.length; i++) {
     if ($($TrueBlockQuestion[i]).prop('checked')) {
       var valueText = $($TrueBlockQuestion[i]).context.value;
       for (var j = 0; j < $right.length; j++) {
         if (valueText === $right[j]) {
           $returnRight.push($right[j]);
         }
       }
     }
   }
if ($right.length === $returnRight.length) {
  alert('Тест пройден))');
} else {
  alert('Тест не пройден))');
}
 })
});


/*for (var i = 0; i < $right.length; i++) {
  for (var j = 0; j < $returnRight.length; j++) {
    if ( $right[i] === $returnRight[j]) {
      alert('Тест пройден))');
    } else {
      alert('Тест не пройден))');
    }
  }
}*/
