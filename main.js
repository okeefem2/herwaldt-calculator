            // use the variables below to run Math function
            let val1;
            let val2;
            let op;

        function inputNum(number) {
            //if value is 0 then it is replaced by selected value. Otherwise adds to display value
            if(document.getElementById("calc").value==0 || isNaN(document.getElementById("calc").value) ){
                if(document.getElementById("calc").value == 0 + "."){
                    //nested if to account for 0. being treated as NaN
                    document.getElementById("calc").value = document.getElementById("calc").value + number;
                }else{
                    document.getElementById("calc").value = number;
                }
            }else{
            document.getElementById("calc").value = document.getElementById("calc").value + number;
            }
        }

        function allClearNum(){
            //clears input to 0 and clears all variables
            document.getElementById("calc").value = 0;
            val1 =undefined;
            val2 =undefined;
            op = undefined;
        }

        function makeNeg(){
            if(document.getElementById("calc").value==0 || isNaN(document.getElementById("calc").value) ){
                //allows a leading 0 with decimal to happen
                document.getElementById("calc").value = 0;
            }else{
            document.getElementById("calc").value = "-" + document.getElementById("calc").value;
            }
        }


        function clearNum(){
            document.getElementById("calc").value = 0;
        }

        function decimal(){
            if(document.getElementById("calc").value==0 || isNaN(document.getElementById("calc").value) ){
                //allows a leading 0 with decimal to happen
                document.getElementById("calc").value = 0 + ".";
            }else{
                if(document.getElementById("calc").value.includes('.')){
                    //stops user from entering multiple decimals
                    document.getElementById("calc").value=document.getElementById("calc").value;
                } else{
                    //adds decimal to end of value
                    document.getElementById("calc").value = document.getElementById("calc").value + ".";
                }
            }
        }

        function myOperator(myOp){
            if(op !== undefined && val1 !== undefined){
                //skip to calculate if val1 and op are defined
                calculate();
            } else{
                if(op==undefined){
                    //sets val1 to what is currently inputted. sets operator to user selected option
                    val1 = document.getElementById("calc").value;
                    op=myOp;
                    document.getElementById("calc").value = myOp;
                } else {
                    //overides previous operation in case user deviates from original selected operator
                    op=myOp;
                    document.getElementById("calc").value = myOp;
                }
            }
        }

        function calculate(){
            if(val1 == undefined || op == undefined || isNaN(document.getElementById("calc").value)){
                //do nothing if all variables are not defined or input value is not a number.
                    //!!!Val2 is equal is in the input field at time of calculation
            } else {
                document.getElementById("calc").value = "...Loading answer";
                val1 =undefined;
                val2 =undefined;
                op = undefined;
            }
        }