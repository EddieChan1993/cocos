window.Code = {
    SUCCESS: 0,
    ERROR: 1,
};

window.TokenAuth = "TOKEN_AUTH"
window.TokenAuthHeader = "adminTokenKey"

window.http = {
    post: function (url, reqData, isAuth, callback) {
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
        if (isAuth) {
            var token=cc.sys.localStorage.getItem(TokenAuth)
            xhr.setRequestHeader(TokenAuthHeader, token);
        }
        xhr.send(JSON.stringify(reqData));
    }
};