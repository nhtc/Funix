$(document).ready(function () {
	var dateObj = new Date();
	var month = dateObj.getUTCMonth() + 1; //months from 1-12
	var day = dateObj.getUTCDate();
	var year = dateObj.getUTCFullYear();

	const days = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let weekday = days[dateObj.getDay()];
	newdate = weekday + ", " + day + "/" + month + "/" + year;
	document.getElementById("date").innerHTML = newdate;

	const apiKey = "9e4756fe5e57ff68b3763c99414b7ec4";
	let url_top = `https://gnews.io/api/v4/top-headlines?max=100&lang=en&from=2022-04-01T06:29:02Z&to=2022-04-02T06:29:02Z&token=${apiKey}`;

	fetch_news(url_top);
	$(".loader").delay(500).fadeOut(1000);

	$("#logo img").click(function () {
		$("#ourserv").empty();
		$(".loader").fadeIn("fast");
		fetch_news(url_top);
		$(".loader").delay(500).fadeOut(1000);
	});

	$("#icon-search").click(function () {
		$("#form-container").css("display", "unset");
		$("#search-overlay").css("display", "block");
		$('input[name="keyword"]').focus();
		// $("*").css("cursor", "none");
	});

	$("#search-overlay").click(function (e) {
		$("#search-overlay").css("display", "none");
		$("#form-container").css("display", "none");
		$("*").css("cursor", "unset");
	});

	$("#keyword").on("keydown", function search(e) {
		if (e.keyCode == 13) {
			e.preventDefault();
			$("*").css("cursor", "unset");
			$("#search-overlay").css("display", "none");
			$("#form-container").css("display", "none");

			$(".loader").fadeIn("fast");

			var fromdate = "none";
			var todate = "none";
			if ($("#from input").val() != "") {
				fromdate =
					new Date($("#from input").val())
						.toISOString()
						.split(".")[0] + "Z";
			}
			if ($("#to input").val() != "") {
				todate =
					new Date($("#to input").val()).toISOString().split(".")[0] +
					"Z";
			}
			let topic = $("#keyword").val();
			let url_search = `https://gnews.io/api/v4/search?q=${topic}&lang=en&from=${fromdate}&to=${todate}&token=${apiKey}`;
			$("#ourserv").empty();
			console.log(url_search);
			fetch_news(url_search, topic);
			$(".loader").delay(500).fadeOut();
		}
	});

	$("#filter-btn").click(function () {
		$("#search-overlay").css("display", "none");
		$("#form-container").css("display", "none");

		$(".loader").fadeIn("fast");

		var fromdate = "none";
		var todate = "none";
		if ($("#from input").val() != "") {
			fromdate =
				new Date($("#from input").val()).toISOString().split(".")[0] +
				"Z";
		}
		if ($("#to input").val() != "") {
			todate =
				new Date($("#to input").val()).toISOString().split(".")[0] +
				"Z";
		}

		let topic = $("#keyword").val();
		let url_search = `https://gnews.io/api/v4/search?q=${topic}&lang=en&from=${fromdate}&to=${todate}&token=${apiKey}`;
		$("#ourserv").empty();
		console.log(url_search);
		fetch_news(url_search, topic);
		$(".loader").delay(500).fadeOut();
	});

	function fetch_news(url, topic) {
		fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				console.log(data.totalArticles);
				console.log(typeof data.totalArticles);
				if (data.totalArticles == 0) {
					$("#not-found").text(`No result for "${topic}" founded`);
				} else {
					data.articles.forEach((element) => {
						var h1 = $("<h1></h1>").text(element.title);
						var title = $("<a></a>")
							.attr("href", element.url)
							.append(h1);
						var img = $("<img>").attr("src", element.image);
						var description = $("<p></p>").text(
							element.description
						);
						var rm = $("<a></a>")
							.attr("href", element.url)
							.addClass("rm")
							.text("Read More");
						var article = $("<article></article>").append(
							title,
							img,
							description,
							rm
						);
						$("#ourserv").append(article);
					});
				}
			});
	}
});
