//BIO
var bio = {
    "name": "  Vignesh Moorthy",
    "role": "  Front End Web Developer",
    "contacts": {
        "mobile": "string",
        "email": "vgnsh002@gmail.com",
        "github": "@vgnsh002",
        "twitter": "string",
        "linkedin": "Vignesh Moorthy",
        "location": "Earth"
    },
    "welcomeMessage": "Patience is an Art well learnt when one is under the mercy of Nature ! .... It also applies for a NanoDegree",
    "skills": ["Optimistic", "Awesome", "Control-freak", "Keep up the Promises"],
    "biopic": "images/Beyblade-grevolution-20040728081539046_640w.png"
};
bio.display = function() {
    var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelmsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedgit = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedmob = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedloc = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email).replace("%url%", "mailto:vgnsh002@gmail.com");
    //var formattedLinkedin = HTMLcontactGeneric.replace("%contact%","linkedin").replace("%data%",bio.contacts.linkedin)

    $("#header").append(formattedImg);
    $("#header").append(formattedName);
    $("#header").append(formattedRole);
    $("#header").append(formattedWelmsg);

    var ids = ["#topContacts", "#footerContacts"];
    for (var i = 0; i < ids.length; i++) {
        id = ids[i];
        $(id).append(formattedmob);
        $(id).append(formattedemail);
        $(id).append(formattedgit);
        $(id).append(formattedloc);

    }


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
};
bio.display();

//WORK

var work = {
    "jobs": [{
        "title": "Web Developer",
        "employer": "Fresher",
        "location": "England",
        "dates": "2016",
        "description": "Develop Things to make it Awesome in Internet"
    }]
};

work.display = function() {

    $("#workExperience").append(HTMLworkStart);
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
        var formattedWorklocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry:last").append(formattedWorklocation);
    }
};
work.display();

//EDUCATION

var education = {
    "schools": [{
        "name": "Velammal College of Engineering and Technology",
        "majors": ["Mechanical"],
        "degree": "B.E",
        "dates": "2012-2016",
        "location": "Madurai,India",
        "url": "www.vcet.ac.in"
    }],

    "onlineCourses": [{
        "school": "Udacity",
        "title": "FrontEnd Web Developer-NanoDegree",
        "dates": "2016",
        "url": "www.udacity.com"
    }]

};


education.display = function() {

    $("#education").append(HTMLschoolStart);
    for (var i = 0; i < education.schools.length; i++) {
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation);


        for (var j = 0; j < education.schools[i].majors.length; j++) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedSchoolMajor);
        }
    }
    $("#education").append(HTMLonlineClasses);
    for (var i = 0; i < education.onlineCourses.length; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
        var formattedOnlineURL = HTMLonlineURL.replace("#", education.onlineCourses[i].url).replace("%data%", "www.udacity.com");
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
    }


};
education.display();

//PROJECTS

var projects = {
    "projects": [{
        "title": "Animal Trading Card",
        "dates": "2016",
        "description": "A card with information of a random animal. I did this project with a Dragon description...!",
        "images": ["images/badass_dragon_sig__by_pdoughnut.png"] //Source:Google
    }]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);


        for (var j = 0; j < projects.projects[i].images.length; j++) {
            var formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            $(".project-entry:last").append(formattedImages);
        }



    }
};
projects.display();


//Click Tracker
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});


$("#mapDiv").append(googleMap);
