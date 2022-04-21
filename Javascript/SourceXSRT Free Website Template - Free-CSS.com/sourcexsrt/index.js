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

	const apiKey = "c16b13df97527279c9eb7de957122066";
	let url_top = `https://gnews.io/api/v4/top-headlines?max=100&lang=en&from=2022-04-01T06:29:02Z&to=2022-04-02T06:29:02Z&token=${apiKey}`;

	fetch(url_top)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			data.articles.forEach((element) => {
				var h1 = $("<h1></h1>").text(element.title);
				var img = $("<img>").attr("src", element.image);
				var description = $("<p></p>").text(element.description);
				var rm = $("<a></a>")
					.attr("href", element.url)
					.addClass("rm")
					.text("Read More");
				var article = $("<article></article>").append(
					h1,
					img,
					description,
					rm
				);
				$("#ourserv").append(article);
			});
		});
	$(".loader").delay(500).fadeOut(1000);

	$("#logo img").click(function () {
		$("#ourserv").empty();
		fetch(url_top)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				console.log(data);
				data.articles.forEach((element) => {
					var h1 = $("<h1></h1>").text(element.title);
					var img = $("<img>").attr("src", element.image);
					var description = $("<p></p>").text(element.description);
					var rm = $("<a></a>")
						.attr("href", element.url)
						.addClass("rm")
						.text("Read More");
					var article = $("<article></article>").append(
						h1,
						img,
						description,
						rm
					);
					$("#ourserv").append(article);
				});
			});
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
			// let topic = $("#keyword").val();
			// let url_search = `https://gnews.io/api/v4/search?q=${topic}&lang=en&max=100&token=${apiKey}`;\
			var fromdate = "";
			var todate = "";
			if ($("#from input").val() != "") {
				fromdate =
					new Date($("#from input").val())
						.toISOString()
						.split(".")[0] + "Z";
			} else {
				fromdate = "none";
			}
			if ($("#to input").val() != "") {
				todate =
					new Date($("#to input").val()).toISOString().split(".")[0] +
					"Z";
			} else {
				todate = "none";
			}
			let topic = $("#keyword").val();
			let url_search = `https://gnews.io/api/v4/search?q=${topic}&lang=en&from=${fromdate}&to=${todate}&token=${apiKey}`;
			$("#ourserv").empty();
			console.log(url_search);
			$(".loader").fadeIn("fast");
			$(".loader").delay(700).fadeOut();

			fetch(url_search)
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					if (data.totalArticles == 0) {
						$("#not-found").text(
							`No result founded for "${topic}"`
						);
					}
					console.log(data);
					data.articles.forEach((element) => {
						var h1 = $("<h1></h1>").text(element.title);
						var img = $("<img>").attr("src", element.image);
						var description = $("<p></p>").text(
							element.description
						);
						var rm = $("<a></a>")
							.attr("href", element.url)
							.addClass("rm")
							.text("Read More");
						var article = $("<article></article>").append(
							h1,
							img,
							description,
							rm
						);
						$("#ourserv").append(article);
					});
					$(".loader").delay(10).fadeOut();
				});
		}
	});

	$("#filter-btn").click(function () {
		$("#search-overlay").css("display", "none");
		$("#form-container").css("display", "none");
		$(".loader").fadeIn("fast");
		var fromdate = "";
		var todate = "";
		if ($("#from input").val() != "") {
			fromdate =
				new Date($("#from input").val()).toISOString().split(".")[0] +
				"Z";
		} else {
			fromdate = "none";
		}
		if ($("#to input").val() != "") {
			todate =
				new Date($("#to input").val()).toISOString().split(".")[0] +
				"Z";
		} else {
			todate = "none";
		}

		let topic = $("#keyword").val();
		let url_search = `https://gnews.io/api/v4/search?q=${topic}&lang=en&from=${fromdate}&to=${todate}&token=${apiKey}`;
		$("#ourserv").empty();
		console.log(url_search);
		fetch(url_search)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				if (data.totalArticles == 0) {
					$("#not-found").text(`No result founded for "${topic}"`);
				}
				console.log(data);
				data.articles.forEach((element) => {
					var h1 = $("<h1></h1>").text(element.title);
					var img = $("<img>").attr("src", element.image);
					var description = $("<p></p>").text(element.description);
					var rm = $("<a></a>")
						.attr("href", element.url)
						.addClass("rm")
						.text("Read More");
					var article = $("<article></article>").append(
						h1,
						img,
						description,
						rm
					);
					$("#ourserv").append(article);
				});
				$(".loader").delay(10).fadeOut();
			});
	});
});
