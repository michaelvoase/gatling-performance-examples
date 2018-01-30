package tests.olympics


import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder


/** ********* created by mvoase ******************************/
/** ********* OWG2018 Games Performance Test ***********/

class GamesLoadTest extends Simulation {

  private val baseUrl = "http://localhost:8002/"
  private val endpointPrefix = "publish/olympics/api/v3/"
  private val testEndpoint = "games/OWG2018"
  private val contentType = "application/json"
  private val requestCount = 1000

  val httpProtocol: HttpProtocolBuilder = http
    .baseURL(baseUrl)
    .inferHtmlResources()
    .acceptHeader("*/")
    .contentTypeHeader(contentType)


  val headers_0 = Map("Expect" -> "100-continue")

  val AllGames: ScenarioBuilder = scenario("GameLoadTest")
    .exec(http("request_0")
      .get(baseUrl + endpointPrefix + testEndpoint)
      .headers(headers_0)
      .check(status.is(200)
      ))

  setUp(AllGames.inject(atOnceUsers(requestCount))).protocols(httpProtocol)

    /*
     * This asserts that, for all the requests in all the scenarios in the simulation
     * the maximum response time should be less than 50 ms.
     * If this is not the case when the simulation runs, the simulation will considered to have failed.
     */
    .assertions(
    global.responseTime.max.lt(50),
    forAll.failedRequests.count.lt(5),
    details("Games Detail Request").successfulRequests.percent.gt(90)
  )

}