const onehash =
    "e848f0a15a51ff12d35f60ee7d1f44fdd41b46fa04a66427a369bf4a351564d3";
const twohash =
    "ab9ebc8b74469a10ebf19bf604f76c6c99b4be5896343b3a0893446454693f94";

const text = [
    "Маленький мир, для моего котенка",
    "Фон будет черным, как ты любишь,",
    "А второй цвет выберу я...",
    "Мой любимый цвет - цвет твоих глаз",
    "В этом сборнике воспоминаний",
    "Не будет",
    "Черешни",
    "Страшных призраков",
    "Высоты",
    "Но будут",
    "Настоящие сокровища",
    "За день до этого...",
    "У меня бабочки в животе...",
    "Давай пообещаем...",
    "Я обещаю...",
    "Котенок, скажи любую фразу",
    "Скоро ты её увидишь и улыбнешься",
];

const slideOne = document.getElementsByClassName("slideOne")[0];
const slideTwo = document.getElementsByClassName("slideTwo")[0];
const slideThree = document.getElementsByClassName("slideThree")[0];
const slideFour = document.getElementsByClassName("slideFour")[0];
const slideFive = document.getElementsByClassName("slideFive")[0];
const slideSix = document.getElementsByClassName("slideSix")[0];
const slideEight = document.getElementsByClassName("slideEight")[0];
const slideTenText = document.getElementsByClassName("slideTenText")[0];
const slideEleven = document.getElementsByClassName("slideEleven")[0];

const heartImgOne = document.getElementsByClassName("heartImgOne")[0];
const heartImgTwo = document.getElementsByClassName("heartImgTwo")[0];
const youMeWorld = document.getElementsByClassName("youMeWorld")[0];
const blockFoot = document.getElementsByClassName("blockFoot")[0];

const slideSeven = document.getElementsByClassName("slideSeven")[0];
const textOneslideSeven = document.getElementsByClassName("textOneslideSeven")[0];
const textTwoslideSeven = document.getElementsByClassName("textTwoslideSeven")[0];
const textThreeslideSeven = document.getElementsByClassName("textThreeslideSeven")[0];
const textFourOneslideSeven = document.getElementsByClassName("textFourOneslideSeven")[0];
const textFiveOneslideSeven = document.getElementsByClassName("textFiveOneslideSeven")[0];
const slideNine = document.getElementsByClassName("slideNine")[0];
const slideTen = document.getElementsByClassName("slideTen")[0];

const title = document.getElementsByClassName("title")[0];


const memories = document.getElementsByClassName("memories")[0];
const blockNotBe = document.getElementsByClassName("blockNotBe")[0];
const be = document.getElementsByClassName("be")[0];
const realTreasures = document.getElementsByClassName("realTreasures")[0];
const theFirstHearts = document.getElementsByClassName("theFirstHearts")[0];
const butterflyOne = document.getElementsByClassName("butterflyOne")[0];
const butterflyTwo = document.getElementsByClassName("butterflyTwo")[0];

const foot = document.getElementById("foot");

const textSlideTwo = document.getElementById("textSlideTwo");
const textSlideOneThree = document.getElementById("textSlideOneThree");
const textSlideTwoThree = document.getElementById("textSlideTwoThree");
const svgSlideThree = document.getElementById("svgSlideThree");
const textSlideThreeThree = document.getElementById("textSlideThreeThree");
const svgShadow = document.getElementById("svgShadow");
const date = document.getElementById("date");
const promise = document.getElementById("promise");
const starTop = document.getElementById("starTop");
const starBottom = document.getElementById("starBottom");


const loveCart = document.getElementById("loveCart");
const heartBackground = document.getElementById("heartBackground");
const backgroundWrapper = document.getElementById("background-wrapper");
const butterfliesInTheStomach = document.getElementById("butterfliesInTheStomach");

