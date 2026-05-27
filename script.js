let joinBtn =
    document.querySelector(
        "#joinBtn"
    );

let message =
    document.querySelector(
        "#message"
    );

let volunteerBtn =
    document.querySelector(
        "#volunteerBtn"
    );

let volunteerMessage =
    document.querySelector(
        "#volunteerMessage"
    );

let darkBtn =
    document.querySelector(
        "#darkBtn"
    );

let body =
    document.querySelector(
        "body"
    );


joinBtn?.addEventListener(
    "click",

    function () {

        message.innerText =

            "🎉 Thank you for joining us!";

    }
);


volunteerBtn?.addEventListener(
    "click",

    function () {

        volunteerMessage.innerText =

            "💜 Thank you for showing interest in volunteering!";

    }
);


darkBtn?.addEventListener(
    "click",

    function () {

        body.classList.toggle(
            "dark"
        );

    }
);
