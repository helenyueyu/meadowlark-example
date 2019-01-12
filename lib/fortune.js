let fortuneCookies = [
  "Conquer your fears or they will conquer you.",
  "Do not fear what you don't know.",
  "Have patience."
]

exports.getFortune = function() {
  let index = Math.floor(Math.random() * fortuneCookies.length)
  return fortuneCookies[index]
}