slideTwo.style.display = "none";
slideThree.style.display = "none";
slideFour.style.display = "none";
slideFive.style.display = "none";
slideSix.style.display = "none";
svgSlideThree.style.display = "none";
loveCart.style.display = "none";
heartImgOne.style.display = "none";
heartImgTwo.style.display = "none";
theFirstHearts.style.display = "none";
butterfliesInTheStomach.style.display = "none";
butterflyOne.style.display = "none";
butterflyTwo.style.display = "none";
promise.style.display = "none";
youMeWorld.style.display = "none";

slideSeven.style.display = "none";


foot.style.opacity = "0";
svgSlideThree.style.opacity = "0";
loveCart.style.opacity = "0";
heartBackground.style.opacity = "0";
heartImgOne.style.opacity = "0";
heartImgTwo.style.opacity = "0";
date.style.opacity = "0";
svgShadow.style.opacity = "0";
theFirstHearts.style.opacity = "0";
butterfliesInTheStomach.style.opacity = "0";
butterflyOne.style.opacity = "0";
butterflyTwo.style.opacity = "0";
promise.style.opacity = "0";
youMeWorld.style.opacity = "0";

async function hashPassworld(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function typeText(element, text, startDelay = 0, perCharDelay = 55) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            element.textContent += text[i];
        }, startDelay + i * perCharDelay);
    }
    return startDelay + text.length * perCharDelay;
}

function actionSlideTwo() {
    slideTwo.style.display = "flex";
    textSlideTwo.textContent = "";

    typeText(textSlideTwo, text[0]);

    setTimeout(() => {
        foot.style.opacity = "1";
    }, 3500);

    const onClick = () => {
        numberClick = true;
        foot.removeEventListener("click", onClick);
        setTimeout(() => {
            slideTwo.style.opacity = "0";

            setTimeout(() => {
                slideTwo.style.display = "none";
            }, 500);
            actionSlideThree();
        }, 500);
    };

    foot.addEventListener("click", onClick);
}


async function actionSlideThree() {
    slideThree.style.display = "flex";

    textSlideOneThree.textContent = "";
    textSlideTwoThree.textContent = "";
    textSlideThreeThree.textContent = "";

    svgSlideThree.style.display = "flex";

    let delay = 0;

    delay = typeText(textSlideOneThree, text[1], delay);

    setTimeout(() => {
        textSlideOneThree.style.marginTop = "-8.69458vh";
    }, delay + 300);

    setTimeout(() => {
        textSlideTwoThree.style.marginTop = "3.69458vh";
    }, delay + 300);

    delay = typeText(textSlideTwoThree, text[2], delay + 1000);

    setTimeout(() => {
        textSlideThreeThree.style.marginTop = "3.69458vh";
    }, delay + 300);

    setTimeout(() => {
        svgSlideThree.style.opacity = "1";
    }, 9000);

    setTimeout(() => {
        textSlideOneThree.style.color = "#728C6A";
        textSlideTwoThree.style.color = "#728C6A";
        textSlideThreeThree.style.color = "#728C6A";
    }, 12000);

    setTimeout(() => {
        slideThree.style.opacity = "0";
    }, 16000);

    setTimeout(() => {
        slideThree.style.display = "none";
    }, 17500);

    typeText(textSlideThreeThree, text[3], delay + 1000);

    setTimeout(() => {
        actionSlideFour();
    }, 18000);
}

