
export function showMessage(message, type = "success") {
    Toastify({
        text: message,
        duration: 1500,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: type === "success" ? "linear-gradient(to right, #00b09b, #96c93d)" : "linear-gradient(to right, #ff0000, #ff4d4d)"
        },
        onClick: function () { } // Callback after click
    }).showToast();
}