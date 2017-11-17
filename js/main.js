
var objHoroscope = [
   {
   	name : "Aries",
    image:"img/aries.png",
    secretwish: "to be number one",
    keywords:"willpower, Initiative, Determination, Passion, Beginnings, Self-Belief, Innocence",
    month:1

   },
   {
   	name : "Taurus",
    image:"img/taurus.png",
    secretwish: "to own the best of everything",
    keywords:"stability, security, elegance, sensuality, stubbornness, persistence",
    month:2


   },
   {
   	name : "Gemini",
    image:"img/gemini.png",
    secretwish: "to have all the answers",
    keywords:"communication, Collaboration, Synergy, Cleverness, Wittiness,  Inventiveness,  Ingenuity",
    month:3

   },
   {
   	name : "Cancer",
    image:"img/cancer.png",
    secretwish: "to take care of friends and family",
    keywords:"nurturing, Sensitivity, Emotions, Moodiness, Home, Family, Children, Femininity",
    month:4

   },
   {
   	name : "Leo",
    image:"img/leo.png",
    secretwish: "to rule the world",
    keywords:"passion, Romance, Expression, Drama, Playfulness, Courageous, Loyal",
    month:5

   },
   {
   	name : "Virgo",
    image:"img/virgo2.png",
    secretwish: "to be a hero",
    keywords:"health, Helpfulness, Order, Organization, Innocence, Purity",
    month:6

   },
   {
   	name : "Libra",
    image:"img/libra.png",
    secretwish: "to love and be loved in return",
    keywords:"commitment, Partnership, Equality, Balance, Mutuality, Fairness",
    month:7

   },
   {
   	name : "Scorpio",
    image:"img/scorpio.png",
    secretwish: "to have complete and total control",
    keywords:"intimacy, Sex, Secrecy, Power, Intensity, Obsession",
    month:8

   },
   {
   	name : "Sagittarius",
    image:"img/sagittarius.png",
    secretwish: "to make the rules",
    keywords:"adventure, Travel, Expansion, Honesty, Outspokenness, Wisdom",
    month:9

   },
   {
   	name : "Capricorn",
    image:"img/capricorn.png",
    secretwish: "to have every need taken care of",
    keywords:"ambition, Structure, Goals, Long-Term Plans, Prestige, Public Image/Acclaim",
    month:10

   },
   {
   	name : "Aquarius",
    image:"img/aquarius.png",
    secretwish: "to experience total freedom",
    keywords:"friendliness, Eccentricity, Teamwork, Humanitarianism, Technology, Futuristic, Groups",
    month:11

   },
   {
   	name : "Pisces",
    image:"img/pisces.png",
    secretwish: "to find unconditional love",
    keywords:"dreams, Fantasy, Healing, Compassion, Karma, Mystery",
    month: 12

   }

]


  function displayInfo() {

    var datemonth = document.getElementById('dmonth').value
    var dateday = document.getElementById('dday').value

     isSuccess = false

     for(var i=0; i<objHoroscope.length; i++) {
        console.log(i)
        // console.log("horoscope name is: " + objHoroscope[i].name)
        console.log(objHoroscope[i].month)
          if ( document.getElementById('dmonth').value == objHoroscope[i].month ) {
              console.log("success")
            if(document.getElementById('dday').value <= 23) {
              isSuccess = true
              console.log(isSuccess)
            }
          }
          else {
              isSuccess = false
              console.log(isSuccess)
              // no matches found confirm it
          }
          if (isSuccess) {
            console.log("if statement works!!!")
            console.log(document.getElementById('sign'))
            console.log(objHoroscope[i].name)
            document.getElementById('sign').textContent = objHoroscope[i].name
            document.getElementById('picture').src = objHoroscope[i].image
            picture.width = '300'
            picture.height = '150'
            document.getElementById('secretwish').textContent = "Your secret wish is " + objHoroscope[i].secretwish
            document.getElementById('keywords').textContent = "Your keywords are " + objHoroscope[i].keywords

          }
          else {
            console.log("no matches found!")
            // if no matches found, do this ;
            document.getElementById('sign').textContent = "no matches try again!"
            document.getElementById('secretwish').textContent = ""
            document.getElementById('keywords').textContent = ""
            document.getElementById('picture').src = ""
            picture.width = ''
            picture.height = ''
          }
             return
      }
}
