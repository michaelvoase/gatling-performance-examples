var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "952",
        "ko": "48"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "185",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "11414",
        "ok": "11414",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "7343",
        "ok": "7713",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3156",
        "ok": "2758",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8042",
        "ok": "8191",
        "ko": "0"
    },
    "percentiles2": {
        "total": "10054",
        "ok": "10273",
        "ko": "0"
    },
    "percentiles3": {
        "total": "11142",
        "ok": "11174",
        "ko": "0"
    },
    "percentiles4": {
        "total": "11290",
        "ok": "11290",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 948,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 48,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "59.5",
        "ko": "3"
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
        "ok": "952",
        "ko": "48"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "185",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "11414",
        "ok": "11414",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "7343",
        "ok": "7713",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3156",
        "ok": "2758",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8042",
        "ok": "8191",
        "ko": "0"
    },
    "percentiles2": {
        "total": "10054",
        "ok": "10273",
        "ko": "0"
    },
    "percentiles3": {
        "total": "11142",
        "ok": "11174",
        "ko": "0"
    },
    "percentiles4": {
        "total": "11290",
        "ok": "11290",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 948,
        "percentage": 95
    },
    "group4": {
        "name": "failed",
        "count": 48,
        "percentage": 5
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "59.5",
        "ko": "3"
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
