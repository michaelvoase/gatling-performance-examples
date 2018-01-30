package tests.olympics


import com.sun.xml.internal.xsom.impl.Ref.ContentType
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder


/** ********* created by mvoase ******************************/
/** ********* OWG2018 Games Performance Test ***********/

class GamesLoadTest extends Simulation {

  /**
    * Our variables as with Java - private String etc... Scala & Gatling use val for everything, so need to set Int, Boolean etc.
    */

  private val baseUrl = "http://localhost:8002/"
  private val endpointPrefix = "publish/olympics/api/v3/"
  private val testEndpoint = "games/OWG2018"
  private val contentType = "application/json"
  private val requestCount = 1000

  /** This will be used to configure our HttpProtocol
    * required for send requests to our API - This can be define in another class as its reusable, but currently its set per Test class
    */
  val httpProtocol: HttpProtocolBuilder = http
    .baseURL(baseUrl)
    .inferHtmlResources()
    .acceptHeader("*/")
    // We have set our contentType in our global variables - however you can statically set them using - application/json or application/xml as in Java
    .contentTypeHeader(contentType)


  val headers_0 = Map("Expect" -> "100-continue")

  /**
    * Next we define a "Scenario" - These are basically where we mimic what a "user" would be doing when using our API - These can be as detailed as you like, navigating to multiple endpoints etc
    * This allows us to really enhance our performance testing, and increase load as we go along.
    *
    * As you can see we are doing a GET request on the Games endpoint and while we're doing it we're checking the status is returned correct.
    */
  val AllGames: ScenarioBuilder = scenario("GameLoadTest")
    .exec(http("request_0")
      .get(baseUrl + endpointPrefix + testEndpoint)
      .headers(headers_0)
      .check(status.is(200)
      ))

  setUp(AllGames.inject(atOnceUsers(requestCount))).protocols(httpProtocol)

    /**
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