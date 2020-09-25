Site.portfolio = {
    post: {

    },
    taxo: {

    },
    init: function() {
      App.vues.push('services');

      App.data.services = {
        arts: [
          { icon: 'fa fa-signal',   name: "IoT Maker" },
          { icon: 'fa fa-heart',    name: "DevOps Advocate" },
          { icon: 'fa fa-compass',  name: "Tech Enthusiast" },
          { icon: 'fa fa-suitcase', name: "Business Consultant" },
          { icon: 'fa fa-linux',    name: "FOSS Guru" },
          { icon: 'fa fa-cog',      name: "ITC Contractor" },
        ],
      };

      App.vues.push('portfolio');

      App.data.portfolio = {
          category: [
{ name: 'platforms', text: 'Platforms' },
{ name: 'languages', text: 'Languages' },
{ name: 'framework', text: 'Framework' },
            ],
            projects: [
            ],
        };

        var listing = {
            platforms: [{
                cycle: "2014", alias: 'system2use', title: "System 2 Use"
            },{
                cycle: "2015", alias: 'runtime2use', title: "Runtime 2 Use"
            },{
                cycle: "2016", alias: 'backend2use', title: "Backend 2 Use"
            },{
                cycle: "2017", alias: 'cloud2use', title: "Cloud 2 Use"
            }],
            languages: [{
                cycle: "2014", alias: 'python2use', title: "Python 2 Use"
            },{
                cycle: "2015", alias: 'nodejs2use', title: "Node.js 2 Use"
            },{
                cycle: "2016", alias: 'php2use', title: "PHP 2 Use"
            },{
                cycle: "2017", alias: 'shell2use', title: "Shell 2 Use"
            }],
            framework: [{
                cycle: "2014", alias: 'flask2use',  title: "Flask 2 Use"
            },{
                cycle: "2015", alias: 'django2use',  title: "Django 2 Use"
            },{
                cycle: "2016", alias: 'crossbar2use',  title: "CrossBar 2 Use"
            },{
                cycle: "2017", alias: 'airflow2use',  title: "AirFlow 2 Use"
            },{
                cycle: "2014", alias: 'express2use',  title: "Express 2 Use"
            },{
                cycle: "2015", alias: 'parse2use',  title: "Parse 2 Use"
            },{
                cycle: "2016", alias: 'hubot2use',  title: "Hubot 2 Use"
            },{
                cycle: "2014", alias: 'flight2use',  title: "Flight 2 Use"
            },{
                cycle: "2015", alias: 'laravel2use',  title: "Laravel 2 Use"
            },{
                cycle: "2016", alias: 'wordpress2use',  title: "WordPress 2 Use"
            }],
        };

        for (var j=0 ; j<App.data.portfolio.category.length ; j++) {
            var categ = App.data.portfolio.category[j].name;

            for (var i=0 ; i<listing[categ].length ; i++) {
                if (!(listing[categ][i].image)) {
                    listing[categ][i].image = '/images/cover/'+listing[categ][i].alias+'.png';
                }

                App.data.portfolio.projects.push({
                    label: categ,
                    title: listing[categ][i].title,
                    cover: '/images/logos/'+listing[categ][i].alias+'.png',
                    links: {
        web: "http://bitbucket.org/"+listing[categ][i].alias+"/"
                    },
                    cycle: listing[categ][i].cycle,
                });
            }
        }
    },
    load: function($) {
        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixitup({
            targetSelector: '.portfolio',
            filterSelector: '.filter',
            effects: ['fade'],
            easing: 'snap',
            // call the hover effect
            onMixEnd: Site.portfolio.mixs()
        });
    },
    mixs: function() {
        // Simple parallax effect
        $('#portfoliolist .portfolio').hover(
                function() {
                    $(this).find('.label').stop().animate({bottom: 0}, 200);
                    $(this).find('img').stop().animate({top: -30}, 500);
                },
                function() {
                    $(this).find('.label').stop().animate({bottom: -40}, 200);
                    $(this).find('img').stop().animate({top: 0}, 300);
                }
        );

    }
};

App.hook('init', Site.portfolio.init);
App.hook('load', Site.portfolio.load);