async function actionSlideFour() {
    slideFour.style.display = "flex";
    loveCart.style.display = "flex";

    let slideFourFinished = false;

    const delay = 0;
    typeText(memories, text[4], delay + 1000);

    const blockNotBeList = document.getElementsByClassName("blockNotBe")[0];
    const listItems = blockNotBeList.querySelectorAll("li");

    setTimeout(() => {
        listItems.forEach((item, index) => {
            typeText(item, text[5 + index], delay + 1000 * (index + 1));
        });
    }, 2000);

    setTimeout(() => {
        listItems.forEach((item, index) => {
            if (index === 0) {
                item.classList.add("underline-animate");
                setTimeout(() => {
                    item.classList.add("underline-show");
                }, 20); // чуть позже, чтобы сработала анимация
            }
        });
    }, 7600);

    setTimeout(() => {
        listItems.forEach((item, index) => {
            if (index !== 0) {
                item.style.opacity = "0.6";
            }
        });
    }, 8600);

    typeText(be, text[9], delay + 10000);
    typeText(realTreasures, text[10], delay + 11000);

    setTimeout(() => {
        be.classList.add("underline-animate");
        setTimeout(() => {
            be.classList.add("underline-show");
        }, 10);
    }, 13000);

    setTimeout(() => {
        loveCart.style.opacity = "1";
        backgroundWrapper.style.display = "flex";
    }, 14000);

    setTimeout(() => {
        slideFourFinished = true;
    }, 15000);


    document.addEventListener("click", () => {
        if (slideFourFinished) {
            slideFour.style.display = "none";
            actionSlideFive();
        }
    });

}

async function actionSlideFive() {
    svgShadow.style.display = "flex";
    date.style.display = "flex";
    theFirstHearts.style.display = "flex";
    heartImgOne.style.display = "flex";
    heartImgTwo.style.display = "flex";

    // Скрытие предыдущего слайда
    setTimeout(() => {
        slideFour.style.opacity = "0";
    }, 300);

    // Плавное появление фона
    setTimeout(() => {
        heartBackground.style.opacity = "1";
    }, 1200);

    // Появление текущего слайда
    setTimeout(() => {
        slideFive.style.display = "flex";
    }, 1500);

    // Элементы поочерёдно
    setTimeout(() => {
        svgShadow.style.opacity = "1";
    }, 2200);

    setTimeout(() => {
        date.style.opacity = "1";
    }, 2500);

    setTimeout(() => {
        theFirstHearts.style.opacity = "1";
    }, 3800);

    setTimeout(() => {
        heartImgOne.style.opacity = "1";
    }, 5500);

    setTimeout(() => {
        heartImgTwo.style.opacity = "1";
    }, 6500);

    // Оставим сердечки подольше, чтобы человек успел их прочувствовать
    setTimeout(() => {
        theFirstHearts.style.opacity = "0";
    }, 7500);

    setTimeout(() => {
        theFirstHearts.textContent = " ";
        heartImgOne.style.opacity = "0";
    }, 8000);

    setTimeout(() => {
        heartImgTwo.style.opacity = "0";
    }, 9000);

    setTimeout(() => {
        heartImgOne.style.display = "none";
        heartImgTwo.style.display = "none";
        date.style.opacity = "0.5";
    }, 10600);

    // Появление текста печаткой
    typeText(theFirstHearts, text[11], 11500);

    // Скрытие
    setTimeout(() => {
        heartBackground.style.opacity = "0";
    }, 12000);

    setTimeout(() => {
        heartBackground.style.display = "none";
    }, 13000);

    setTimeout(() => {
        theFirstHearts.style.opacity = "0";
    }, 14000);

    setTimeout(() => {
        date.style.opacity = "0";
    }, 15500);

    setTimeout(() => {
        theFirstHearts.style.display = "none";
        slideFive.style.display = "none";
        svgShadow.style.display = "none";
        date.style.display = "none";
        actionSlideSix();
    }, 16000);
}


