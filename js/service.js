/**
 * Created by hand on 2017/1/2.
 */
App.service('fileUpload', function ($q, $http) {
    this.file_upload = function (file) {
        var paramData = new FormData();
        paramData.append('file', file);
       /* var token_param = "?access_token=" + window.localStorage.local_header.replace("Token ", "");*/
        return $http({
            method: 'POST',
            url: "http://10.211.54.209:8081/uploadFileExcel",
            data: paramData,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        }).then(function (d) {
            return $q.when(d);
        }, function (d) {
            return $q.reject(d);
        });
    };
});
