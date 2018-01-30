var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "850",
        "ok": "850",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8148",
        "ok": "8148",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5231",
        "ok": "5231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1929",
        "ok": "1929",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5602",
        "ok": "5602",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6880",
        "ok": "6880",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7959",
        "ok": "7959",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8064",
        "ok": "8064",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 828,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "77.273",
        "ok": "77.273",
        "ko": "-"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "850",
        "ok": "850",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "116",
        "ok": "116",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "8148",
        "ok": "8148",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "5231",
        "ok": "5231",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1929",
        "ok": "1929",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5602",
        "ok": "5602",
        "ko": "-"
    },
    "percentiles2": {
        "total": "6880",
        "ok": "6880",
        "ko": "-"
    },
    "percentiles3": {
        "total": "7959",
        "ok": "7959",
        "ko": "-"
    },
    "percentiles4": {
        "total": "8064",
        "ok": "8064",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 16,
        "percentage": 2
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 6,
        "percentage": 1
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 828,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "77.273",
        "ok": "77.273",
        "ko": "-"
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