async function actionSlideSix() {
    slideSix.style.display = "flex";

    butterfliesInTheStomach.style.display = "flex";
    butterfliesInTheStomach.style.opacity = "1";

    butterflyOne.style.display = "flex";

    butterflyTwo.style.display = "flex";

    const listItems = slideSeven.querySelectorAll("h1");

    const delay = 0;

    typeText(butterfliesInTheStomach, text[12], delay + 1000);

    setTimeout(() => {
        date.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
        butterflyOne.style.opacity = "1";
        butterflyTwo.style.opacity = "1";
    }, 3000);

    setTimeout(() => {
        butterflyOne.style.opacity = "0.5";
        butterflyTwo.style.opacity = "0.5";
    }, 4500);

    setTimeout(() => {
        butterfliesInTheStomach.style.opacity = "0.5";
    }, 5000);

    setTimeout(() => {
        butterfliesInTheStomach.style.marginTop = "-20vh";
        promise.style.display = "flex";
        promise.style.opacity = "1";
    }, 6500);

    typeText(promise, text[13], delay + 7500);

    setTimeout(() => {
        butterflyOne.style.opacity = "0";
        butterflyTwo.style.opacity = "0";
        butterfliesInTheStomach.style.opacity = "0";
    }, 9000);

    setTimeout(() => {
        promise.style.opacity = "0";
    }, 14000);

    setTimeout(() => {
        promise.textContent = "";
        promise.style.opacity = "1";
    }, 16000);

    typeText(promise, text[14], delay + 18000);

    setTimeout(() => {
        promise.style.marginTop = "-15vh";
        promise.style.display = "flex";
    }, 21000);

    setTimeout(() => {
        promise.textContent = "Я обещаю:";
        slideSeven.style.display = "flex";
    }, 21600);

    setTimeout(() => {
        listItems.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = "1";
            }, (index + 1) * 1200);
        });
    }, 23000);


    setTimeout(() => {
        slideSix.style.opacity = "0";
        slideSeven.style.opacity = "0";
    }, 35000);

    setTimeout(() => {
        butterflyTwo.style.display = "none";
        slideSeven.style.display = "none";
        slideSix.style.display = "none";
    }, 35500)

    setTimeout(() => {
        actionSlideEight()
    }, 38000);
}

async function actionSlideEight() {
    const slideEight = document.querySelector(".slideEight");
    const listItemsSlideEight = slideEight.querySelectorAll("h1, img");

    slideEight.style.display = "flex"; // Показать слайд
    listItemsSlideEight.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 500);
    });

    setTimeout(() => {
        listItemsSlideEight.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 0;
            }, index * 500);
        });
    }, 4000);

    setTimeout(() => {
        slideEight.style.display = "none";
    }, 5000);

    setTimeout(() => {
        actionSlideEight()
    }, 6000);
}

async function actionSlideEight() {
    slideNine.style.display = "flex"
    youMeWorld.style.filter = 'brightness(50%)';
    youMeWorld.style.display = "flex";

    const listItemsSlideNine = slideNine.querySelectorAll("h1");

    listItemsSlideNine.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 700);
    });

    setTimeout(() => {
        slideNine.style.border = "solid 1px #FFFF"
    }, 3000);

    setTimeout(() => {
        youMeWorld.style.opacity = 1
    }, 4000);

    setTimeout(() => {
        listItemsSlideNine.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 0;
            }, index * 500);
        });
    }, 6000);


    setTimeout(() => {
        youMeWorld.style.filter = 'brightness(100%)';
    }, 9000);

    setTimeout(() => {
        slideNine.style.opacity = 0;
    }, 12000);

    setTimeout(() => {
        slideNine.style.display = "none";
    }, 14000);

    setTimeout(() => {
        actionSlideTen()
    }, 16000);
}

