var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "-",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "4711",
        "ok": "-",
        "ko": "4711"
    },
    "meanResponseTime": {
        "total": "3498",
        "ok": "-",
        "ko": "3498"
    },
    "standardDeviation": {
        "total": "1200",
        "ok": "-",
        "ko": "1200"
    },
    "percentiles1": {
        "total": "3948",
        "ok": "-",
        "ko": "3948"
    },
    "percentiles2": {
        "total": "4429",
        "ok": "-",
        "ko": "4429"
    },
    "percentiles3": {
        "total": "4557",
        "ok": "-",
        "ko": "4557"
    },
    "percentiles4": {
        "total": "4691",
        "ok": "-",
        "ko": "4691"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "111.111",
        "ok": "-",
        "ko": "111.111"
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
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "11",
        "ok": "-",
        "ko": "11"
    },
    "maxResponseTime": {
        "total": "4711",
        "ok": "-",
        "ko": "4711"
    },
    "meanResponseTime": {
        "total": "3498",
        "ok": "-",
        "ko": "3498"
    },
    "standardDeviation": {
        "total": "1200",
        "ok": "-",
        "ko": "1200"
    },
    "percentiles1": {
        "total": "3948",
        "ok": "-",
        "ko": "3948"
    },
    "percentiles2": {
        "total": "4429",
        "ok": "-",
        "ko": "4429"
    },
    "percentiles3": {
        "total": "4557",
        "ok": "-",
        "ko": "4557"
    },
    "percentiles4": {
        "total": "4691",
        "ok": "-",
        "ko": "4691"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1000,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "111.111",
        "ok": "-",
        "ko": "111.111"
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
