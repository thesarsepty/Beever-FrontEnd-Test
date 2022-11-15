let words = "beever";

// Buatlah skema logika untuk memuat kata diatas menjadi berbentuk seperti berikut : 
// b
// be
// bee
// beev
// beeve
// beever
let output = ''
for(let i = 0; i < words.length; i++){
  output+=words[i]
  console.log(output)
}