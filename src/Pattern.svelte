<script>
  export let text = {
    displayText: 'I Keep Getting Super Duper Scared, for no reason!!!!! ',
    popupText: ' '
  }
</script>
<div id = 'trapezoid'>
  {text.displayText}
  
  
</div>

<style>
  #trapezoid { /*Gotten from https://css-tricks.com/the-shapes-of-css/ */
      border-bottom: 100px solid #D7F6FE;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      height: 0;
      width: 100px;
      color: #303633;
      font-family: 'PT Sans';
      position: relative;;
     text-align: center;
    }
  #trapezoid::after{
    content: ' ';
    display: block;
    position: absolute;
    height: 5px;
    width: 150px;
    position: absolute;
    top: 98px;
    background-color: #033860;
    left:-25px;
    z-index: 3;
  }
</style>