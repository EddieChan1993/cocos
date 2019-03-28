var httpAuthError = 401;
module.exports = {
    tokenAuth: "TOKEN_AUTH",
    tokenAuthHeader: "adminTokenKey",

    SUCCESS: 0,
    ERROR: 1,

    post: function (url, reqData, isAuth, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var response = xhr.responseText;
                if (response) {
                    var responseJson = JSON.parse(response);
                    if (responseJson.data == httpAuthError) {
                        cc.director.loadScene('login');
                    }else{
                        callback(responseJson);
                    }
                }
            }
        };

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        if (isAuth) {
            var token = cc.sys.localStorage.getItem(this.tokenAuth)
            xhr.setRequestHeader(this.tokenAuthHeader, token);
        }
        xhr.send(JSON.stringify(reqData));
    }
};