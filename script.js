function hitungLuas() {
    var alas = parseFloat(document.getElementById('alas').value);
    var tinggi = parseFloat(document.getElementById('tinggi').value);

    if (!alas || !tinggi || alas <= 0 || tinggi <= 0) {
        alert("Masukkan nilai alas dan tinggi yang valid.");
        return;
    }

    var stepsElement = document.getElementById('steps');
    if (stepsElement) {
        stepsElement.remove();
    }

    stepsElement = document.createElement('div');
    stepsElement.id = 'steps';
    var hitungluasDiv = document.querySelector('.hitungluas');
    hitungluasDiv.appendChild(stepsElement);

    var langkah1 = document.createElement('p');
    langkah1.textContent = "L = 1/2 × alas × tinggi";
    stepsElement.appendChild(langkah1);

    var langkah2 = document.createElement('p');
    langkah2.textContent = "L = 1/2 × " + alas + " × " + tinggi;
    stepsElement.appendChild(langkah2);

    var luas = 1/2 * alas * tinggi;

    var langkah3 = document.createElement('p');
    langkah3.textContent = "L = " + luas;
    stepsElement.appendChild(langkah3);

    document.getElementById('luas').value = luas;
}

function resetLuas() {
    document.getElementById('alas').value = '';
    document.getElementById('tinggi').value = '';
    document.getElementById('luas').value = '';

    var stepsElement = document.getElementById('steps');
    if (stepsElement) {
        stepsElement.remove();
    }
}

function hitungKeliling() {
    var sisi1 = parseFloat(document.getElementById('sisi1').value);
    var sisi2 = parseFloat(document.getElementById('sisi2').value);
    var sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (!sisi1 || !sisi2 || !sisi3 || sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
        alert("Masukkan nilai sisi yang valid.");
        return;
    }

    var keliling = sisi1 + sisi2 + sisi3;

    var stepsElement = document.getElementById('steps-keliling');
    if (stepsElement) {
        stepsElement.remove();
    }

    stepsElement = document.createElement('div');
    stepsElement.id = 'steps-keliling';
    var hitungkelDiv = document.querySelector('.hitungkel');
    hitungkelDiv.appendChild(stepsElement);


    var langkah2 = document.createElement('p');
    langkah2.textContent = "K = S1 + S2 + S3";
    stepsElement.appendChild(langkah2);

    var langkah3 = document.createElement('p');
    langkah3.textContent = "K = " + sisi1 + " + " + sisi2 + " + " + sisi3;
    stepsElement.appendChild(langkah3);

    var langkah4 = document.createElement('p');
    langkah4.textContent = "K = " + keliling;
    stepsElement.appendChild(langkah4);

    document.getElementById('keliling').value = keliling;
}

function resetKeliling() {
    document.getElementById('sisi1').value = '';
    document.getElementById('sisi2').value = '';
    document.getElementById('sisi3').value = '';
    document.getElementById('keliling').value = '';

    var stepsElement = document.getElementById('steps-keliling');
    if (stepsElement) {
        stepsElement.remove();
    }
}


