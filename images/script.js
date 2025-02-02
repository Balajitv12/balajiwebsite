let cal = '';
      
      function calculator(value){
        cal += value
        document.getElementById('values').innerHTML=cal;
      }
      function result(){
        document.getElementById('result_display').innerHTML=`${eval(cal)}`;
      }
      function AC(){
        cal = '';
        document.getElementById('values').innerHTML=0;
        document.getElementById('result_display').innerHTML=0;
      }
      function C(){
        cal = cal.slice(0,cal.length-1);
        document.getElementById('values').innerHTML=cal;
        document.getElementById('result_display').innerHTML=0;
      }