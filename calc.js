let one = '';
let two = '';
let sign = '';
let finish = false;

const digit = ['0', '1','2','3','4','5','6','7','8','9', '.'];
const action = ['-','+','X','/'];

const out = document.querySelector(".display p");


document.querySelector(".buttons").addEventListener("click", function (event) {
    // кнопка не нажата
    if (!event.target.classList.contains('btn')) {
        console.log(0);
        return;
    }
    // кнопка нажата
    if (event.target.classList.contains('ac')) {
        let one = '';
        let two = '';
        let sign = '';
        let finish = false;
        out.textContent = '';
        return;
    }

    out.textContent = '';
    // получение нажатой кнопкой
    const key = event.target.textContent;

    // нажата ли кнопка
    if (digit.includes(key)) {
        if (two === '' && sign === '') {
        one+= key;
        out.textContent = one;
        } else if (one!== '' &&  two!== '' && finish) {
            two = key;
            finish = false;
            out.textContent = two;
        }
        else { 
            two+= key;
            out.textContent = two;
        }
        console.log(one,two,sign);
        return;
    }
    
    // если нажато действие
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(one,two,sign);
        return;
    }

    // если нажато =
    if (key === '=') {
        switch (sign) {
            case "+":
                one = (+one) + (+two);
                break;
            case "-":
                one = one - two;
                break;
            case "X":
                one = one * two;
                break;
            case "/":
                if (two === '0') {
                    out.textContent = 'Ошибка';
                    one = '';
                    two = '';
                    sign = '';
                    return;
                }
                one = one / two;
                break;
        }
        finish = true;
        out.textContent = one;
        console.log(one,two,sign);
    }

})