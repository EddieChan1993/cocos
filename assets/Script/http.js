window.Code = {
    SUCCESS: 0,
    ERROR: 1,
};

window.http = {
    post: function (url, reqData, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var response = xhr.responseText;
                if (response) {
                    var responseJson = JSON.parse(response);
                    console.log(responseJson);
                    callback(responseJson)
                }
            }
        };
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.send(JSON.stringify(reqData));
    }
};