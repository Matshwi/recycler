var a = 1;

var para1 = document.querySelector(".welcome");
var others = document.querySelector(".others");
var btnsender = document.querySelector(".btnsender");

var styler = document.querySelector("#style");
var styler1 = document.querySelector("#styler");


var btn = document.querySelector("#button");

var item = document.querySelector(".it");


 item.style.display = "none";
	para1.style.display = "none";
	others.style.display = "none";
	btnsender.style.display = "none";

	var link = `

	

@media screen and (max-width: 360px) {
  img{
	display: block !important;
	width: 400px !important;
	margin-left: -30px !important;
	margin-top: 50% !important;
}
}

@media screen and (max-width: 576px) {
  img {
    margin-left: 90%;
	box-shadow: 20px 20px 60px grey;
	margin-top: 50%;
	margin-left: 25%;
	width: 300px;
  }
}

@media screen and (max-width:  768px) {
	img {
		margin-left: 90%;
		box-shadow: 20px 20px 60px grey;
		margin-top: 30%;
		margin-left: 30%;
		width: 300px;
	}
}

@media screen and (max-width:  992px) {
	img {
		margin-left: 90%;
		box-shadow: 20px 20px 60px grey;
		margin-top: 30%;
		margin-left: 30%;
		width: 300px;
	}
}

@media screen and (max-width:  1200px) {
	img {
		margin-left: 90%;
		box-shadow: 20px 20px 60px grey;
		margin-top: 20%;
		margin-left: 25%;
		width: 300px;
	}
} `;






function myfunc(){

styler.innerHTML = link;



btn.addEventListener("click", ()=> {

	styler.remove();

 var link1 = `body {
	text-align: center !important;
}

img {
	transition: 1s;
	width: 400px !important;
margin-left: -30px !important;
box-shadow: 20px 20px 60px grey !important;
margin-top: 5% !important;
}

button {
	transition: 1s;
	background: transparent !important;
    margin-right: 20px !important;
    float: right !important;
    margin-top: 90px !important;
    width: 100px !important;
    height: 35px !important;
    border-radius: 10px !important;
    border: 2px solid #26ae60 !important;
    color: #26ae60 !important;
}
.welcome {
	 margin-top: 40% !important;
	 transition: 1s;
}
.others {
	 margin-top: 10% !important;
	 transition: 1s;
}


@media screen and (max-width: 576px) {
	img {
		width: 400px;
    	/* margin-left: 0px; */
    	box-shadow: 20px 20px 60px grey;
    	margin-top: 5%;
	}

	.welcome {
		 margin-top: 90px;
	}
}


@media screen and (max-width: 768px){
	.welcome {
		margin-top: 60px;
	}

	button {
		margin-top: 80px;
	}
}

@media screen and (max-width: 992px) {
	.welcome {
		margin-top: 10px;
	}

	.others {
		margin-top: 5%;
	}
}`;




	para1.style.display = "block";
	others.style.display = "block";
	btnsender.style.display = "block";
	styler.style.display = "none";
	styler1.innerHTML = link1;


});
}





/*
    var a;
      cont.addEventListener('click', ()=>{

        if (a==1) {
          first.style.display = 'none';
          last.style.display = 'block';
          cont.innerHTML = "Hide";
          return a=0;
        }
        else {
          last.style.display = 'none';
          first.style.display = 'block';
         cont.innerHTML = "show";
          return a=1;

        }

      })*/