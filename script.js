/**
 * Never Give Up!
 */
$( document ).ready(function() {
   // alert("works");

    document.getElementById("one").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("one").innerHTML;
    }, false);

    document.getElementById("two").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("two").innerHTML;
    }, false);

    document.getElementById("three").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("three").innerHTML;
    }, false);


    document.getElementById("four").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("four").innerHTML;
    }, false);


    document.getElementById("five").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("five").innerHTML;
    }, false);

    document.getElementById("six").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("six").innerHTML;
    }, false);

    document.getElementById("seven").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("seven").innerHTML;
    }, false);


    document.getElementById("eight").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("eight").innerHTML;
    }, false);

    document.getElementById("nine").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("nine").innerHTML;
    }, false);

    document.getElementById("zero").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("zero").innerHTML;
    }, false);

    document.getElementById("plus").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("plus").innerHTML;
    }, false);

    document.getElementById("subtract").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("subtract").innerHTML;
    }, false);

    document.getElementById("multiply").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("multiply").innerHTML;
    }, false);

    document.getElementById("divide").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("divide").innerHTML;
    }, false);

    document.getElementById("point").addEventListener('click', function() {
        document.getElementById("result").innerHTML = document.getElementById("result").innerHTML+document.getElementById("point").innerHTML;
    }, false);

    document.getElementById("c").addEventListener('click', function() {
        document.getElementById("result").innerHTML = "";
    }, false);

    document.getElementById("equals").addEventListener('click', function() {
        result.textContent = eval(result.textContent);
    }, false);


});