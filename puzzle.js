let inputlist = document.querySelectorAll('input')
let inputArray = Array.from(inputlist)
console.log(inputArray); 

let arr = []
let cnt = 0

for (let i = 0; i < 100 ; i++) {
        let randomNumber = (Math.floor(Math.random() * 8 + 1))

        if(!arr.includes(randomNumber)){
                cnt++
                if(cnt <= 8){
                        arr.push(randomNumber)
                }
        }
}

// console.log(arr);

inputArray.forEach((input,index) => {
        // console.log(input,index);

        if(index != 8){
                input.value = arr[index] 
        }
})
// console.log(inputArray);

function function1() {
        a = document.getElementById('bt1').value
        b = document.getElementById('bt2').value
        c = document.getElementById('bt4').value

        if(b == ''){
                document.getElementById('bt2').value = a
                document.getElementById('bt1').value = ''
        }
        else if (c == '') {
                document.getElementById('bt4').value = a
                document.getElementById('bt1').value = ''
        }
}

function function2() {
        a = document.getElementById('bt1').value
        b = document.getElementById('bt2').value
        c = document.getElementById('bt3').value
        d = document.getElementById('bt5').value

        if(a == ''){
                document.getElementById('bt1').value = b
                document.getElementById('bt2').value = ''
        }
        else if(c == '') {
                document.getElementById('bt3').value = b
                document.getElementById('bt2').value = ''
        }
        else if(d == '') {
                document.getElementById('bt5').value = b
                document.getElementById('bt2').value = ''
        }
}

function function3() {
        a = document.getElementById('bt2').value
        b = document.getElementById('bt3').value
        c = document.getElementById('bt6').value   

        if(a == ''){
                document.getElementById('bt2').value = b
                document.getElementById('bt3').value = ''
        }
        else if (c == '') {
                document.getElementById('bt6').value = b
                document.getElementById('bt3').value = ''
        }
}

function function4() {
        a = document.getElementById('bt1').value
        b = document.getElementById('bt4').value
        c = document.getElementById('bt5').value
        d = document.getElementById('bt7').value

        if(a == ''){
                document.getElementById('bt1').value = b
                document.getElementById('bt4').value = ''
        }
        else if(c == '') {
                document.getElementById('bt5').value = b
                document.getElementById('bt4').value = ''
        }
        else if(d == '') {
                document.getElementById('bt7').value = b
                document.getElementById('bt4').value = ''
        }
}

function function5() {
        a = document.getElementById('bt2').value
        b = document.getElementById('bt4').value
        c = document.getElementById('bt5').value
        d = document.getElementById('bt6').value
        e = document.getElementById('bt8').value

        if(a == ''){
                document.getElementById('bt2').value = c
                document.getElementById('bt5').value = ''
        }
        else if(b == '') {
                document.getElementById('bt4').value = c
                document.getElementById('bt5').value = ''
        }
        else if(d == '') {
                document.getElementById('bt6').value = c
                document.getElementById('bt5').value = ''
        }
        else if(e == '') {
                document.getElementById('bt8').value = c
                document.getElementById('bt5').value = ''
        }
}

function function6() {
        a = document.getElementById('bt3').value
        b = document.getElementById('bt5').value
        c = document.getElementById('bt6').value
        d = document.getElementById('bt9').value

        if(a == ''){
                document.getElementById('bt3').value = c
                document.getElementById('bt6').value = ''
        }
        else if(b == '') {
                document.getElementById('bt5').value = c
                document.getElementById('bt6').value = ''
        }
        else if(d == '') {
                document.getElementById('bt9').value = c
                document.getElementById('bt6').value = ''
        }
}

function function7() {
        a = document.getElementById('bt4').value
        b = document.getElementById('bt7').value
        c = document.getElementById('bt8').value

        if(a == ''){
                document.getElementById('bt4').value = b
                document.getElementById('bt7').value = ''
        }
        else if (c == '') {
                document.getElementById('bt8').value = b
                document.getElementById('bt7').value = ''
        }
}

function function8 () {
        let a = document.getElementById('bt5').value
        let b = document.getElementById('bt7').value
        let c = document.getElementById('bt8').value
        let d = document.getElementById('bt9').value

        if(d == ''){
                document.getElementById('bt9').value = c
                document.getElementById('bt8').value = ''
        }
        else if(b == '') {
                document.getElementById('bt7').value = c
                document.getElementById('bt8').value = ''
        }
        else if(a == '') {
                document.getElementById('bt5').value = c
                document.getElementById('bt8').value = ''
        }



}

function function9() {
        a = document.getElementById('bt6').value
        b = document.getElementById('bt8').value
        c = document.getElementById('bt9').value

        if(a == ''){
                document.getElementById('bt6').value = c
                document.getElementById('bt9').value = ''
        }
        else if (b == '') {
                document.getElementById('bt8').value = c
                document.getElementById('bt9').value = ''
        }
}

function resetGame() {
        location.reload()
}