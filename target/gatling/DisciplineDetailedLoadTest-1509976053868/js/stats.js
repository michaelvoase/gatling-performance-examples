var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "850",
        "ok": "0",
        "ko": "850"
    },
    "minResponseTime": {
        "total": "73",
        "ok": "-",
        "ko": "73"
    },
    "maxResponseTime": {
        "total": "11172",
        "ok": "-",
        "ko": "11172"
    },
    "meanResponseTime": {
        "total": "7325",
        "ok": "-",
        "ko": "7325"
    },
    "standardDeviation": {
        "total": "2770",
        "ok": "-",
        "ko": "2770"
    },
    "percentiles1": {
        "total": "7581",
        "ok": "-",
        "ko": "7581"
    },
    "percentiles2": {
        "total": "9786",
        "ok": "-",
        "ko": "9786"
    },
    "percentiles3": {
        "total": "11031",
        "ok": "-",
        "ko": "11031"
    },
    "percentiles4": {
        "total": "11156",
        "ok": "-",
        "ko": "11156"
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
        "count": 850,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "56.667",
        "ok": "-",
        "ko": "56.667"
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
        "ok": "0",
        "ko": "850"
    },
    "minResponseTime": {
        "total": "73",
        "ok": "-",
        "ko": "73"
    },
    "maxResponseTime": {
        "total": "11172",
        "ok": "-",
        "ko": "11172"
    },
    "meanResponseTime": {
        "total": "7325",
        "ok": "-",
        "ko": "7325"
    },
    "standardDeviation": {
        "total": "2770",
        "ok": "-",
        "ko": "2770"
    },
    "percentiles1": {
        "total": "7581",
        "ok": "-",
        "ko": "7581"
    },
    "percentiles2": {
        "total": "9786",
        "ok": "-",
        "ko": "9786"
    },
    "percentiles3": {
        "total": "11031",
        "ok": "-",
        "ko": "11031"
    },
    "percentiles4": {
        "total": "11156",
        "ok": "-",
        "ko": "11156"
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
        "count": 850,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "56.667",
        "ok": "-",
        "ko": "56.667"
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
