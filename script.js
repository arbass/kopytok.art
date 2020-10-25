
ymaps.ready(init);

function init(){
    var myMap = new ymaps.Map("map", {
	    center: [51.128050, 71.441541], // Астана
	    zoom: 14
    });

    var myMainIcon = new ymaps.Placemark([51.128050, 71.441541], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060669e3160a089f6b5_map-icon-atlant.svg',
	    iconImageSize: [94, 120],
	    // iconImageOffset: [-3, -42]
	});

// Развлечения
	var funWineBar = new ymaps.Placemark([51.128586, 71.438297], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funAugustin = new ymaps.Placemark([51.126561, 71.437121], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funTaikazan = new ymaps.Placemark([51.12634, 71.437502], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funCapitalMP = new ymaps.Placemark([51.128868, 71.432834], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funShokoladnitsa = new ymaps.Placemark([51.128183, 71.422841], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funItaliano = new ymaps.Placemark([51.131244, 71.418083], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funKishlak = new ymaps.Placemark([51.130614, 71.41348], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funTraditional = new ymaps.Placemark([51.130614, 71.41348], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funKishlak = new ymaps.Placemark([51.130614, 71.41348], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funTraditional = new ymaps.Placemark([51.138668, 71.408335], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var funAbbaXxl = new ymaps.Placemark([51.09198, 71.423884], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funMill = new ymaps.Placemark([51.139583, 71.408644], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funAlasha = new ymaps.Placemark([51.140232, 71.409063], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funPortofino = new ymaps.Placemark([51.140607, 71.409227], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funBagrationi = new ymaps.Placemark([51.141332, 71.409516], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funGrillWine = new ymaps.Placemark([51.141247, 71.41136], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funMammaMia = new ymaps.Placemark([51.141695, 71.41079], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funKoreanHouse = new ymaps.Placemark([51.141883, 71.409798], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funAccordZoloto = new ymaps.Placemark([51.143089, 71.410169], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funBotanGarden = new ymaps.Placemark([51.108210, 71.418320], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funPresidentPark = new ymaps.Placemark([51.124236, 71.457414], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funBauyrzhanMomyshulyPark = new ymaps.Placemark([51.131584, 71.456966], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funArayPark = new ymaps.Placemark([51.134637, 71.439933], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funJetisu = new ymaps.Placemark([51.1347, 71.436376], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funSingingFountain = new ymaps.Placemark([51.127585, 71.435147], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funNurzholBoulevard1 = new ymaps.Placemark([51.129185, 71.424201], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funGashiktarPark = new ymaps.Placemark([51.12994, 71.40996], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funLoversPark = new ymaps.Placemark([51.131765, 71.408787], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funCenterPark = new ymaps.Placemark([51.15764, 71.42045], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funJeruikPark = new ymaps.Placemark([51.145495, 71.489338], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funBaiterek = new ymaps.Placemark([51.12874, 71.430545], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funNurzholBoulevard2 = new ymaps.Placemark([51.129167, 71.424247], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funTRCHanShatir = new ymaps.Placemark([51.132569, 71.405716], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funAstanaOpera = new ymaps.Placemark([51.134616, 71.410047], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funTRCSariarka = new ymaps.Placemark([51.138663, 71.409617], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funMetropolitanCircus = new ymaps.Placemark([51.145316, 71.419376], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funMetropolitanPark = new ymaps.Placemark([51.159045, 71.420222], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funTRCMegaSW = new ymaps.Placemark([51.089439, 71.403915], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funExpo2017 = new ymaps.Placemark([51.088579, 71.417393], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funBowling = new ymaps.Placemark([51.131958, 71.427744], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funKartMax = new ymaps.Placemark([51.158125, 71.421524], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funCenterFamilyRestAiland = new ymaps.Placemark([51.147449, 71.416055], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var funGammi = new ymaps.Placemark([51.157183, 71.420332], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a60605bde4446d8d70dd5_map-icon-fun.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

// Образование

	var eduKG75 = new ymaps.Placemark([51.117281, 71.431201], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduKG89 = new ymaps.Placemark([51.141189, 71.391494], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduKG78Asil = new ymaps.Placemark([51.110692, 71.428553], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduKG88 = new ymaps.Placemark([51.14358, 71.387669], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var eduKG53 = new ymaps.Placemark([51.143618, 71.393721], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduKG63 = new ymaps.Placemark([51.145145, 71.402698], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduKGL66 = new ymaps.Placemark([51.131767, 71.434429], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduKGL66 = new ymaps.Placemark([51.131767, 71.434429], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduGymnasium17 = new ymaps.Placemark([51.142496, 71.415768], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduChoreographyAcademy = new ymaps.Placemark([51.097665, 71.418877], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduInternationalCchool = new ymaps.Placemark([51.097973, 71.423435], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduKGL84 = new ymaps.Placemark([51.099414, 71.414075], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduSheikhSchool = new ymaps.Placemark([51.098551, 71.41561], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var eduNazarbayevUniversity = new ymaps.Placemark([51.089928, 71.401003], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f219253332a88a493_map-point-study.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

// Красота и Здоровье

	var habArtBeauty = new ymaps.Placemark([51.142437, 71.412958], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habGaziza = new ymaps.Placemark([51.141486, 71.410677], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habGrandPrix = new ymaps.Placemark([51.136645, 71.41772], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habAjanaSPA = new ymaps.Placemark([51.133985, 71.421919], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habOldBoy = new ymaps.Placemark([51.141845, 71.446052], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habSelfieLove = new ymaps.Placemark([51.129036, 71.41711], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habChildCSCenter = new ymaps.Placemark([51.126595, 71.41216], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habNationalCenterRK = new ymaps.Placemark([51.124914, 71.405049], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habNationalNeurosurgeryCenter = new ymaps.Placemark([51.121734, 71.408572], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habNationalNeurosurgeryCenter = new ymaps.Placemark([51.121734, 71.408572], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habRepublicanChildrenRC = new ymaps.Placemark([51.120643, 71.403099], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habNationalScientificCSCenter = new ymaps.Placemark([51.118745, 71.40257], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habNationalOncologyTransplantologyCenter = new ymaps.Placemark([51.117492, 71.406823], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habEuropharma = new ymaps.Placemark([51.092682, 71.425373], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habCentralHospitalMIA = new ymaps.Placemark([51.083686, 71.401696], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habEducationalAndClinicalCenter = new ymaps.Placemark([51.082163, 71.411371], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habChildrenInfectiousHospital2 = new ymaps.Placemark([51.083435, 71.419879], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var habMedCenter = new ymaps.Placemark([51.075751, 71.426786], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a6060f5fb1662f96008f1_map-point-health.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

// Другое

	var diffBankCenterCredit = new ymaps.Placemark([51.147493, 71.459766], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffBankCenterSMART = new ymaps.Placemark([51.145266, 71.406556], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffBankCenterBuroHaus = new ymaps.Placemark([51.140476, 71.412876], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffAlfaBank = new ymaps.Placemark([51.137039, 71.414714], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffBankCenterQ = new ymaps.Placemark([51.136256, 71.414298], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffCesnaBank = new ymaps.Placemark([51.135434, 71.424711], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffSber = new ymaps.Placemark([51.13127, 71.423857], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffEuroBank = new ymaps.Placemark([51.131985, 71.415642], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffHalykBank = new ymaps.Placemark([51.130843, 71.414998], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffBankCenterKubik = new ymaps.Placemark([51.130937, 71.417861], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffKazkoBank = new ymaps.Placemark([51.129155, 71.414783], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffCitibankKazakhstan = new ymaps.Placemark([51.130084, 71.416279], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	
	var diffBCSAAD = new ymaps.Placemark([51.128741, 71.406863], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffForteBank = new ymaps.Placemark([51.126418, 71.417895], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffAstanaBank = new ymaps.Placemark([51.125696, 71.423051], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffKaspiBank = new ymaps.Placemark([51.124043, 71.421194], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffMaxiMarket = new ymaps.Placemark([51.093275, 71.425414], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffBekkerK = new ymaps.Placemark([51.093818, 71.425661], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffBroccoli = new ymaps.Placemark([51.094081, 71.424298], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffFestivalAvenue = new ymaps.Placemark([51.127607, 71.407501], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffTCFestivalAvenue = new ymaps.Placemark([51.128421, 71.40833], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffTRCAsiaPark = new ymaps.Placemark([51.128344, 71.412336], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffKeruen = new ymaps.Placemark([51.128399, 71.425583], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffNurAstanaMosque = new ymaps.Placemark([51.127013, 71.416308], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffKhazretSultanMosque = new ymaps.Placemark([51.12609, 71.4733], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffFitnessPalace = new ymaps.Placemark([51.12609, 71.4733], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffMartialArtsPalace = new ymaps.Placemark([51.11456, 71.41011], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffSaryarkaSportsComplex = new ymaps.Placemark([51.109946, 71.408241], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffAstanaArena = new ymaps.Placemark([51.107508, 71.403719], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	var diffBarysArenaStadium = new ymaps.Placemark([51.108734, 71.396401], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});

	var diffAlauIcePalace = new ymaps.Placemark([51.10396, 71.40545], {}, {
	    iconLayout: 'default#image',
	    iconImageHref: 'https://uploads-ssl.webflow.com/5f1e897ab5a619ea278df9f6/5f2a605f6eeb287bfa5a989f_map-icon-other.svg',
	    iconImageSize: [52, 52],
	    // iconImageOffset: [-3, -42]
	});	

	// Fun
	myMap.geoObjects
	.add(funWineBar)
	.add(funAugustin)
	.add(funTaikazan)
	.add(funCapitalMP)
	.add(funShokoladnitsa)
	.add(funItaliano)
	.add(funKishlak)
	.add(funTraditional)
	.add(funAbbaXxl)
	.add(funMill)
	.add(funAlasha)
	.add(funPortofino)
	.add(funBagrationi)
	.add(funGrillWine)
	.add(funMammaMia)
	.add(funKoreanHouse)
	.add(funAccordZoloto)
	.add(funBotanGarden)
	.add(funPresidentPark)
	.add(funBauyrzhanMomyshulyPark)
	.add(funArayPark)
	.add(funJetisu)
	.add(funSingingFountain)
	.add(funNurzholBoulevard1)
	.add(funGashiktarPark)
	.add(funLoversPark)
	.add(funCenterPark)
	.add(funJeruikPark)
	.add(funBaiterek)
	.add(funNurzholBoulevard2)
	.add(funTRCHanShatir)
	.add(funAstanaOpera)
	.add(funTRCSariarka)
	.add(funMetropolitanCircus)
	.add(funMetropolitanPark)
	.add(funTRCMegaSW)
	.add(funExpo2017)
	.add(funBowling)
	.add(funKartMax)
	.add(funCenterFamilyRestAiland)
	.add(funGammi)
	;

	// edu
	myMap.geoObjects
	.add(eduKG75)
	.add(eduKG89)
	.add(eduKG78Asil)
	.add(eduKG88)
	.add(eduKG53)
	.add(eduKG63)
	.add(eduKGL66)
	.add(eduGymnasium17)
	.add(eduChoreographyAcademy)
	.add(eduInternationalCchool)
	.add(eduKGL84)
	.add(eduSheikhSchool)
	.add(eduNazarbayevUniversity)

	// hab
	myMap.geoObjects
	.add(habArtBeauty)
	.add(habGaziza)
	.add(habGrandPrix)
	.add(habAjanaSPA)
	.add(habOldBoy)
	.add(habSelfieLove)
	.add(habChildCSCenter)
	.add(habNationalCenterRK)
	.add(habNationalNeurosurgeryCenter)
	.add(habRepublicanChildrenRC)
	.add(habNationalScientificCSCenter)
	.add(habNationalOncologyTransplantologyCenter)
	.add(habEuropharma)
	.add(habCentralHospitalMIA)
	.add(habEducationalAndClinicalCenter)
	.add(habChildrenInfectiousHospital2)
	.add(habMedCenter)
	;

	// diff
	myMap.geoObjects
	.add(diffBankCenterCredit)
	.add(diffBankCenterSMART)
	.add(diffBankCenterBuroHaus)
	.add(diffAlfaBank)
	.add(diffBankCenterQ)
	.add(diffCesnaBank)
	.add(diffSber)
	.add(diffEuroBank)
	.add(diffHalykBank)
	.add(diffBankCenterKubik)
	.add(diffKazkoBank)
	.add(diffCitibankKazakhstan)
	.add(diffBCSAAD)
	.add(diffForteBank)
	.add(diffAstanaBank)
	.add(diffKaspiBank)
	.add(diffMaxiMarket)
	.add(diffBekkerK)
	.add(diffBroccoli)
	.add(diffFestivalAvenue)
	.add(diffTCFestivalAvenue)
	.add(diffTRCAsiaPark)
	.add(diffKeruen)
	.add(diffNurAstanaMosque)
	.add(diffKhazretSultanMosque)
	.add(diffFitnessPalace)
	.add(diffMartialArtsPalace)
	.add(diffSaryarkaSportsComplex)
	.add(diffAstanaArena)
	.add(diffBarysArenaStadium)
	.add(diffAlauIcePalace)
	;


    document.getElementById('fun').onclick = function () {

		// Fun
		myMap.geoObjects
		.add(myMainIcon)
		.add(funWineBar)
		.add(funAugustin)
		.add(funTaikazan)
		.add(funCapitalMP)
		.add(funShokoladnitsa)
		.add(funItaliano)
		.add(funKishlak)
		.add(funTraditional)
		.add(funAbbaXxl)
		.add(funMill)
		.add(funAlasha)
		.add(funPortofino)
		.add(funBagrationi)
		.add(funGrillWine)
		.add(funMammaMia)
		.add(funKoreanHouse)
		.add(funAccordZoloto)
		.add(funBotanGarden)
		.add(funPresidentPark)
		.add(funBauyrzhanMomyshulyPark)
		.add(funArayPark)
		.add(funJetisu)
		.add(funSingingFountain)
		.add(funNurzholBoulevard1)
		.add(funGashiktarPark)
		.add(funLoversPark)
		.add(funCenterPark)
		.add(funJeruikPark)
		.add(funBaiterek)
		.add(funNurzholBoulevard2)
		.add(funTRCHanShatir)
		.add(funAstanaOpera)
		.add(funTRCSariarka)
		.add(funMetropolitanCircus)
		.add(funMetropolitanPark)
		.add(funTRCMegaSW)
		.add(funExpo2017)
		.add(funBowling)
		.add(funKartMax)
		.add(funCenterFamilyRestAiland)
		.add(funGammi)
		;
		// edu (remove)
		myMap.geoObjects
		.remove(eduKG75)
		.remove(eduKG89)
		.remove(eduKG78Asil)
		.remove(eduKG88)
		.remove(eduKG53)
		.remove(eduKG63)
		.remove(eduKGL66)
		.remove(eduGymnasium17)
		.remove(eduChoreographyAcademy)
		.remove(eduInternationalCchool)
		.remove(eduKGL84)
		.remove(eduSheikhSchool)
		.remove(eduNazarbayevUniversity)

		// hab (remove)
		myMap.geoObjects
		.remove(habArtBeauty)
		.remove(habGaziza)
		.remove(habGrandPrix)
		.remove(habAjanaSPA)
		.remove(habOldBoy)
		.remove(habSelfieLove)
		.remove(habChildCSCenter)
		.remove(habNationalCenterRK)
		.remove(habNationalNeurosurgeryCenter)
		.remove(habRepublicanChildrenRC)
		.remove(habNationalScientificCSCenter)
		.remove(habNationalOncologyTransplantologyCenter)
		.remove(habEuropharma)
		.remove(habCentralHospitalMIA)
		.remove(habEducationalAndClinicalCenter)
		.remove(habChildrenInfectiousHospital2)
		.remove(habMedCenter)
		;

		// diff (remove)
		myMap.geoObjects
		.remove(diffBankCenterCredit)
		.remove(diffBankCenterSMART)
		.remove(diffBankCenterBuroHaus)
		.remove(diffAlfaBank)
		.remove(diffBankCenterQ)
		.remove(diffCesnaBank)
		.remove(diffSber)
		.remove(diffEuroBank)
		.remove(diffHalykBank)
		.remove(diffBankCenterKubik)
		.remove(diffKazkoBank)
		.remove(diffCitibankKazakhstan)
		.remove(diffBCSAAD)
		.remove(diffForteBank)
		.remove(diffAstanaBank)
		.remove(diffKaspiBank)
		.remove(diffMaxiMarket)
		.remove(diffBekkerK)
		.remove(diffBroccoli)
		.remove(diffFestivalAvenue)
		.remove(diffTCFestivalAvenue)
		.remove(diffTRCAsiaPark)
		.remove(diffKeruen)
		.remove(diffNurAstanaMosque)
		.remove(diffKhazretSultanMosque)
		.remove(diffFitnessPalace)
		.remove(diffMartialArtsPalace)
		.remove(diffSaryarkaSportsComplex)
		.remove(diffAstanaArena)
		.remove(diffBarysArenaStadium)
		.remove(diffAlauIcePalace)
		;
    };    

    document.getElementById('edu').onclick = function () {
		// edu
		myMap.geoObjects
		.add(eduKG75)
		.add(eduKG89)
		.add(eduKG78Asil)
		.add(eduKG88)
		.add(eduKG53)
		.add(eduKG63)
		.add(eduKGL66)
		.add(eduGymnasium17)
		.add(eduChoreographyAcademy)
		.add(eduInternationalCchool)
		.add(eduKGL84)
		.add(eduSheikhSchool)
		.add(eduNazarbayevUniversity)
	// Fun (remove)
		myMap.geoObjects
		.remove(funWineBar)
		.remove(funAugustin)
		.remove(funTaikazan)
		.remove(funCapitalMP)
		.remove(funShokoladnitsa)
		.remove(funItaliano)
		.remove(funKishlak)
		.remove(funTraditional)
		.remove(funAbbaXxl)
		.remove(funMill)
		.remove(funAlasha)
		.remove(funPortofino)
		.remove(funBagrationi)
		.remove(funGrillWine)
		.remove(funMammaMia)
		.remove(funKoreanHouse)
		.remove(funAccordZoloto)
		.remove(funBotanGarden)
		.remove(funPresidentPark)
		.remove(funBauyrzhanMomyshulyPark)
		.remove(funArayPark)
		.remove(funJetisu)
		.remove(funSingingFountain)
		.remove(funNurzholBoulevard1)
		.remove(funGashiktarPark)
		.remove(funLoversPark)
		.remove(funCenterPark)
		.remove(funJeruikPark)
		.remove(funBaiterek)
		.remove(funNurzholBoulevard2)
		.remove(funTRCHanShatir)
		.remove(funAstanaOpera)
		.remove(funTRCSariarka)
		.remove(funMetropolitanCircus)
		.remove(funMetropolitanPark)
		.remove(funTRCMegaSW)
		.remove(funExpo2017)
		.remove(funBowling)
		.remove(funKartMax)
		.remove(funCenterFamilyRestAiland)
		.remove(funGammi)
		;

		// hab (remove)
		myMap.geoObjects
		.remove(habArtBeauty)
		.remove(habGaziza)
		.remove(habGrandPrix)
		.remove(habAjanaSPA)
		.remove(habOldBoy)
		.remove(habSelfieLove)
		.remove(habChildCSCenter)
		.remove(habNationalCenterRK)
		.remove(habNationalNeurosurgeryCenter)
		.remove(habRepublicanChildrenRC)
		.remove(habNationalScientificCSCenter)
		.remove(habNationalOncologyTransplantologyCenter)
		.remove(habEuropharma)
		.remove(habCentralHospitalMIA)
		.remove(habEducationalAndClinicalCenter)
		.remove(habChildrenInfectiousHospital2)
		.remove(habMedCenter)
		;

		// diff (remove)
		myMap.geoObjects
		.remove(diffBankCenterCredit)
		.remove(diffBankCenterSMART)
		.remove(diffBankCenterBuroHaus)
		.remove(diffAlfaBank)
		.remove(diffBankCenterQ)
		.remove(diffCesnaBank)
		.remove(diffSber)
		.remove(diffEuroBank)
		.remove(diffHalykBank)
		.remove(diffBankCenterKubik)
		.remove(diffKazkoBank)
		.remove(diffCitibankKazakhstan)
		.remove(diffBCSAAD)
		.remove(diffForteBank)
		.remove(diffAstanaBank)
		.remove(diffKaspiBank)
		.remove(diffMaxiMarket)
		.remove(diffBekkerK)
		.remove(diffBroccoli)
		.remove(diffFestivalAvenue)
		.remove(diffTCFestivalAvenue)
		.remove(diffTRCAsiaPark)
		.remove(diffKeruen)
		.remove(diffNurAstanaMosque)
		.remove(diffKhazretSultanMosque)
		.remove(diffFitnessPalace)
		.remove(diffMartialArtsPalace)
		.remove(diffSaryarkaSportsComplex)
		.remove(diffAstanaArena)
		.remove(diffBarysArenaStadium)
		.remove(diffAlauIcePalace)
		;

    };

    document.getElementById('hab').onclick = function () {
	// Fun (remove)
		myMap.geoObjects
		.remove(funWineBar)
		.remove(funAugustin)
		.remove(funTaikazan)
		.remove(funCapitalMP)
		.remove(funShokoladnitsa)
		.remove(funItaliano)
		.remove(funKishlak)
		.remove(funTraditional)
		.remove(funAbbaXxl)
		.remove(funMill)
		.remove(funAlasha)
		.remove(funPortofino)
		.remove(funBagrationi)
		.remove(funGrillWine)
		.remove(funMammaMia)
		.remove(funKoreanHouse)
		.remove(funAccordZoloto)
		.remove(funBotanGarden)
		.remove(funPresidentPark)
		.remove(funBauyrzhanMomyshulyPark)
		.remove(funArayPark)
		.remove(funJetisu)
		.remove(funSingingFountain)
		.remove(funNurzholBoulevard1)
		.remove(funGashiktarPark)
		.remove(funLoversPark)
		.remove(funCenterPark)
		.remove(funJeruikPark)
		.remove(funBaiterek)
		.remove(funNurzholBoulevard2)
		.remove(funTRCHanShatir)
		.remove(funAstanaOpera)
		.remove(funTRCSariarka)
		.remove(funMetropolitanCircus)
		.remove(funMetropolitanPark)
		.remove(funTRCMegaSW)
		.remove(funExpo2017)
		.remove(funBowling)
		.remove(funKartMax)
		.remove(funCenterFamilyRestAiland)
		.remove(funGammi)
		;

		// edu (remove)
		myMap.geoObjects
		.remove(eduKG75)
		.remove(eduKG89)
		.remove(eduKG78Asil)
		.remove(eduKG88)
		.remove(eduKG53)
		.remove(eduKG63)
		.remove(eduKGL66)
		.remove(eduGymnasium17)
		.remove(eduChoreographyAcademy)
		.remove(eduInternationalCchool)
		.remove(eduKGL84)
		.remove(eduSheikhSchool)
		.remove(eduNazarbayevUniversity)

		// hab
		myMap.geoObjects
		.add(habArtBeauty)
		.add(habGaziza)
		.add(habGrandPrix)
		.add(habAjanaSPA)
		.add(habOldBoy)
		.add(habSelfieLove)
		.add(habChildCSCenter)
		.add(habNationalCenterRK)
		.add(habNationalNeurosurgeryCenter)
		.add(habRepublicanChildrenRC)
		.add(habNationalScientificCSCenter)
		.add(habNationalOncologyTransplantologyCenter)
		.add(habEuropharma)
		.add(habCentralHospitalMIA)
		.add(habEducationalAndClinicalCenter)
		.add(habChildrenInfectiousHospital2)
		.add(habMedCenter)
		;

		// diff (remove)
		myMap.geoObjects
		.remove(diffBankCenterCredit)
		.remove(diffBankCenterSMART)
		.remove(diffBankCenterBuroHaus)
		.remove(diffAlfaBank)
		.remove(diffBankCenterQ)
		.remove(diffCesnaBank)
		.remove(diffSber)
		.remove(diffEuroBank)
		.remove(diffHalykBank)
		.remove(diffBankCenterKubik)
		.remove(diffKazkoBank)
		.remove(diffCitibankKazakhstan)
		.remove(diffBCSAAD)
		.remove(diffForteBank)
		.remove(diffAstanaBank)
		.remove(diffKaspiBank)
		.remove(diffMaxiMarket)
		.remove(diffBekkerK)
		.remove(diffBroccoli)
		.remove(diffFestivalAvenue)
		.remove(diffTCFestivalAvenue)
		.remove(diffTRCAsiaPark)
		.remove(diffKeruen)
		.remove(diffNurAstanaMosque)
		.remove(diffKhazretSultanMosque)
		.remove(diffFitnessPalace)
		.remove(diffMartialArtsPalace)
		.remove(diffSaryarkaSportsComplex)
		.remove(diffAstanaArena)
		.remove(diffBarysArenaStadium)
		.remove(diffAlauIcePalace)
		;
    };

    document.getElementById('diff').onclick = function () {
	// Fun (remove)
		myMap.geoObjects
		.remove(funWineBar)
		.remove(funAugustin)
		.remove(funTaikazan)
		.remove(funCapitalMP)
		.remove(funShokoladnitsa)
		.remove(funItaliano)
		.remove(funKishlak)
		.remove(funTraditional)
		.remove(funAbbaXxl)
		.remove(funMill)
		.remove(funAlasha)
		.remove(funPortofino)
		.remove(funBagrationi)
		.remove(funGrillWine)
		.remove(funMammaMia)
		.remove(funKoreanHouse)
		.remove(funAccordZoloto)
		.remove(funBotanGarden)
		.remove(funPresidentPark)
		.remove(funBauyrzhanMomyshulyPark)
		.remove(funArayPark)
		.remove(funJetisu)
		.remove(funSingingFountain)
		.remove(funNurzholBoulevard1)
		.remove(funGashiktarPark)
		.remove(funLoversPark)
		.remove(funCenterPark)
		.remove(funJeruikPark)
		.remove(funBaiterek)
		.remove(funNurzholBoulevard2)
		.remove(funTRCHanShatir)
		.remove(funAstanaOpera)
		.remove(funTRCSariarka)
		.remove(funMetropolitanCircus)
		.remove(funMetropolitanPark)
		.remove(funTRCMegaSW)
		.remove(funExpo2017)
		.remove(funBowling)
		.remove(funKartMax)
		.remove(funCenterFamilyRestAiland)
		.remove(funGammi)
		;

		// edu (remove)
		myMap.geoObjects
		.remove(eduKG75)
		.remove(eduKG89)
		.remove(eduKG78Asil)
		.remove(eduKG88)
		.remove(eduKG53)
		.remove(eduKG63)
		.remove(eduKGL66)
		.remove(eduGymnasium17)
		.remove(eduChoreographyAcademy)
		.remove(eduInternationalCchool)
		.remove(eduKGL84)
		.remove(eduSheikhSchool)
		.remove(eduNazarbayevUniversity)

		// hab (remove)
		myMap.geoObjects
		.remove(habArtBeauty)
		.remove(habGaziza)
		.remove(habGrandPrix)
		.remove(habAjanaSPA)
		.remove(habOldBoy)
		.remove(habSelfieLove)
		.remove(habChildCSCenter)
		.remove(habNationalCenterRK)
		.remove(habNationalNeurosurgeryCenter)
		.remove(habRepublicanChildrenRC)
		.remove(habNationalScientificCSCenter)
		.remove(habNationalOncologyTransplantologyCenter)
		.remove(habEuropharma)
		.remove(habCentralHospitalMIA)
		.remove(habEducationalAndClinicalCenter)
		.remove(habChildrenInfectiousHospital2)
		.remove(habMedCenter)
		;

		// diff
		myMap.geoObjects
		.add(diffBankCenterCredit)
		.add(diffBankCenterSMART)
		.add(diffBankCenterBuroHaus)
		.add(diffAlfaBank)
		.add(diffBankCenterQ)
		.add(diffCesnaBank)
		.add(diffSber)
		.add(diffEuroBank)
		.add(diffHalykBank)
		.add(diffBankCenterKubik)
		.add(diffKazkoBank)
		.add(diffCitibankKazakhstan)
		.add(diffBCSAAD)
		.add(diffForteBank)
		.add(diffAstanaBank)
		.add(diffKaspiBank)
		.add(diffMaxiMarket)
		.add(diffBekkerK)
		.add(diffBroccoli)
		.add(diffFestivalAvenue)
		.add(diffTCFestivalAvenue)
		.add(diffTRCAsiaPark)
		.add(diffKeruen)
		.add(diffNurAstanaMosque)
		.add(diffKhazretSultanMosque)
		.add(diffFitnessPalace)
		.add(diffMartialArtsPalace)
		.add(diffSaryarkaSportsComplex)
		.add(diffAstanaArena)
		.add(diffBarysArenaStadium)
		.add(diffAlauIcePalace)
		;

    };


}


