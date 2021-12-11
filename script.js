$(document).ready(function () {


  $(".input").keydown(function (event) {
    if (event.keyCode === 13) {
      $(".primaryContained").click();
      event.preventDefault();
    }
  });

  $(".primaryContained").on('click', function () {
    $(".comment").addClass("commentClicked");
  });//end click
  $("textarea").on('keyup.enter', function () {
    $(".comment").addClass("commentClicked");
  });//end keyup
});//End Function

var badwords = new Array(64);
badwords[0] = "fucking"; badwords[5] = "hell"; badwords[10] = "suck"; badwords[15] = "pussy"; badwords[20] = "ass";
badwords[1] = "shit"; badwords[6] = "fuck"; badwords[11] = "dumb"; badwords[16] = "asshole"; badwords[21] = "dickhead";
badwords[2] = "bastard"; badwords[7] = "tanga"; badwords[12] = "bobo"; badwords[17] = "inutil"; badwords[22] = "gago";
badwords[3] = "putangina"; badwords[8] = "puta"; badwords[13] = "letche"; badwords[18] = "hudas"; badwords[23] = "lintik";
badwords[4] = "ulol"; badwords[9] = "tarantado"; badwords[14] = "bwisit"; badwords[19] = "burat"; badwords[24] = "kupal";
badwords[25] = "putang"; badwords[28] = "depungol"; badwords[31] = "pisteng"; badwords[34] = "crap"; badwords[37] = "tamod";
badwords[26] = "ungas"; badwords[29] = "hinayupak"; badwords[32] = "yawa"; badwords[35] = "bullshit"; badwords[38] = "stupid";
badwords[27] = "punyeta"; badwords[30] = "pucha"; badwords[33] = "pakshet"; badwords[36] = "cock"; badwords[39] = "motherfucker";
badwords[40] = "tite"; badwords[41] = "bulbol"; badwords[42] = "betlog"; badwords[43] = "bayag"; badwords[44] = "barnakol";
badwords[45] = "burikat"; badwords[46] = "burnik"; badwords[47] = "kantot"; badwords[48] = "kantutan"; badwords[49] = "blowjob";
badwords[50] = "mamatay"; badwords[51] = "bitch"; badwords[52] = "piss"; badwords[53] = "curse"; badwords[54] = "gruesome";
badwords[55] = "fool"; badwords[56] = "puke"; badwords[57] = "bilat";badwords[58] = "siraulo";badwords[59] = "puday"; badwords[60] = "foolish";
badwords[61] = "tangina";badwords[62] = "pakyu";badwords[63] = "engot";badwords[64] = "etits";


new Vue({
  el: "#app",
  data: {
    title: 'Add a comment',
    newItem: '',
    item: [],
  },
  methods: {
    addItem() {
      let words = this.newItem,
        wordArray = words.split(' ');
      let final;
      for (let i = 0; i < wordArray.length; i++) {
        for (let j = 0; j < badwords.length; j++) {
          if (wordArray[i].toUpperCase().includes(badwords[j].toUpperCase())) {
            censor="*".repeat(badwords[j].length);
            wordArray[i] = wordArray[i].replace(new RegExp(badwords[j],'gi'), censor);

          } 
        }

      }
      final = wordArray.join(' ');
      this.item.push(final);
      this.newItem = "";
    }
  }
});