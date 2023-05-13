/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validateAndGetFormData() {
    var sturollnoVar = $("#sturollno").val();
    if (sturollno === "") {
        alert("Roll no Required Value");
        $("#sturollno").focus();
        return "";
    }
    var stunameVar = $("#stuname").val();
    if (stunameVar === "") {
        alert("Student Name is Required Value");
        $("#stuname").focus();
        return "";
    }
    var stuclassVar = $("#stuclass").val();
    if (stuclassVar === "") {
        alert("Student Class is Required Value");
        $("#stuclass").focus();
        return "";
    }
    var stubodVar = $("#stubod").val();
    if (stubodVar === "") {
        alert("Student Birth-Date is Required Value");
        $("#stubod").focus();
        return "";
    }
    var stuaddVar = $("#stuadd").val();
    if (stuaddVar === "") {
        alert("Student Address is Required Value");
        $("#stuadd").focus();
        return "";
    }
    var stuedVar = $("#stued").val();
    if (stuedVar === "") {
        alert("Student Enrollment-Date is Required Value");
        $("#stued").focus();
        return "";
    }
    var jsonStrObj = {
        sturollno: sturollnoVar,
        stuname: stunameVar,
        stuclass: stuclassVar,
        stubod: stubodVar,
        stuadd: stuaddVar,
        stued: stuedVar,
    };
    return JSON.stringify(jsonStrObj);
}
// This method is used to create PUT Json request.
function createPUTRequest(connToken, jsonObj, dbName, relName) {
    var putRequest = "{\n"
            + "\"token\" : \""
            + connToken
            + "\","
            + "\"dbName\": \""
            + dbName
            + "\",\n" + "\"cmd\" : \"PUT\",\n"
            + "\"rel\" : \""
            + relName + "\","
            + "\"jsonStr\": \n"
            + jsonObj
            + "\n"
            + "}";
    return putRequest;
}
function executeCommand(reqString, dbBaseUrl, apiEndPointUrl) {
    var url = dbBaseUrl + apiEndPointUrl;
    var jsonObj;
    $.post(url, reqString, function (result) {
        jsonObj = JSON.parse(result);
    }).fail(function (result) {
        var dataJsonObj = result.responseText;
        jsonObj = JSON.parse(dataJsonObj);
    });
    return jsonObj;
}
function resetForm()
{
    $("#sturollno").focus();
    $("#stuname").val("");
    $("#stuclass").val("");
    $("#stubod").val("");
    $("#stuadd").val("");
    $("#stued").val("");
}
function saveStudent() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90936861|-31948784479254024|90932362",
            jsonStr, "SCHOOL-DB", "STUDENT-TABLE");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(putReqStr,
            "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("sturollno").focus();
}
function changeData() {
    $("#change").prop("disabled", true);
    jsonchg = validateData();
    var updateRequest = createUPDATERecordRequest("90936861|-31948784479254024|90932362",
            jsonStr, "SCHOOL-DB", "STUDENT-TABLE", localStorage.getItem("")
            alert(putReqStr);
            jQuery.ajaxSetup({async: false});
    var resultObj = executeCommand(putReqStr,
            "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("sturollno").focus();
}