async function actionSlideTen() {
    slideTen.style.display = "flex"
    const delay = 0;
    const listItemsSlideTen = slideTen.querySelectorAll("img");
    const listItemsBlockFoot = blockFoot.querySelectorAll("svg");
    const listItemsBlockText = slideTenText.querySelectorAll("h1");

    listItemsBlockFoot.forEach((element, index) => {
        setTimeout(() => {
            element.style.display = "flex";
        }, index * 500);
    });

    setTimeout(() => {
        listItemsSlideTen.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 1;
            }, index * 500);
        });
    }, 1000);

    setTimeout(() => {
        listItemsSlideTen.forEach((element, index) => {
            if (index === 0) {
                element.style.marginTop = "3vh";
            } else {
                element.style.marginTop = "19vh";
            }
        });

        slideTenText.style.display = "flex"
    }, 3000);

    setTimeout(() => {
        listItemsBlockFoot.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 1;
            }, index * 500);
        });
    }, 5000);

    setTimeout(() => {
        listItemsBlockText.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 1;
            }, index * 700);
        });
    }, 6500);

    setTimeout(() => {

        listItemsSlideTen.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 0.2;
            }, 300);
        });

        listItemsBlockText.forEach((element, index) => {
            setTimeout(() => {
                if (index !== 0) {
                    element.style.opacity = 0.2;
                }
            }, index * 300);

        });

    }, 10000);

    setTimeout(() => {

        listItemsSlideTen.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 0;
            }, 300);
        });

        listItemsBlockText.forEach((element, index) => {
            setTimeout(() => {
                if (index !== 0) {
                    element.style.opacity = 0;
                }
            }, index * 300);

        });

        listItemsBlockFoot.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 0.4;
            }, 300);

        });

    }, 11000);

    setTimeout(() => {

        listItemsBlockFoot.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 0;
            }, 300);

        });

        listItemsBlockText.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = 0;
            }, index * 300);

        });

    }, 12000);

    setTimeout(() => {

        actionSlideEleven()

    }, 14000);


}

async function actionSlideEleven() {
    slideEleven.style.display = "flex";
    starTop.style.display = "flex";
    starBottom.style.display = "flex";

    const svgTop = starTop.querySelector("svg");
    const svgBottom = starBottom.querySelector("svg");

    if (svgTop) svgTop.style.display = "flex";
    if (svgBottom) svgBottom.style.display = "flex";

    const listItemsSlideEleven = slideEleven.querySelectorAll("h1");
    const delay = 0;

    listItemsSlideEleven.forEach((element, index) => {
        typeText(element, text[15 + index], delay + 2000 * (index + 1));
    });

    setTimeout(() => {
        if (svgTop) svgTop.style.opacity = "1";
        if (svgBottom) svgBottom.style.opacity = "1";
    }, 6000);

    setTimeout(() => {

        listItemsSlideEleven.forEach((element, index) => {
            element.style.opacity = "0"
        });
    }, 9000);

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            if(index===0) {
                element.textContent = "Aspera Ad Astra";
            } else {
                element.textContent = "«Сквозь тернии к звёздам»";
            }
        });
    }, 10000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            element.style.opacity = "1"
        });
    }, 13000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            if(index===0) {
                element.style.opacity = "0.7"
            } else {
                element.style.opacity = "0"
            }
        });
    }, 15000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            if(index===1) {
                element.textContent = "Сквозь тернии к тебе";
            }
        });
    }, 16000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            element.style.opacity = "1"
        });
    }, 19000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            element.style.opacity = "0"
        });
    }, 23000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            if(index===0) {
                element.textContent = "Сквозь тернии к тебе";
            } else {
                element.textContent = "Ты самая яркая звезда на свете";
            }
        });
    }, 24000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            element.style.opacity = "1"
        });
    }, 26000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            if(index===0) {
                element.style.opacity = "0"
            }
        });
    }, 29000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            element.style.opacity = "0"
        });
    }, 31000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            if(index===1) {
                element.textContent = "Я люблю тебя";
            }
        });
    }, 32000)

    setTimeout(() => {
        listItemsSlideEleven.forEach((element, index) => {
            if(index === 1) {
                element.style.opacity = "1"
            }
        });
    }, 33000)

    setTimeout(() => {
        if (svgTop) svgTop.style.opacity = "0";
        if (svgBottom) svgBottom.style.opacity = "0";
    }, 35000)


}


document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputPassworld");

    slideOne.style.display = "flex";

    input.addEventListener("input", async () => {
        const value = input.value.trim();
        const hashedValue = await hashPassworld(value);

        if (hashedValue === onehash || hashedValue === twohash) {
            slideOne.style.opacity = "0";
            setTimeout(() => {
                slideOne.style.display = "none";
            }, 500);

            setTimeout(() => {
                actionSlideTwo();
            }, 1000);
        }
    });
});
