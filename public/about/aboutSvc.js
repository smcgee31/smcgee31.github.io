angular.module('app').service('aboutSvc', function() {

    var skillset = [
        {
            name: 'html',
            img: 'public/img/htmlLogo.png'
        },
        {
            name: 'css',
            img: 'public/img/cssLogo.png'
        },
        {
            name: 'javascript',
            img: 'public/img/javascriptLogo.png'
        },
        {
            name: 'angularjs',
            img: 'public/img/angularjsLogo.png'
        },
        {
            name: 'jquery',
            img: 'public/img/jqueryLogo.png'
        }
    ];

    var interests = [
        {
            name: 'Water Sports',
            img: 'public/img/waterSkiing.svg',
            memo: 'Boating, water skiiing, jet skiing, etc.'
        },
        {
            name: 'Movies',
            img: 'public/img/cinema.svg',
            memo: 'Love \'em - \'nuff said!'
        },
        {
            name: 'Snowboarding',
            img: 'public/img/snowboard.svg',
            memo: 'I\'d rather snowboard than water ski!'
        },
        {
            name: 'Martial Arts',
            img: 'public/img/martialArts.svg',
            memo: 'Black belt in RyuKyu Kempo.'
        },
        {
            name: 'Travel',
            img: 'public/img/travelShip.svg',
            memo: 'WooWoo! Who doesn\'t love to travel!?'
        },
        {
            name: 'Hang Gliding',
            img: 'public/img/hangGliding.svg',
            memo: 'Don\'t know how YET, but fascinated with it.'
        }
    ];

    this.getSkills = function() {
        return skillset;
    };

    this.getInterests = function() {
        return interests;
    };


});
