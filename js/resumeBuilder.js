/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 , browser: true*/
/*global $, jQuery*/
var name = "André Venâncio";
var role = "Jr. Developer";
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["Java", "C++", "ASP.NET", "C#"];

$("#main").append(skills.length);