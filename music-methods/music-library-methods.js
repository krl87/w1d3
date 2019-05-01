var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

// prints a list of all playlists, in the form:
  printPlaylists: function () {
   for (var playlist in this.playlists) {
    var playlistId = this.playlists[playlist].id;
    var playlistName = this.playlists[playlist].name;
    var playlistTracks = this.playlists[playlist].tracks.length;
    console.log(playlistId+":",playlistName,"-",playlistTracks,"tracks");
   }
  },

// prints a list of all tracks, in the form:
  printTracks: function () {
   for (var track in this.tracks) {
    var trackId = this.tracks[track].id;
    var trackName = this.tracks[track].name;
    var trackArtist = this.tracks[track].artist;
    var trackAlbum = this.tracks[track].album;
    console.log(trackId+ ":",trackName,"by",trackArtist,"("+trackAlbum+ ")");
    }
  },

// prints a list of tracks for a given playlist, in the form:
  printPlaylist: function (playlistId) {
    var pId = this.playlists[playlistId].id;
    var playlistName = this.playlists[playlistId].name;
    var playlistTracks = this.playlists[playlistId].tracks.length;
    console.log(playlistId+":",playlistName,"-",playlistTracks,"tracks");

    var array = this.playlists[playlistId].tracks;

  for (i = 0; i < array.length; i++) {
    var trackId = this.tracks[array[i]].id;
    var trackName = this.tracks[array[i]].name;
    var trackArtist = this.tracks[array[i]].artist;
    var trackAlbum = this.tracks[array[i]].album;
    console.log(trackId+ ":",trackName,"by",trackArtist,"("+trackAlbum+ ")");
    }
  },
  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
   return this.playlists[playlistId].tracks.push(trackId);
  },

  // adds a track to the library

  addTrack: function (name, artist, album) {
    var newTrackId = findTrackCount().length + 1;
    var trackNum = "t0"+ newTrackId;
    this.tracks[trackNum] = {
      name: name,
      artist: artist,
      album: album,
    }
  },

  // adds a playlist to the library

  addPlaylist: function (name) {
    var newPlaylistId = findPlaylistCount().length + 1;
    var playlistNum = "p0"+ newPlaylistId;
    this.playlists[playlistNum] = {
      id: playlistNum,
      name: name,
      tracks: [],
    }
  }
}
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use “string”.search(“tri”)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}

function findTrackCount() {
  return (Object.keys(library.tracks));
}

function findPlaylistCount() {
  return (Object.keys(library.playlists));
}

// generates a unique id
// (use this for addTrack and addPlaylist)
var uid = function() {
 return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
//addTrackToPlaylist("t01","p02")
//console.log(printPlaylists())
//console.log(printTracks())
//console.log(printPlaylist("p01"))
//addTrackToPlaylist("t01","p02")
//console.log(library.playlists)
// addTrack("ME!", "Taylor Swift feat. Brandon Urie", "Unreleased Album");
// addPlaylist("Creature Fear");
// console.log(library);
library.addPlaylist("Sad");
library.printPlaylists();