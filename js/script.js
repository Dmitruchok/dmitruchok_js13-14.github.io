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

  var $right = ['Христофор Колумб', '1492', 'Китайцы'],
  $returnRight = [];
  console.log($returnRight);

/*var checkbox1 = $('.content-block-1').find('input'),
checkbox2 = $('.content-block-2').find('input'),
checkbox3 = $('.content-block-3').find('input');*/
$('#modal_close, #overlay').click(function () {
  $('#modal_form').animate({opacity: 1, top: '45%'},500,
  function () {
    $(this).css('display', 'none');
    $('#overlay').fadeOut(500);
  });
})

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
 $('#overlay').fadeIn(500, function () {
   $('#modal_form')
   .css('display', 'block')
   .animate({opacity: 1, top: '50%'},200);
   $('#passed').css('display', 'block');
 });
} else {
  $('#overlay').fadeIn(500, function () {
    $('#modal_form')
    .css('display', 'block')
    .animate({opacity: 1, top: '50%'},200);
    $('#not_passed').css('display', 'block');
  });
}
});
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
