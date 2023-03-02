let barbers = document.querySelector(".barbers");

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
        var range = e.createTextRange();
        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select()
    }
}

function mask(e) {
    let matrix = this.placeholder,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
        return val.charAt(i++) || "_"
    });
    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
}

let phoneInput = document.querySelector(".phoneInput")


phoneInput.addEventListener("click", function () {
    let input = document.querySelector("#online_phone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(3, input);
});

class Barber {
    constructor(photo, name, ph1, ph2, ph3, ph4, ph5, ph6, ph7, ph8) {
        this.photo = photo;
        this.name = name;
        this.ph1 = ph1;
        this.ph2 = ph2;
        this.ph3 = ph3;
        this.ph4 = ph4;
        this.ph5 = ph5;
        this.ph6 = ph6;
        this.ph7 = ph7;
        this.ph8 = ph8;
        this.div = null;
    }

    createIn() {
        this.div = document.createElement("div");
        this.div.classList.add("barberCard");

        let descr1 = "Description of the master, his education, achievements and merits";
        let descr2 = "Description of the styles and specializations of the master";

        let newHtml =
            `<div class='barberHead flexable'>
            <img src="${this.photo}" alt="" class="barberPhoto">
            <p class="barberName">${this.name}</p>
            <p class="barberDescr1">${descr1}</p>
            <p class="barberDescr1">${descr2}</p>
        </div>
        <div class="portfolio flexable">
            <img src="${this.ph1}" alt="portfolioPhoto" class="portfolioPhoto">
            <img src="${this.ph2}" alt="portfolioPhoto" class="portfolioPhoto">
            <img src="${this.ph3}" alt="portfolioPhoto" class="portfolioPhoto">
            <img src="${this.ph4}" alt="portfolioPhoto" class="portfolioPhoto">
            <img src="${this.ph5}" alt="portfolioPhoto" class="portfolioPhoto">
            <img src="${this.ph6}" alt="portfolioPhoto" class="portfolioPhoto">
            <img src="${this.ph7}" alt="portfolioPhoto" class="portfolioPhoto">
            <img src="${this.ph8}" alt="portfolioPhoto" class="portfolioPhoto">
        </div>
        <button class="seeAllBtn"><img src="./img/seeAll.png" alt="" class="seeAllImg">See all works</button>`;

        this.div.innerHTML = newHtml;
        barbers.append(this.div);

        let btns = document.querySelectorAll(".seeAllBtn");
        let portfolios = document.querySelectorAll(".portfolio");

        for (let i = 1; i <= btns.length; i++) {
            btns[i - 1].addEventListener("click", () => {
                portfolios[i - 1].innerHTML = `<img src="./img/barber` + [i] + `/photo1.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo2.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo3.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo4.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo5.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo6.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo7.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo8.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo1.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo2.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo3.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo4.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo5.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo6.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo7.png" alt="portfolioPhoto" class="portfolioPhoto">
                <img src="./img/barber`+ [i] + `/photo8.png" alt="portfolioPhoto" class="portfolioPhoto">`

                this.div.removeChild(btns[i - 1]);
            });

        }

    }
}


let barber1 = new Barber(
    "./img/barber1/barberPhoto.png",
    "Devon Lane",
    "./img/barber1/photo1.png",
    "./img/barber1/photo2.png",
    "./img/barber1/photo3.png",
    "./img/barber1/photo4.png",
    "./img/barber1/photo5.png",
    "./img/barber1/photo6.png",
    "./img/barber1/photo7.png",
    "./img/barber1/photo8.png"
);
barber1.createIn();

let barber2 = new Barber(
    "./img/barber2/barberPhoto.png",
    "Ronald Richards",
    "./img/barber2/photo1.png",
    "./img/barber2/photo2.png",
    "./img/barber2/photo3.png",
    "./img/barber2/photo4.png",
    "./img/barber2/photo5.png",
    "./img/barber2/photo6.png",
    "./img/barber2/photo7.png",
    "./img/barber2/photo8.png"
);
barber2.createIn();

let barber3 = new Barber(
    "./img/barber3/barberPhoto.png",
    "Jane Cooper",
    "./img/barber3/photo1.png",
    "./img/barber3/photo2.png",
    "./img/barber3/photo3.png",
    "./img/barber3/photo4.png",
    "./img/barber3/photo5.png",
    "./img/barber3/photo6.png",
    "./img/barber3/photo7.png",
    "./img/barber3/photo8.png"
);


barber3.createIn();