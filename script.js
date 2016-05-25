// TODO: Add more quotes and randomize them. (The way I'm doing it is time-consuming but dammit it's what I want to do.)
// 			 Add twitter stuff.



$(document).ready(function(){

	var newQuote = $('#newQuote'), quoteView = $('#quoteView'), body = $('body'), quote = $('#quote'),
		quoteImg = $('.quoteImg');
	var color = ['#efefef', '#ADF7E5', '#FF8585', '#F1FFB8', '#CF9B61'];
	var bg = {
		plain: color[0],
		mint: color[1],
		strawberry: color[2],
		banana: color[3],
		peanut: color[4],
		newColor: 0,
		change: function(newColor){
			if (this.newColor === color.length)
				this.newColor = 0;
			return color[this.newColor++];
		}
	};

	function quickBtn(txt, tag, cls){
	    this.txt = txt;
	    this.tag = '<'+tag+'>';
	    this.tagClose = '</'+tag+'>';
	    this.cls = cls;
		};

		quickBtn.prototype.make = function(element){
				element.addClass('btn '+this.cls).html(this.tag+this.txt+this.tagClose);
	    	}

	var quoteBtn = new quickBtn('', 'p', 'rQuote');

	$(function init(){

		quoteBtn.make(newQuote);

	}());

	$('.'+quoteBtn.cls).on('click', function(){
			quoteView.css('background', bg.change());
			quoteImg.attr('src', 'img/ql2.gif');
		});

	



/*


@I was convinced that the seemingly normal programmers I ran into\ were actually sociopaths
who had experienced,\ then repressed,\ the trauma of learning to code.
      \      \      \    -- Quincy Larson[PAUSE]


 */










});