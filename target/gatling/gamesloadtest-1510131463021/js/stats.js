var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "918",
        "ko": "82"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "161",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9203",
        "ok": "9203",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5878",
        "ok": "6403",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2719",
        "ok": "2166",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6480",
        "ok": "6807",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8296",
        "ok": "8349",
        "ko": "0"
    },
    "percentiles3": {
        "total": "9036",
        "ok": "9039",
        "ko": "0"
    },
    "percentiles4": {
        "total": "9185",
        "ok": "9185",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 913,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 82,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15.625",
        "ok": "14.344",
        "ko": "1.281"
    }
},
contents: {
"req_request-0-684d2": {
        type: "REQUEST",
        name: "request_0",
path: "request_0",
pathFormatted: "req_request-0-684d2",
stats: {
    "name": "request_0",
    "numberOfRequests": {
        "total": "1000",
        "ok": "918",
        "ko": "82"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "161",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "9203",
        "ok": "9203",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "5878",
        "ok": "6403",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "2719",
        "ok": "2166",
        "ko": "0"
    },
    "percentiles1": {
        "total": "6480",
        "ok": "6807",
        "ko": "0"
    },
    "percentiles2": {
        "total": "8296",
        "ok": "8349",
        "ko": "0"
    },
    "percentiles3": {
        "total": "9036",
        "ok": "9039",
        "ko": "0"
    },
    "percentiles4": {
        "total": "9185",
        "ok": "9185",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 913,
        "percentage": 91
    },
    "group4": {
        "name": "failed",
        "count": 82,
        "percentage": 8
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15.625",
        "ok": "14.344",
        "ko": "1.281"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
