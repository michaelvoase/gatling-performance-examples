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
        "total": "31",
        "ok": "-",
        "ko": "31"
    },
    "maxResponseTime": {
        "total": "5940",
        "ok": "-",
        "ko": "5940"
    },
    "meanResponseTime": {
        "total": "4357",
        "ok": "-",
        "ko": "4357"
    },
    "standardDeviation": {
        "total": "1587",
        "ok": "-",
        "ko": "1587"
    },
    "percentiles1": {
        "total": "5014",
        "ok": "-",
        "ko": "5014"
    },
    "percentiles2": {
        "total": "5614",
        "ok": "-",
        "ko": "5614"
    },
    "percentiles3": {
        "total": "5733",
        "ok": "-",
        "ko": "5733"
    },
    "percentiles4": {
        "total": "5801",
        "ok": "-",
        "ko": "5801"
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
        "total": "100",
        "ok": "-",
        "ko": "100"
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
        "total": "31",
        "ok": "-",
        "ko": "31"
    },
    "maxResponseTime": {
        "total": "5940",
        "ok": "-",
        "ko": "5940"
    },
    "meanResponseTime": {
        "total": "4357",
        "ok": "-",
        "ko": "4357"
    },
    "standardDeviation": {
        "total": "1587",
        "ok": "-",
        "ko": "1587"
    },
    "percentiles1": {
        "total": "5014",
        "ok": "-",
        "ko": "5014"
    },
    "percentiles2": {
        "total": "5614",
        "ok": "-",
        "ko": "5614"
    },
    "percentiles3": {
        "total": "5733",
        "ok": "-",
        "ko": "5733"
    },
    "percentiles4": {
        "total": "5801",
        "ok": "-",
        "ko": "5801"
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
        "total": "100",
        "ok": "-",
        "ko": "100"
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
