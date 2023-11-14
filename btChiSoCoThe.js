function chiSo() {
    let cao = +document.getElementById('chieuCao').value;
    let nang = +document.getElementById('canNang').value;
    let bmi = nang/(cao*cao);
    let thongbao = '';

    if (bmi < 18.5)
       thongbao = 'Underweight'
    else if (18.5<=bmi && bmi < 25)
        thongbao = 'Normal'
    else if (25<=bmi && bmi < 30)
        thongbao = 'OverWeight'
    else
        thongbao = 'Obese'

    document.getElementById('kqChiSo').innerText = thongbao + " BMI= " + bmi;
}





