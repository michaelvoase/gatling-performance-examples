var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "1000",
        "ok": "967",
        "ko": "33"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1196",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13286",
        "ok": "13286",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "8413",
        "ok": "8700",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3417",
        "ok": "3094",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8692",
        "ok": "8888",
        "ko": "0"
    },
    "percentiles2": {
        "total": "11509",
        "ok": "11599",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12940",
        "ok": "12950",
        "ko": "0"
    },
    "percentiles4": {
        "total": "13179",
        "ok": "13181",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 966,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 33,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15.625",
        "ok": "15.109",
        "ko": "0.516"
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
        "total": "1000",
        "ok": "967",
        "ko": "33"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1196",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "13286",
        "ok": "13286",
        "ko": "0"
    },
    "meanResponseTime": {
        "total": "8413",
        "ok": "8700",
        "ko": "0"
    },
    "standardDeviation": {
        "total": "3417",
        "ok": "3094",
        "ko": "0"
    },
    "percentiles1": {
        "total": "8692",
        "ok": "8888",
        "ko": "0"
    },
    "percentiles2": {
        "total": "11509",
        "ok": "11599",
        "ko": "0"
    },
    "percentiles3": {
        "total": "12940",
        "ok": "12950",
        "ko": "0"
    },
    "percentiles4": {
        "total": "13179",
        "ok": "13181",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 966,
        "percentage": 97
    },
    "group4": {
        "name": "failed",
        "count": 33,
        "percentage": 3
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15.625",
        "ok": "15.109",
        "ko": "0.516"
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
