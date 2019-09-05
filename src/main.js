import { Alphabet } from './template.js';
import 'bootstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

$(document).ready(function() {
  $("#formOne").submit(function(event){
    event.preventDefault();
    var sentenceInput = $("#sentInput").val();
    var newSentence = new Alphabet(sentenceInput);
    newSentence.naMes();
    // $("#result").append(newSentence.letter);

  });
});
