// import http from "k6/http";
// import {check, group, sleep} from "k6";
import { Trend, Rate, Counter, Gauge } from "k6/metrics";

// // const BASE_URL = "http://raw-data-maker-prod.gptwc.cl/login";

// let counterErrors = new Counter("Errors");
// let rateContentOK = new Rate("Content OK");
// let gaugeContentSize = new Gauge("ContentSize");
// let trendRTT = new Trend("RTT");
// let waitingTime = new Trend("WaitingTime");

// export let options = {
// 	vus: 200,
// 	stages: [
// 		{ target: 20, duration: "30s"},
// 		{ target: 25, duration: "20s"},
// 		{ target: 0, duration: "10s"}
// 	],
// 	thresholds: {
// 		"http_req_duration": ["p(95)<500"],
// 		"Errors": ["count<100"],
// 		"ContentSize": ["value<4000"],
// 		"RTT": [
//             "p(50)<300",
//             "avg<200",
//             "med<150",
//             "min<100",
//         ],
// 	}
// };


// export default function() {
// 	group("Front page", function() {
// 		let res = http.get("https://www.greatplacetowork.cl/");
//    	let contentOK = res.html("h2").text().includes("Lo último del Blog");
// 		counterErrors.add(!contentOK);
// 		trendRTT.add(res.timings.duration);
//   	rateContentOK.add(contentOK);
//   	gaugeContentSize.add(res.body.length);
//   	waitingTime.add(res.timings.waiting);
//    	let checkRes = check(res, {
//    		"status is 200": (r) => r.status === 200
//    	});
// 	});
// 	sleep(5);
// };

// let res = http.get("http://encuestas.greatplacetowork.cl");
// , {user: { email: 'nicolas.nahuelpan@greatplacetowork.com', password: 'asd123', redir: '1' }}
//let res = http.get(BASE_URL);
   		/*let payload = JSON.stringify({user: { email: 'nicolas.nahuelpan@greatplacetowork.com', password: 'asd123' }});
   		let params = {headers: {"Content-Type": "application/json"}};
   		let res = http.post(BASE_URL, payload, params);
		*/

		import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.3
// Creator: Load Impact URL test analyzer
let counterErrors = new Counter("Errors");
let rateContentOK = new Rate("Content OK");
let gaugeContentSize = new Gauge("ContentSize");
let trendRTT = new Trend("RTT");
let waitingTime = new Trend("WaitingTime");

export let options = {
    stages: [
        {
            "duration": "210s",
            "target": 5000
        },
        {
            "duration": "210s",
            "target": 5000
        },
        {
            "duration": "210s",
            "target": 0
				}
		],
		thresholds: {
			"http_req_duration": ["p(95)<500"],
			"Errors": ["count<100"],
			"ContentSize": ["value<4000"],
			"RTT": [
		           "p(50)<300",
		           "avg<200",
		           "med<150",
		           "min<100",
		       ],
		},
    maxRedirects: 0,
    discardResponseBodies: true,
};

export default function() {

	group("page_1 - https://www.greatplacetowork.cl/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/",
			"params": {
				"headers": {
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
					"Connection": "keep-alive",
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"Upgrade-Insecure-Requests": "1",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.googletagmanager.com/gtag/js?id=UA-43011861-1",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "*/*",
					"referer": "https://www.greatplacetowork.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/dist/style.min.css?ver=1.4",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "text/css,*/*;q=0.1",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/dist/scripts.min.js?ver=1.4",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/wp-includes/js/jquery/jquery-migrate.min.js?ver=1.4.1",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://fonts.googleapis.com/css?family=Roboto:400,500,700,700i|Open+Sans:400,400i,600,700,700i",
			"params": {
				"headers": {
					"accept-encoding": "gzip, deflate",
					"accept-language": "en-US",
					"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"accept": "text/css,*/*;q=0.1",
					"referer": "https://www.greatplacetowork.cl/"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/images/logo.png",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://s3.amazonaws.com/gptw-web-site/assets/uploads/2019/08/19133526/Stock-Photo-47-500x335.jpg",
			"params": {
				"headers": {
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Connection": "keep-alive",
					"Accept-Encoding": "gzip, deflate",
					"Referer": "https://www.greatplacetowork.cl/",
					"Host": "s3.amazonaws.com",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/uploads/2018/10/articulo@3x.png",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://s3.amazonaws.com/gptw-web-site/assets/uploads/2019/12/13131739/Iconograf%C3%ADa-500x335.jpg",
			"params": {
				"headers": {
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Connection": "keep-alive",
					"Accept-Encoding": "gzip, deflate",
					"Referer": "https://www.greatplacetowork.cl/",
					"Host": "s3.amazonaws.com",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://s3.amazonaws.com/gptw-web-site/assets/uploads/2019/11/29091850/Foto-Parque-del-Recuerdo_edited-500x335.jpg",
			"params": {
				"headers": {
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Connection": "keep-alive",
					"Accept-Encoding": "gzip, deflate",
					"Referer": "https://www.greatplacetowork.cl/",
					"Host": "s3.amazonaws.com",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/images/bg-contacto.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/wp-includes/js/jquery/jquery.js?ver=1.12.4",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/images/twitter.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/images/telefono.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/images/linkedin.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/wp-includes/js/wp-embed.min.js?ver=4.9.11",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/wp-includes/js/wp-emoji-release.min.js?ver=4.9.11",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/fonts/sailec-webfont.woff2",
			"params": {
				"headers": {
					"Origin": "https://www.greatplacetowork.cl",
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/dist/style.min.css?ver=1.4",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/fonts/sailec-bold-webfont.woff2",
			"params": {
				"headers": {
					"Origin": "https://www.greatplacetowork.cl",
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/dist/style.min.css?ver=1.4",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/fonts/sailec-medium-webfont.woff2",
			"params": {
				"headers": {
					"Origin": "https://www.greatplacetowork.cl",
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "*/*",
					"Referer": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/dist/style.min.css?ver=1.4",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://s3.amazonaws.com/gptw-web-site/assets/uploads/2019/10/25095709/desktopbanner2-2.jpg",
			"params": {
				"headers": {
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Connection": "keep-alive",
					"Accept-Encoding": "gzip, deflate",
					"Referer": "https://www.greatplacetowork.cl/",
					"Host": "s3.amazonaws.com",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/uploads/2018/10/fondo-parallax.jpg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://www.greatplacetowork.cl/",
					"Connection": "keep-alive"
				}
			}
		},{
			"method": "get",
			"url": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/images/chile.svg",
			"params": {
				"headers": {
					"Accept-Encoding": "gzip, deflate",
					"Host": "www.greatplacetowork.cl",
					"Accept-Language": "en-US",
					"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/62.0.3183.0 Safari/537.36",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "https://www.greatplacetowork.cl/assets/themes/gptw-2018/assets/dist/style.min.css?ver=1.4",
					"Connection": "keep-alive"
				}
			}
		}];
		res = http.batch(req);
		let contentOK = res.html("h2").text().includes("Lo último del Blog");
 		counterErrors.add(!contentOK);
 		trendRTT.add(res.timings.duration);
   	rateContentOK.add(contentOK);
   	gaugeContentSize.add(res.body.length);
   	waitingTime.add(res.timings.waiting);
		// Random sleep between 5s and 10s
		sleep(Math.floor(Math.random()*5+5));
	});

}
