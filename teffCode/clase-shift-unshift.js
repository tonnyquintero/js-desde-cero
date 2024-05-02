// Methods that modify the original array (mutability)

// Shift() -> remove a new element at the first position of an array

const colors = ['yellow', 'blue', 'red']
const removedColors = colors.shift()

console.log(colors);
console.log(removedColors);

// unshift() -> add a new element at the first position of an array

const newColors = colors.unshift('pink', 'purple')

console.log(colors);
console.log(newColors);

// Excercise 

function mangePlaylist(playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist = ['sweater wheater', 'what you know', 'eventually']
console.log('Initial playlist: ', initialPlaylist);

const newSongToAdd = 'the adults are talking'

const updatedPlaylist = mangePlaylist(initialPlaylist, newSongToAdd)
console.log('New song to add: ', newSongToAdd);
console.log('Updated playlist: ', updatedPlaylist);
