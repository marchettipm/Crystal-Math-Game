<script type="text/javascript">


	var redGem;
	var greenGem;
	var blueGem;
	var yellowGem;
	var sum;
	var random;
	var wins = 0;
	var losses = 0;
	var targetNumber;



function randomNumber(min, max) {
	 return min + Math.floor((Math.random() * (max + 1 - min)));
		}

function initializeGemValues () {
		$(".redGem").val(randomNumber(1,12));
		$(".greenGem").val(randomNumber(1,12));
		$(".blueGem").val(randomNumber(1,12));
		$(".yellowGem").val(randomNumber(1,12));
			console.log($(".redGem").val());

	}
function reset(){
		sum = 0;
		targetNumber = randomNumber(19,121);
		$("#rndNum").text(targetNumber);
		$("#wins").text(wins);
		$("#losses").text(losses);
		initializeGemValues();
	}

$(document).ready(function(){
	


reset();

$(".gem").on('click', function(){
	sum = sum + parseInt($(this).val());
	$("#sumTotal").text(sum);
	if(sum === targetNumber) {
		wins ++;
		$("#wins").text(wins);
		reset();
	}
	
	if(sum > targetNumber) {
		losses ++;
		$("#losses").text(losses);
		reset();
	}

});


});

</script>