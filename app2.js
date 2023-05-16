//document ready / window.onload code (copied from jQuery cheatsheet)
$(() => {

  //creates a div using jQuery methods (note: div is not visibile in DOM at this point)
  const $div1 = $('<div>')
  //gives $div1 an ID of 'top-container'
  $div1.attr('id', 'top-container');
  //appends $div1 (adds to bottom) to the body. Now visbile in DOM.
  $('body').append($div1)

  //creates a second div, $div2
  const $div2 = $('<div>')
  //gives $div2 an ID of "bottom-container"
  $div2.attr('id', 'bottom-container');
  //appends $div2 to the body. Now visible in DOM.
  $('body').prepend($div2)

  //creates an h1 element
  const $h1bottom = $('<h1>')
  //adds text 'The Ice King' to new h1 element
  $h1bottom.text('The Ice King')
  //appends new h1 to the 'bottom-container' div
  $($div2).append($h1bottom)

  //creates a div for the Lumpy Space Princess img to be attached to 'bottom-container' div
  const $divimg = $('<div>')
  //adds ID of 'img-container' to div for Lumpy Space Princess img
  $divimg.attr('id', 'img-container');
  //appends $divimg with ID to 'bottom-container'
  $($div2).append($divimg)

  //creates a new div, '$divimg2' as an image element
  const $divimg2 = $('<img>')
  //attributes the image source to the new $divimg2 element
  $divimg2.attr('src', 'https://sketchok.com/images/articles/01-cartoons/028-adventure-time/08/10.jpg');
  //appends $divimg2 to the previously created $divimg div. Img info hould now be visible in DOM
  $($divimg).append($divimg2)
  //adds styles the new image (width and height of 20% of the original)
  $divimg2.css({
    width: "20%",
    height: "20%",
  })

  //creates another div to be appended to 'top-container' div: $div3
  const $div3 = $('<div>')
  //gives $div3 a class of 'couleuor'
  $div3.attr('class', 'couleur').addClass('rouge')
  //appends $div3 to the 'top-container' div
  $($div1).append($div3)

  //repeat steps from $div3 to make $div4 and append it to the same 'top-container' div
  const $div4 = $('<div>')
  $div4.attr('class', 'couleur').addClass('blanc')
  $($div1).append($div4)

  //repeat same steps again to make $div5 and append it to the same 'top-container' div
  const $div5 = $('<div>')
  $div5.attr('class', 'couleur').addClass('blue')
  $($div1).append($div5)

  //create an h1 element
  const $h1 = $('<h1>')
  //gives the h1 element text
  $h1.text('Three colors: red, black, and orange');
  //adds the new h1 the top of the list of nodes underneath 'top-container'
  $($div1).prepend($h1)

  //syntax for styling based on class. In this class the class is 'couleur' and
  $('.couleur').css({
    background: "dimgrey",
    width: "200px",
    height: "200px",
    display: "inline-block",
  })

  //syntax for styling based on class again, in this case 'rouge'
  $('.rouge').css({
    background: "firebrick",
  })

  //again styling based on class
  $('.blanc').css({
    background: "ivory",
  })

  //more styling based on class
  $('.blue').css({
    background: "cornflowerblue",
  })

  //syntax for styling based on element, in this case the element selected in $div4
  $($div4).css({
    background: "black",
  })

  //more styling based on element, in this case $div5 is the the element selected
  $($div5).css({
    background: "orange",
  })

  //closing brackets/parenthesis of window.onload code
});