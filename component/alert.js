function successAlert(msg) {
    document.getElementById("alert-panel").innerHTML +=
        '<div class="alert alert-success alert-dismissible alert-message" role="alert">' + msg + '</div>';
    window.setTimeout(function () {
        $(".alert-message").fadeTo(100, 0).slideUp(100, function () {
            $(this).remove();
        });
    }, 5000);
}

function warningAlert(msg) {
    document.getElementById("alert-panel").innerHTML +=
        '<div class="alert alert-warning alert-dismissible alert-message" role="alert">' + msg + '</div>';
    window.setTimeout(function () {
        $(".alert-message").fadeTo(100, 0).slideUp(100, function () {
            $(this).remove();
        });
    }, 5000);
}

function dangerAlert(msg) {
    document.getElementById("alert-panel").innerHTML +=
        '<div class="alert alert-danger alert-dismissible alert-message" role="alert">' + msg + '</div>';
    window.setTimeout(function () {
        $(".alert-message").fadeTo(100, 0).slideUp(100, function () {
            $(this).remove();
        });
    }, 5000);
}