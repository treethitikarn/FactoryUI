var host = "http://localhost:7777/";


function post(url, form, func) {

    $.ajax({
        url: host + url,
        dataType: "json",
        type: 'POST',
        data: form,
        success: function (data) {
            if (data.status == 0 && data.errorMessage == "Please login.") {
                window.location.href = '../index.html';
                console.log(form);
            }
            func(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }

    });
}
function postImage(url, form, func) {
    console.log(form);
    $.ajax({
        url: host + url,
        type: 'POST',
        data: form,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.status == 0 && data.errorMessage == "Please login.") {
                window.location.href = '../index.html';
                console.log(form);
            }
            func(data);
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }

    });
}
function get(url, func) {
    $.ajax({
        url: host + url,
        type: 'GET',
        success: function (data) {
            if (data.status == 0 && data.errorMessage == "Please login.") {
                window.location.href = '../index.html';
            }
            func(JSON.parse(data));
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr.status);
            console.log(thrownError);
        }
    });
}
