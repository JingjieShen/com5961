// storymap_data can be an URL or a Javascript object
//var storymap_data = '//media.knightlab.com/StoryMapJS/demo/demo.json';

var storymap_data = {

  storymap: {
    slides: [{
      type: "overview",
      date: "2013-2017",
      text: {
        headline: "My study experience",
        text: "<p> This map will introduce my study experience in a four-year study in university. In these four years, thanks to some opportunities, in addition to studying at Shanghai University, I still got chances to have exchange learning experiences in the United States and Germany. </p>"
      },
      media: {
        url: "header.jpg",
        credit: "United States/Germany/Anhui Province/Shanghai",
        caption: "About myself"
      }
    }, {
      date: "2014",
      text: {
        headline: "Three Days at Harvard University",
        text: "<p> In 2014, I took part in an exchange program to America for two weeks. I spent three days in Harvard University. Professor in Harvard University taught us how to be a leader and how to make a speech. </p>"
      },
      location: {
        name: "Harvard University",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 42.377,
        lon: -71.11666,
        zoom: 16,
        line: true
      },
      media: {
        url: "harvard.jpg",
        type: 		"image",
        credit: "Harvard University",
        caption: "United States"
      }
    }, {
      date: "2014",
      text: {
        headline: "Three days at The United States Military Academy",
        text: "<p> It’s really an unforgettable experience for me. West Point is a military school in America. It is hard to get into because you need to go through a lot of check. At West Point, I not only knew American soldiers’ schedule but also climbed the snowy mountain to challenge myself.</p> "
      },
      location: {
        name: "West Point",
        lat: 41.39183,
        lon: -73.96250,
        zoom: 16,
        line: true
      },
      media: {
        url: "west point.jpg",
        credit: "West Point",
        caption: "United States"
      }
    }, {
      date: "2016",
      text: {
        headline: "Two weeks in Germany",
        text: "<p> In November, 2016, I spent 2 weeks in Germany. During these two weeks, I had a communication with students from Cologne College of Journalism, discussing the difference between Chinese media and German media. We still visited some mainstream medias and attractions in Germany. </p>"
      },
      location: {
        name: "Germany",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 50.941278,
        lon: 6.95828,
        zoom: 16,
        line: true
      },
      media: {
        url: "germany.jpg",
        type:     "image",
        credit: "Berlin/Cologne",
        caption: "Germany"
      }
    }, {
      date: "2015",
      text: {
        headline: "Seven days in Anhui Province",
        text: "<p> During summer vacation in 2015，we went to Anhui Province for our social practice. We went to the mine to experience the life of miners. Miners worked very hard and stayed in the mine for at least 8 hours every day. But the conditions of mine were very poor, full of noise and ash. </p>"
      },
      location: {
        name: "Anhui",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 33.6668284,
        lon: 116.97460,
        zoom: 16,
        line: true
      },
      media: {
        url: "anhui.jpg",
        type:     "image",
        credit: "Anhui Province",
        caption: "China"
      }
    }, {
      date: "2013-2017",
      text: {
        headline: "Four years at Shanghai University",
        text: "<p> I completed my undergraduate study at Shanghai University. It carries the memory of my four-year university lives. Every story which happens here is worth remembering. </p>"
      },
      location: {
        name: "Shanghai University",
        icon: "https://maps.gstatic.com/intl/en_us/mapfiles/ms/micons/blue-pushpin.png",
        lat: 31.3167266933,
        lon: 121.388443,
        zoom: 16,
        line: true
      },
      media: {
        url: "graduation.jpg",
        type:     "image",
        credit: "Shanghai University",
        caption: "Shanghai"
      }
    }]
  }
}

// certain settings must be passed within a separate options object
var storymap_options = {
  language: 'en', // required; two-letter ISO language code
  map_type: 'osm:standard',          // required
  // map_type: 'zoomify',
  map_as_image: false, // required
  calculate_zoom: true,
  map_subdomains: '01234', // optional
};

var storymap = new VCO.StoryMap('mapdiv', storymap_data, storymap_options);
window.onresize = function(event) {
  storymap.updateDisplay(); // this isn't automatic
}