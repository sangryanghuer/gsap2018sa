(function ($) {
  "use strict"; // Start of use strict

  // $.getJSON("./data/local.json", function (data) {
    
  // });

  var part1 = [
    {
        "name": "SangMin Lee(Part1 Leader)",
        "title": "S/W Programer(Computer Science)",
        "profile":    "- ’16 ~ ’18 : Samsung Cloud development.<br>" 
					+ "- ’15 ~ ’16 : IMS(VOLTE) development.<br>" 
					+ "- ’12 ~ ’15 : Factory app development.<br>" 
					+ "- ’11 ~ ‘12 : Fota development.<br>" 
					+ "- ’09 ~ ’11 : RIL(Radio Interface layer)<br>"  
					+ "			  Development.<br>" 
					+ "Matching Mentee: Picadoo<br>" 
					+ "",
		"image": "p1_leesangmin.jpg"
    },
    {
        "name": "Hyeonji Kim",
        "title": "S&M(Economics)",
        "profile":    "- '14~’18 : Marketing(CRM) (SEC)   <br>" 
					+ "- ‘12~’13 : B2C sales management (SEC)<br>" 
					+ "Matching Mentee: iThemba Curios<br>" 
					+ "",
		
        "image": "p1_HyeonjiKim.jpg"
    },
    {
        "name": "Seonwoo Yoo",
        "title": "Design Strategist(Product Design & Biz Administration",
        "profile":    "- '14~’18 : User Experience," 
                    + "            Corporate Design Center<br>" 
					+ "- ‘13~’15 : Product Strategy<br>" 
					+ "            Visual Display Division<br>" 
					+ "- ‘10~’13 : Business consultant<br>" 
					+ "            Communication,Media & High Tech., Accenture<br>" 
					+ "- ‘05~’09 : Product Designer & Design<br>" 
					+ "            Strategist,Mobile Communication Lab, LG Electronics<br>" 
					+ "Matching Mentee: iThemba Curios<br>" 
					+ "",
		"image": "p1_SeonwooYoo.jpg"
    },

    {
        "name": "Dummy",
        "title": "TBD",
        "profile": "TBD",
        "image": "dummy.jpg"
    }
];

  var part2 = [
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello.<br>I’m Seth,<br>a UI & UX Designer.  <br> I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
		"image": "2.jpg"
    },
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello. I’m Seth, a UI & UX Designer. I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
        "image": "1.jpg"
    },
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello. I’m Seth, a UI & UX Designer. I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
        "image": "3.jpg"
    },

    {
        "name": "Dummy",
        "title": "TBD",
        "profile": "TBD",
        "image": "dummy.jpg"
    }
];

  var part3 = [
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello.<br>I’m Seth,<br>a UI & UX Designer.  <br> I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
		"image": "2.jpg"
    },
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello. I’m Seth, a UI & UX Designer. I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
        "image": "1.jpg"
    },
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello. I’m Seth, a UI & UX Designer. I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
        "image": "3.jpg"
    },

    {
        "name": "Dummy",
        "title": "TBD",
        "profile": "TBD",
        "image": "dummy.jpg"
    }
];

  var part4 = [
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello.<br>I’m Seth,<br>a UI & UX Designer.  <br> I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
		"image": "2.jpg"
    },
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello. I’m Seth, a UI & UX Designer. I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
        "image": "1.jpg"
    },
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello. I’m Seth, a UI & UX Designer. I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
        "image": "3.jpg"
    },

    {
        "name": "Dummy",
        "title": "TBD",
        "profile": "TBD",
        "image": "dummy.jpg"
    }
];
  var part5 = [
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello.<br>I’m Seth,<br>a UI & UX Designer.  <br> I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
		"image": "2.jpg"
    },
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello. I’m Seth, a UI & UX Designer. I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
        "image": "1.jpg"
    },
    {
        "name": "Kay Garland",
        "title": "Lead Designer",
        "profile": "Hello. I’m Seth, a UI & UX Designer. I consider myself a craftsman, and I’m someone who cares about the things he makes. I design primarily for user experience but, being a considerate developer, I also consider accessibility, performance, semantics and scalability.",
        "image": "3.jpg"
    },

    {
        "name": "Dummy",
        "title": "TBD",
        "profile": "TBD",
        "image": "dummy.jpg"
    }
];

    var out = "";
    var i;
	
	out +=' <div class="container">';
    out +=' <h2>Mentoring Team : Part 1 </h2>';
    out +='<p class="text-muted">Mentee List : Grow Box, Picadoo, iThemba Curios, Zaro Project .</p>';            
    out +='</div>';
	
    for (i = 0; i < part1.length; i++) {
      out += '<div class="col-sm-4">'
      out += '<div class="team-member">';
      out += '  <img class="mx-auto rounded-circle" src="img/team/' + part1[i].image + '" alt="">';
      out += '  <h4>' + part1[i].name + '</h4>';
      out += '  <p class="text-primary">' + part1[i].title + '</p>';
      out += '  <p class="text-muted">';
      out += part1[i].profile;
      out += '  </p>';
      out += '</div>';
      out += '</div>';
    }
    
	out +=' <div class="container">';
    out +=' <h2>Mentoring Team : Part 2 </h2>';
    out +='<p class="text-muted">Mentee List : Grow Box, Picadoo, iThemba Curios, Zaro Project .</p>';            
    out +='</div>';
   
   for (i = 0; i < part2.length; i++) {
      out += '<div class="col-sm-4">'
      out += '<div class="team-member">';
      out += '  <img class="mx-auto rounded-circle" src="img/team/' + part2[i].image + '" alt="">';
      out += '  <h4>' + part2[i].name + '</h4>';
      out += '  <p class="text-primary">' + part2[i].title + '</p>';
      out += '  <p class="text-muted">';
         out += part2[i].profile;
      out += '  </p>';
      out += '</div>';
      out += '</div>';
    }
	
	out +=' <div class="container">';
    out +=' <h2>Mentoring Team : Part 3 </h2>';
    out +='<p class="text-muted">Mentee List : Grow Box, Picadoo, iThemba Curios, Zaro Project .</p>';            
    out +='</div>';
	
	for (i = 0; i < part3.length; i++) {
      out += '<div class="col-sm-4">'
      out += '<div class="team-member">';
      out += '  <img class="mx-auto rounded-circle" src="img/team/' + part3[i].image + '" alt="">';
      out += '  <h4>' + part3[i].name + '</h4>';
      out += '  <p class="text-primary">' + part3[i].title + '</p>';
      out += '  <p class="text-muted">';
         out += part3[i].profile;
      out += '  </p>';
      out += '</div>';
      out += '</div>';
    }
	
	
	out +=' <div class="container">';
    out +=' <h2>Mentoring Team : Part 4 </h2>';
    out +='<p class="text-muted">Mentee List : Grow Box, Picadoo, iThemba Curios, Zaro Project .</p>';            
    out +='</div>';
    
	for (i = 0; i < part4.length; i++) {
      out += '<div class="col-sm-4">'
      out += '<div class="team-member">';
      out += '  <img class="mx-auto rounded-circle" src="img/team/' + part4[i].image + '" alt="">';
      out += '  <h4>' + part4[i].name + '</h4>';
      out += '  <p class="text-primary">' + part4[i].title + '</p>';
      out += '  <p class="text-muted">';
         out += part4[i].profile;
      out += '  </p>';
      out += '</div>';
      out += '</div>';
    }
	
	out +=' <div class="container">';
    out +=' <h2>Mentoring Team : Part 5 </h2>';
    out +='<p class="text-muted">Mentee List : Grow Box, Picadoo, iThemba Curios, Zaro Project .</p>';            
    out +='</div>';
	
	for (i = 0; i < part5.length; i++) {
      out += '<div class="col-sm-4">'
      out += '<div class="team-member">';
      out += '  <img class="mx-auto rounded-circle" src="img/team/' + part5[i].image + '" alt="">';
      out += '  <h4>' + part5[i].name + '</h4>';
      out += '  <p class="text-primary">' + part5[i].title + '</p>';
      out += '  <p class="text-muted">';
         out += part5[i].profile;
      out += '  </p>';
      out += '</div>';
      out += '</div>';
    }
	
    document.getElementById("js-local").innerHTML = out;


})(jQuery); // End of use strict
